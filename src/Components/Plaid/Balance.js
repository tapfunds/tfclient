import React, { useContext, useCallback, useEffect, useState } from "react";
import { TokenContext } from "../../utils/TokenProvider";
import axios from "axios";
import qs from "qs";

const balenceURL = `${process.env.REACT_APP_PROD_API_URL}/api/balance`;
function Balance({ props }) {
  const tokes = useContext(TokenContext);
  const [balances, setBalences] = useState([]);

  const fetchBalance = useCallback(() => {
    const config = {
      method: "post",
      url: balenceURL,
      data: qs.stringify({ access_token: "token" }),
    };

    let users = [];
    let promises = [];
    for (let i = 0; i < tokes.length; i++) {
      config.data = qs.stringify({ access_token: tokes[i].accesstoken });
      promises.push(
        axios(config).then((response) => {
          users.push(response.data.accounts);
        })
      );
    }
    Promise.all(promises).then(() => setBalences(users));
  }, [tokes]);


  
  useEffect(() => {
    fetchBalance();
  }, [fetchBalance]);

  let n = [];
  let c = [];
  let a = [];
  let l = [];

  for (let i = 0; i < balances.length; i++) {
    balances[i].map((item) => n.push(item.name));
    balances[i].map((item) => c.push(item.balances.current));
    balances[i].map((item) => a.push(item.balances.available));
    balances[i].map((item) => l.push(item.balances.limit));
  }

  let arr = [];

  for (let i = 0; i < n.length; i++) {
    arr.push({
      item_num: i,
      name: n[i],
      current: c[i],
      available: a[i],
      limit: l[i],
    });
  }

  return (
    <div>
      {arr.map((item) => (
        <li key={item.item_num}>
          Account Name: {item.name} | Current Balance: {item.current} | Available Balance: {item.available} | Account Limit: {item.limit}
        </li>
      ))}
    </div>
  );
}

export default Balance;
