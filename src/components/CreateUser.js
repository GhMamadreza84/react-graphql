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
  const [createUser , {loading,data,error}] = useMutation(CREATE_USER)
  console.log(createUser,{loading,data,error});
  return <div>
    Create User
  </div>;
}

export default CreateUser;
