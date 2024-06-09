import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
const GET_USERS = gql`
  query {
    user(id: 5) {
      id
      name
      email
      phone
    }
  }
`;

function User() {
  const { loading, data, error } = useQuery();
  const [id, setId] = useState();
  const changeHandler = () => {
    setId(e.target.value);
  };
  return (
    <div>
      <input value={id} onChange={changeHandler} />
    </div>
  );
}

export default User;
