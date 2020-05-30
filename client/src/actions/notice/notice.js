import { ISSUE_NOTICE, DISMISS_NOTICE } from "../../types/notice"

export const issueNotice = (content, type) => {
  return {
    type: ISSUE_NOTICE,
    payload: { content, type },
  }
}

export const dismissNotice = () => {
  return {
    type: DISMISS_NOTICE,
  }
}