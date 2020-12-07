import React from "react";
import { UserContext } from "../utils/UserProvider";
import withAuthorization from "../utils/withAuthorization";

const Stats = () => {
  return (
    <UserContext.Provider>
      {user => (<div> Some Statistics from your account </div>)}
    </UserContext.Provider>
  );
};

const condition = (user) => !!user;
export default withAuthorization(condition)(Stats);
