import React, { useEffect, createContext, useState, useCallback, useContext} from "react";
import {UserContext} from "./UserProvider";
import axios from "axios";

export const TokenContext = createContext([{ tokens: null }]);



function TokenProvider({children}){
  const [tokens, setTokens] = useState()
  const user = useContext(UserContext);
  const id = user;
  const tokenConfigUrl = `${process.env.REACT_APP_DB_API_URL}/tokens/${id}`

  const fetchTokens = useCallback(async () => {
    const config = {
      method: "get",
      url: tokenConfigUrl,
    };
    const res = await axios(config);
    setTokens(res.data.data);
  }, [tokenConfigUrl]);

  useEffect(() => {
    fetchTokens();
  }, [fetchTokens]);

    return (
      <TokenContext.Provider value={tokens}>
        {children}
      </TokenContext.Provider>
    );
  
}

export default TokenProvider;
