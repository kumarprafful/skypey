import React from 'react';
import '../css/empty.css';

const Empty = ({user}) => {
  const { name, profile_pic, status } = user;
  const first_name = name.split(" ")[0];

  return (
    <div className="empty">
      <h1 className="empty_name">Welcome, {first_name}</h1>
      <img src={profile_pic} alt={name} className="empty_img" />
      <p className="empty_status">
        <b>Status:</b> {status}
      </p>
      <button className="empty_btn">Start a conversation</button>
      <p className="empty_info">
        Search for someone to start chatting with or go to contacts to see who is available
      </p>
    </div>
  );
};

export default Empty;
