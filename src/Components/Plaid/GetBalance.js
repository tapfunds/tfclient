import React, { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";

const balenceURL = `${process.env.REACT_APP_PROD_API_URL}/api/balance`;

function GetBalance(props) {
  const [balances, setBalences] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  var t = props.data;

  useEffect(() => {
    if (typeof t.data !== "undefined") {
      setIsError(false);
      setIsLoading(true);
      const config = {
        method: "post",
        url: balenceURL,
        data: qs.stringify({ access_token: "token" }),
      };

      let users = [];
      let promises = [];
      for (let i = 0; i < t.data.length; i++) {
        config.data = qs.stringify({ access_token: t.data[i].accesstoken });
        promises.push(
          axios(config)
            .then((response) => {
              users.push(response.data.accounts);
            })
            .catch((error) => {
              setIsError(true);
            })
        );
      }
      setIsLoading(false);
      Promise.all(promises).then(() => setBalences(users));
    } else {
      setTimeout(t.data, 250);
    }
  }, [t]);
  let arr = [];

  if (balances.length > 0) {
  
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

    for (let i = 0; i < n.length; i++) {
      arr.push({
        item_num: i,
        name: n[i],
        current: c[i],
        available: a[i],
        limit: l[i],
      });
    }
  }

  return isLoading ? (
    <div>Still Loading</div>
  ) : (
    <div>
      {arr.map((item) => (
        <li key={item.item_num}>
          Account Name: {item.name} | Current Balance: {item.current} |
          Available Balance: {item.available} | Account Limit: {item.limit}
        </li>
      ))}
    </div>
  );
}

export default GetBalance;
