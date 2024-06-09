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
  const [id, setId] = useState(1);
  const { loading, data, error } = useQuery(GET_USER, {
    variables: { id: id },
  });
  const changeHandler = (e) => {
    setId(e.target.value);
  };
  console.log({ loading, data, error });

  return (
    <div>
      <input value={id} onChange={changeHandler} />
      {data ? (
        <>
          <h1>{data.user.name}</h1>
          <p>{data.user.email}</p>
          <p>{data.user.phone}</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default User;
