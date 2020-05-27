import React, { useEffect, useState } from 'react';
import { Multiselect } from 'react-widgets';
import fetchUsers from '../utils/fetchUsers';

const Autocomplete = ({userData, label, defaultValue, handleMembersChange, disableMembers}) => {
  let [usernames, setUsernames] = useState([]);
  useEffect(() => { 
    let didCancel = false;
    fetchUsers(userData, '').then(usernames => {
      if (!didCancel && !disableMembers) setUsernames(usernames);
    })
    return () => {didCancel = true};
  }, [userData, disableMembers]);
  const handleSearch = async query => {
    if (!disableMembers) setUsernames(await fetchUsers(userData, query));
  }
  return (
    <div className="form-group">
      <label>{label}</label>
      <Multiselect
        data={usernames}
        onChange={handleMembersChange}
        onSearch={handleSearch}
        textField='username'
        defaultValue={defaultValue}
        disabled={disableMembers}
      />
    </div>
  )
}

export default Autocomplete;