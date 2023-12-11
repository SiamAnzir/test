import React, { useState, useEffect } from "react";

const Membership = () => {
  //give an initial state so that the data won't be undefined at start
  const [bids, setBids] = useState([0]);
  const [connect, setConnect] = useState(false);

  const ws = new WebSocket(
    "wss://care-box-backend.herokuapp.com/pos_system/cashier/247/"
  );

  const apiCall = {
    type: "Authentication",
    "Custom-User-Agent":
      "15!@ejh46)(*%#!@s4h68a4rgsagH&^%%$#@!JKFKVYRDTgjsgakjzghfjJ%$#@#%HFYD32434",
  };
  const useMemberPointReq = {
    type: "member_point_usage_request",
    member_phone: "01521516310",
    point: 510,
    total_amount: "520.36",
  };
  useEffect(() => {
    if (connect === true) {
      ws.onopen = (event) => {
        ws.send(JSON.stringify(apiCall));
        ws.send(JSON.stringify(useMemberPointReq))
        console.log("connection open", event);
      };

      ws.onmessage = function (event) {
        /** 
            const json = JSON.parse(event.data);
            try {
              if ((json.event = "data")) {
                setBids(json.data.bids.slice(0, 5));
              }
            } catch (err) {
              console.log(err);
            }*/
        console.log("message recieved", JSON.parse(event.data));
      };

      ws.onclose = () => {
        console.log("close");
      };
    }
  }, [connect]);
  //map the first 5 bids
  const firstBids = bids.map((item) => {
    return (
      <div>
        <p> {item}</p>
      </div>
    );
  });

  return (
    <>
      <div>Web Socket</div>
      <button onClick={() => setConnect(true)}>Use Point</button>
    </>
  );
};

export default Membership;
