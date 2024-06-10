import React from "react";
import { gql, useMutation } from "@apollo/client";
const CREATE_USER = gql`
  mutation {
    createUser(
      input: {
        name: "MMd"
        username: "gh"
        email: "gh@gmail.com"
        phone: "090125214"
      }
    ) {
      id
      name
      username
      email
      phone
    }
  }
`;
function CreateUser() {
  const [createUser, { loading, data, error, called }] =
    useMutation(CREATE_USER);

  console.log(createUser, { loading, data, error, called });
  return (
    <div>
      Create User
      <button onClick={() => createUser()}>Create User </button>
      {/* <h1>{data.name}</h1>
      <p>{data.username}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p> */}
    </div>
  );
}

export default CreateUser;
