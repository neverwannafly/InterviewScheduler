class InterviewsController < ApplicationController

  # Fetch interviews by date
  def fetch
    if can_view
      start_time = params[:start].to_datetime.beginning_of_day
      end_time = params[:end].to_datetime.end_of_day
      interviews = Interview.where(:start => start_time..end_time)
      render json: interviews
    else
      render json: {}
    end
  end

  # Get a single interview
  def get
    if can_view
      interview = Interview.find(params[:id])
      members = User.select(:id, :username).joins(:user_interviews).where(:user_interviews => {:interview_id => interview.id})
      render json: {
        :id => interview.id,
        :title => interview.title,
        :agenda => interview.agenda,
        :members => members,
        :start => interview.start,
        :end => interview.end,
        :comments => interview.comments,
        :created_by => interview.user.username,
      }
    else
      render json: {}
    end
  end

  # get interviews of a particular user
  def user_interviews
    if can_view
      @interviews = Interview.joins(:user_interviews).where(:user_interviews => {:user_id => current_user})
      interviews = []
      @interviews.each do |interview|
        interviews.append({
          :id => interview.id,
          :title => interview.title,
          :agenda => interview.agenda,
          :start => interview.start,
          :end => interview.end,
          :comments => interview.comments,
          :created_by => interview.user.username,
        })
      end
      render json: {
        :success => true,
        :interviews => interviews,
      }
    else
      render json: {
        :success => false
      }
    end
  end

  def update
    if can_edit
      @interview = Interview.find(params[:id])
      @members = User.find(params[:interview][:members])
      if !check_conflicts(@members, Time.zone.parse(interview_params[:start]), Time.zone.parse(interview_params[:end]))
        if @interview.update interview_params
          @members.each do |member|
            now = Time.now + 5.seconds
            send_time = @interview.start - 30.minutes
            InterviewMailer.with(:interview=>@interview, :user_id=>member).updation_mails.deliver_later(wait_until: now)
            InterviewMailer.with(:interview=>@interview, :user_id=>member).reminder_mails.deliver_later(wait_until: send_time)
          end
          render json: {
            :success => true,
          }
        end
      else
        render json: {
          :success => false,
          :error => "Some users have conflicting schedules",
        }
      end
    else
      render json: {
        :success => false,
        :error => "Not sufficient permission to update!",
      }
    end
  end

  def delete
    if can_delete
      Interview.delete(params[:id])
      render json: {
        :success => true,
      }
    else
      render json: {
        :success => false,
        :error => "Not sufficient permission to delete!",
      }
    end
  end

  def create
    if can_create
      @interview = Interview.new interview_params
      members = User.find(params[:interview][:members])
      if !check_conflicts(members)
        @interview.user = current_user
        if @interview.save
          user_interviews = []
          members.each do |member|
            user_interviews.push({
              user: member, interview: @interview
            })
            send_time = @interview.start - 30.minutes
            InterviewMailer.with(:interview=>@interview, :user_id=>member.id).reminder_mails.deliver_later(wait_until: send_time)
          end
          UserInterview.create user_interviews
          render json: {
            :success => true,
          }
        else
          render json: {
            :success => false,
            :error => "Cannot create interview.",
          }
        end
      else
        render json: {
          :success => false,
          :error => "Some members have conflicting schedules.",
        }
      end
    else
      render json: {
        :success => false,
        :error => "Not sufficient permission to create!",
      }
    end
  end

private

  # Returns true if there are any conflicts
  def check_conflicts(members, start_time=nil, end_time=nil)
    member_ids = members.map { |member| member.id }
    start_time ||= @interview.start + 1.second
    end_time ||= @interview.end - 1.second
    current_interview_id = @interview.id || -1

    # threshold are just a way to represent infinity
    # I couldnt find a cleaner implementation of infinity in rails
    # as everyone of them pretty much did the same thing.
    upper_threshold = Time.now + 1000.years
    lower_threshold = Time.now - 1000.years

    non_conflicting_interviews = Interview.where(:start => end_time..upper_threshold).where.not(:id => current_interview_id).joins(:user_interviews).where(:user_interviews => {:user_id => member_ids}).or(
      Interview.where(:end => lower_threshold..start_time).where.not(:id => current_interview_id).joins(:user_interviews).where(:user_interviews => {:user_id => member_ids})
    ).count
    total_interviews = Interview.where.not(:id => current_interview_id).joins(:user_interviews).where(:user_interviews => {:user_id => member_ids}).count

    return non_conflicting_interviews != total_interviews
  end

  def interview_params
    params.require(:interview).permit(:end, :start, :title, :comments, :agenda, :created_by)
  end

end
