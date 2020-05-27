import React from 'react';

const ViewInterview = ({interview}) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <tbody>
          <tr>
            <th scope="col">Title</th>
            <td id="_title">{interview.title || ''}</td>
          </tr>
          <tr>
            <th scope="col">Agenda</th>
            <td id="_agenda">{interview.agenda || ''}</td>
          </tr>
          <tr>
            <th scope="col">Members</th>
            <td id="_members">{interview.members.map(member => member.username).join(', ') || ''}</td>
          </tr>
          <tr>
            <th scope="col">Start Time</th>
            <td id="_start">{interview.start || ''}</td>
          </tr>
          <tr>
            <th scope="col">End Time</th>
            <td id="_end">{interview.end || ''}</td>
          </tr>
          <tr>
            <th scope="col">Comments</th>
            <td id="_comments">{interview.comments || ''}</td>
          </tr>
          <tr>
            <th scope="col">Created By</th>
            <td id="_created_by">{interview.created_by || ''}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ViewInterview;