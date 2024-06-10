import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";
function UserOnClick() {
  const [id, setId] = useState(1);
  const [getUser, { loading, data, error }] = useLazyQuery(GET_USER, {
    variables: { id: id },
  });
  const changeHandler = (e) => {
    setId(e.target.value);
  };
  // console.log(response);

  return (
    <div>
      <input value={id} onChange={changeHandler} />
      <button onClick={() => getUser()}>search user</button>
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

export default UserOnClick;
