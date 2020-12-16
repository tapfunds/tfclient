import React from "react";
import { UserContext } from "../utils/UserProvider";
import withAuthorization from "../utils/withAuthorization";

const Stats = ({ props }) => {
  return (
    <UserContext.Consumer>
      {(user) => (
        <div>
          Stats
        </div>
      )}
    </UserContext.Consumer>
  );
};

const condition = (user) => !!user;

export default withAuthorization(condition)(Stats);
