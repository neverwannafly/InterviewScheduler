import { ISSUE_NOTICE, DISMISS_NOTICE } from "../types/notice";

const initialState = {
  shouldDisplay: false,
  content: null,
  type: null,
};

const noticeReducer = (state = initialState, action) => {
  switch(action.type) {
    case ISSUE_NOTICE:
      return {content: action.payload.content, type: action.payload.type, shouldDisplay: true}
    case DISMISS_NOTICE:
      return {content: null, type: null, shouldDisplay: false}
    default:
      return state;
  }
}

export default noticeReducer;