import React, { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import { Row, Col } from "antd";
import Transfer from "../Plaid/Transfer";
import "./GetBalance.css";

const balenceURL = `${process.env.REACT_APP_API_URL}/api/balance`;

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

      let user_accounts = [];
      let promises = [];
      for (let i = 0; i < t.data.length; i++) {
        config.data = qs.stringify({ access_token: t.data[i].accesstoken });
        promises.push(
          axios(config)
            .then((response) => {
              // console.log(response.data.error.StatusCode)
              // if (response.data.error.StatusCode === 400){
              //   console.log("we need to handle this")
              // }
              console.log(response.data)

              user_accounts.push(response.data.accounts);
            })
            .catch((error) => {
              setIsError(true);
            })
        );
      }
      setIsLoading(false);
      Promise.all(promises).then(() => setBalences(user_accounts));
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
    let accnt = [];
    for (let i = 0; i < balances.length; i++) {
      if (typeof balances[i] !== "undefined"){
        balances[i].map((item) => n.push(item.name));
        balances[i].map((item) => c.push(item.balances.current));
        balances[i].map((item) => a.push(item.balances.available));
        balances[i].map((item) => l.push(item.balances.limit));
        balances[i].map((item) => accnt.push(item.account_id));
      }
    }

    for (let i = 0; i < n.length; i++) {
      arr.push({
        item_num: i,
        name: n[i],
        current: c[i],
        available: a[i],
        limit: l[i],
        account: accnt[i],
      });
    }
  }
  // console.log(balances);
  // console.log(arr);
  return isLoading || isError ? (
    <div>We got issues captain</div>
  ) : (
    <div className="main">
      <div className="grid">
        <Row>
          {arr.map((item) => (
            <Col key={item.item_num}>
              <div className="card">
                Account Name: {item.name} <br />
                Current Balance: {item.current} <br />
                Available Balance: {item.available} <br />
                Account Limit: {item.limit} 
                <br />
                <br />
                <Transfer action={"Send"} lable={"Send"} accnt={item.account} />
                &nbsp;{" "}
                <Transfer
                  action={"Recieve"}
                  lable={"Recieve"}
                  accnt={item.account}
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default GetBalance;

