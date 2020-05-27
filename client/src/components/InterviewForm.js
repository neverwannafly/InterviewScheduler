import React from 'react';
import Autocomplete from './Autocomplete';

const InterviewForm = ({userData, handleTitleChange, handleAgendaChange, handleMembersChange, handleStartChange, handleEndChange, handleCommentChange, handleSubmit, submitValue, defaults={}}) => {
  return (
    <div className="form-wrapper">
      <form id="edit_interview" acceptCharset="UTF-8" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="edit_interview_title">Title</label>
          <input 
            className="form-control" 
            type="text"
            id="edit_interview_title"
            onChange={handleTitleChange}
            defaultValue={defaults.title || ''}
          />
        </div>
      
        <div className="form-group">
          <label htmlFor="edit_interview_agenda">Agenda</label>
          <input 
            className="form-control" 
            type="text" 
            id="edit_interview_agenda"
            onChange={handleAgendaChange}
            defaultValue={defaults.agenda || ''}
          />
        </div>
      
        <Autocomplete 
          label={'Members'} 
          userData={userData}
          handleMembersChange={handleMembersChange}
          defaultValue={defaults.members || []}
        />
      
        <div className="form-group">
          <label htmlFor="edit_dtp_beg">Start</label>
          <input 
            className="form-control" 
            id="edit_dtp_beg" 
            type="datetime-local"
            onChange={handleStartChange}
            defaultValue={defaults.start || ''}
          />
        </div>
      
        <div className="form-group">
          <label htmlFor="edit_dtp_end">End</label>
          <input 
            className="form-control" 
            id="edit_dtp_end" 
            type="datetime-local" 
            onChange={handleEndChange}
            defaultValue={defaults.end || ''}
          />
        </div>
      
        <div className="form-group">
          <label htmlFor="edit_interview_comments">Comments</label>
          <textarea 
            className="form-control"
            id="edit_interview_comments"
            onChange={handleCommentChange}
            defaultValue={defaults.comments || ''}
          />
        </div>
      
        <div className="actions">
          <input type="submit" value={submitValue} className="btn btn-danger btn-block"/>
        </div>
      
      </form>
    </div>
  )
}

export default InterviewForm;