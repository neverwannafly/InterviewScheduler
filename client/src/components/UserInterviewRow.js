import React from 'react';

const UserInterviewRow = ({isHeading, content}) => {
  if (isHeading) {
    return (
      <tr>
        <th className="user-interview-cell" scope="col"> ID </th>
        <th className="user-interview-cell" scope="col"> Title </th>
        <th className="user-interview-cell" scope="col"> Agenda </th>
        <th className="user-interview-cell" scope="col"> Start Time </th>
        <th className="user-interview-cell" scope="col"> End Time </th>
        <th className="user-interview-cell" scope="col"> Comments </th>
        <th className="user-interview-cell" scope="col"> Created By </th>
      </tr>
    );
  } else {
    return (
      <tr>
        <td className="user-interview-cell"> {content.id} </td>
        <td className="user-interview-cell"> {content.title} </td>
        <td className="user-interview-cell"> {content.agenda} </td>
        <td className="user-interview-cell"> {content.start} </td>
        <td className="user-interview-cell"> {content.end} </td>
        <td className="user-interview-cell"> {content.comments} </td>
        <td className="user-interview-cell"> {content.createdBy} </td>
      </tr>
    );
  }
}

export default UserInterviewRow;