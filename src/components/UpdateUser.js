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
  return <div></div>;
}

export default UpdateUser;
