import React from 'react';

const UserInterviewRow = ({isHeading, content}) => {
  if (isHeading) {
    return (
      <tr key='0'>
        <th key='0' className="user-interview-cell" scope="col"> ID </th>
        <th key='1' className="user-interview-cell" scope="col"> Title </th>
        <th key='2' className="user-interview-cell" scope="col"> Agenda </th>
        <th key='3' className="user-interview-cell" scope="col"> Start Time </th>
        <th key='4' className="user-interview-cell" scope="col"> End Time </th>
        <th key='5' className="user-interview-cell" scope="col"> Comments </th>
        <th key='6' className="user-interview-cell" scope="col"> Created By </th>
      </tr>
    );
  } else {
    return (
      <tr key={content.id}>
        <td key='0' className="user-interview-cell"> {content.id} </td>
        <td key='1' className="user-interview-cell"> {content.title} </td>
        <td key='2' className="user-interview-cell"> {content.agenda} </td>
        <td key='3' className="user-interview-cell"> {content.start} </td>
        <td key='4' className="user-interview-cell"> {content.end} </td>
        <td key='5' className="user-interview-cell"> {content.comments} </td>
        <td key='6' className="user-interview-cell"> {content.created_by} </td>
      </tr>
    );
  }
}

export default UserInterviewRow;