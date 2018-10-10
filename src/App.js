import React, { Component } from 'react';
import _ from 'lodash';

import Sidebar from './components/sidebar';
import Main from './components/main';

import store from './store';

const { contacts, user, activeUserId }  = store.getState();

console.log("CONTACTS " + store.getState().contacts);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar contacts={_.values(contacts)} />
        <Main user={user} activeUserId={activeUserId} />

      </div>
    );
  }
}

export default App;
