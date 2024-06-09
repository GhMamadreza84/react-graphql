import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

function User() {
  const { laoding, data, error } = useQuery(GET_USER);
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
