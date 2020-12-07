import React from "react";
import Link from "../Components/PlaidAuth/Link";
import { UserContext } from "../utils/UserProvider";
import withAuthorization from "../utils/withAuthorization";

const PlaidAuth = ({ props }) => {
  return (
    <UserContext.Consumer>
      {(user) => (
        <div>
          Here is when auth begins
          <Link />
        </div>
      )}
    </UserContext.Consumer>
  );
};

const condition = (user) => !!user;

export default withAuthorization(condition)(PlaidAuth);
