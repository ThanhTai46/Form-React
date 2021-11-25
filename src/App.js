import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import ListUser from './components/Users/ListUser';

function App() {
  const [listUser, setListUser] = useState([]);
  const handleListUser = (userName, age) => {
    setListUser((pre) => {
      return [
        ...pre,
        {
          name: userName,
          age: age,
          id: Math.random().toString()
        }
      ]
    })
  }
  return (
    <div>
      <AddUser onListUser={handleListUser} />
      <ListUser users={listUser} />

    </div>
  );
}

export default App;
