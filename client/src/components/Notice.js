import React from 'react';
import { connect } from 'react-redux';
import { dismissNotice } from '../actions/notice/notice';

const Notice = ({shouldDisplay, content, type, dismissNoticeBox}) => {
  const handleNoticeDismiss = () => {
    dismissNoticeBox();
  }
  if (!shouldDisplay) {
    return null;
  }
  return (
    <div className="notice">
      <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
        { content }
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={handleNoticeDismiss}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  shouldDisplay: state.notice.shouldDisplay,
  content: state.notice.content,
  type: state.notice.type,
});

const mapDispatchToProps = dispatch => ({
  dismissNoticeBox: () => {
    dispatch(dismissNotice());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Notice);