import React, { useState } from "react";
import AddUserRef from "./components/Users/AddUserRef";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const setUsersHandler = (newUser) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };
  // setUsers(newUsers);

  return (
    <div>
      <AddUserRef onSetUsers={setUsersHandler}></AddUserRef>
      <UsersList users={users}></UsersList>
    </div>
  );
}

export default App;
