import React from 'react';
import '../css/user.css';

import store from '../store';
import {setActiveUserId} from '../actions';

const User = ({user}) => {
  const { name, profile_pic, status } = user;

  return (
    <div className="user" onClick={handleUserClick.bind(null, user)}>
      <img src={profile_pic} alt={name} className='user_pic' />
      <div className="user_details">
        <p className="user_details_name">{name}</p>
        <p className="user_details_status">{status}</p>
      </div>
    </div>
  );
};

function handleUserClick({ user_id }) {
  // console.log(user_id);
  store.dispatch(setActiveUserId(user_id));
}

export default User;
