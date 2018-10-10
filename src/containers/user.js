import React from 'react';
import '../css/user.css';

const User = ({user}) => {
  const {name, profile_pic, status } = user;

  return (
    <div className="user">
      <img src={profile_pic} alt={name} className='user_pic' />
      <div className="user_details">
        <p className="user_details_name">{name}</p>
        <p className="user_details_status">{status}</p>
      </div>
    </div>
  );
};

export default User;
