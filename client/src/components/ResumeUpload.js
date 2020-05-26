import React from 'react';

const ResumeUpload = () => {
  return (
    <div className="page">
      <form id="upload_resume" acceptCharset="UTF-8">
        <div className="form-group form-inline">
          <input
            className="form-control-file"
            type="file"
            id="user_resume"
          />
        </div>
        <div className="actions form-group form-inline">
          <input type="submit"value="Upload" className="btn btn-primary btn-block"/>
        </div>
      </form>
    </div>
  );
}

export default ResumeUpload;