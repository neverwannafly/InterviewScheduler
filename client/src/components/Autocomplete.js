import React, { useEffect, useState } from 'react';
import { Multiselect } from 'react-widgets';
import fetchUsers from '../utils/fetchUsers';

const Autocomplete = ({userData, label, defaultValue, handleMembersChange}) => {
  let [usernames, setUsernames] = useState([]);
  useEffect(() => { 
    let didCancel = false;
    fetchUsers(userData, '').then(usernames => {
      if (!didCancel) setUsernames(usernames);
    })
    return () => {didCancel = true};
  }, [userData]);
  const handleSearch = async query => {
    setUsernames(await fetchUsers(userData, query));
  }
  return (
    <div className="form-group">
      <label>{label}</label>
      <Multiselect
        data={usernames}
        onChange={handleMembersChange}
        onSearch={handleSearch}
        textField='name'
        defaultValue={defaultValue}
      />
    </div>
  )
}

export default Autocomplete;