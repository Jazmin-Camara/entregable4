import React from "react";
import axios from "axios";

const UsersList = ({ users, selectUser, deleteUser }) => {
  return (
    <div className="usersList">
      <ul className="card-container">
        {users.map((user) => (
          <li key={user.id} className="users-list">
            <div>
              <b>Name: </b>
              {user.first_name} {user.last_name}
            </div>
            <div>
              <b>Email: </b>
              {user.email}
            </div>
            <div>
              <b>Birthday: </b>
              {user.birthday}
            </div>
            <button onClick={() => selectUser(user)}>
              <i class="fa-solid fa-pen-to-square"></i> Edit
            </button>
            <button onClick={() => deleteUser(user.id)}>
              <i class="fa-solid fa-delete-left"></i> Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;