import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UsersForm from "./UsersForm";
import UsersList from "./UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios
      .get(`https://users-crud1.herokuapp.com/users/`)
      .then((res) => setUsers(res.data));
  }, []);

  const getUser = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const deleteUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUser());
  };

  const selectUser = (user) => {
    setUserSelected(user);
  };

  const deselectUser = () => setUserSelected(null);

  return (
    <div className="App">
      <UsersForm
        getUser={getUser}
        userSelected={userSelected}
        deselectUser={deselectUser}
      />

      <UsersList
        users={users}
        selectUser={selectUser}
        deleteUser={deleteUser}
      />
    </div>
  );
}

export default App;