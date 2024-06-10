import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $username: String!
    $email: String!
    $phone: String!
  ) {
    createUser(
      input: { name: $name, username: $username, email: $email, phone: $phone }
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
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [createUser, { loading, data, error, called }] = useMutation(
    CREATE_USER,
    {
      variables: {
        name: name,
        username: username,
        email: email,
        phone: phone,
      },
    }
  );

  console.log(createUser, { loading, data, error, called });
  return (
    <div>
      <h1>Create User</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Username"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter Phone"
      />
      <button onClick={() => createUser()}>Create User </button>
      {/* <h1>{data.name}</h1>
      <p>{data.username}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p> */}
    </div>
  );
}

export default CreateUser;
