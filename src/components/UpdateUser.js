import React from "react";
import { gql, useMutation } from "@apollo/client";
function UpdateUser() {
  const UPDATE_USER = gql`
    mutation {
      updateUser(id: 5, input: { username: "gh", email: "gh@gmail.com" }) {
        id
        name
        username
        email
      }
    }
  `;
  const [updateUser, { loading, data, error, called }] =
    useMutation(UPDATE_USER);
  console.log(updateUser, { loading, data, error, called });
  return (
    <div>
      <h1>Update User</h1>
      <button onClick={() => updateUser()}>Update</button>
    </div>
  );
}

export default UpdateUser;
