import React from 'react';
import '../css/sidebar.css';

import User from '../containers/user';

const Sidebar = ({contacts}) => {
  return(
    <aside className="sidebar">
      {contacts.map(contact => (
        <User user={contact} key={contact.user_id} />
      ))}
    </aside>
);
};
export default Sidebar;
