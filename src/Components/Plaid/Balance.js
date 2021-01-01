import React, { useEffect, useState } from "react";
import GetBalance from "./GetBalance";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserIntegrations } from "../../store/modules/integrations/actions/IntegrationAction";
import "./GetBalance.css";


function Balance() {
  
  const currentUserState = useSelector((state) => state.Auth);
  const AuthID = currentUserState.currentUser
    ? currentUserState.currentUser.id
    : "";
  const dispatch = useDispatch();
  console.log("user ID",AuthID)

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTokens = (ID) => dispatch(fetchUserIntegrations(ID));

    getTokens(AuthID);
    setIsLoading(false)
  }, [dispatch, AuthID]);
  return isLoading ? (
    <div>Loadin</div>
  ) : (
    <div className="container">
      <GetBalance data={data} />
    </div>
  );
}

export default Balance;
