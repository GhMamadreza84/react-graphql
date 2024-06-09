import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
const GET_USERS = gql`
  query getUser(){
    user(id: 5) {
      id
      name
      email
      phone
    }
  }
`;

function User() {
  const [id, setId] = useState();
  const changeHandler = (e) => {
    setId(e.target.value);
  };
  return (
    <div>
      <input value={id} onChange={changeHandler} />
    </div>
  );
}

export default User;
