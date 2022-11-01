import React, { useState, useEffect } from "react";
import axios from "axios";

const BkashPayment = () => {
  const [idToken, setIdToken] = useState("");
  const [responseData, setResponseData] = useState("");
  const [bkashUrl, setBkashUrl] = useState("");
  //const app = process.env.REACT_APP_APP_KEY ;
  //console.log(app);
  const handleButton = () => {
    console.log("test");
    try {
      const api =
        "https://tokenized.pay.bka.sh/v1.2.0-beta/tokenized/checkout/token/grant";
      const body = {
        app_key: process.env.REACT_APP_APP_KEY,
        app_secret: process.env.REACT_APP_SECRET_KEY ,
      };
      axios
        .post(api, body, {
          headers: {
            username: process.env.REACT_APP_USER_NAME,
            password: process.env.REACT_APP_USER_PASSWORD,
          },
        })
        .then((res) => {
          console.log("res", res.data);
          setIdToken(res.data.id_token);
          localStorage.setItem("bkashToken", res.data.id_token);
        })
        .catch((err) => {
          console.log("errr", err);
        });
    } catch (error) {
      console.log("error".error);
    }
  };

  const handleButton2 = () => {
    try {
      const api =
        "https://tokenized.pay.bka.sh/v1.2.0-beta/tokenized/checkout/create";
      const body = {
        mode: "0011",
        payerReference: "1",
        callbackURL: "http://localhost:3000/BkashSuccessPage",
        amount: "500",
        currency: "BDT",
        intent: "sale",
        merchantInvoiceNumber: "Inv0124",
      };
      axios
        .post(api, body, {
          headers: {
            Authorization: `${idToken}`,
            "x-app-key": process.env.REACT_APP_APP_KEY,
          },
        })
        .then((res) => {
          console.log("resssss", res.data);
          setResponseData(res.data);
          setBkashUrl(res.data.bkashURL);
          localStorage.setItem("PaymentId", res.data.paymentID);
        })
        .catch((err) => {
          console.log("errr", err);
        });
    } catch (error) {}
  };
  console.log(bkashUrl);

  async function newBtnClick() {
    const api =
      "http://192.168.0.19:8000/api/v1/payment/payment_test/?appName=bkashURL";
    await fetch(api, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.bkashURL);
        localStorage.setItem("bkashToken", data.auth);
        localStorage.setItem("PaymentId", data.paymentID);
        setBkashUrl(data.bkashURL);
      })
      .catch((err) => console.log("err", err));
  }

  useEffect(() => {
    if (idToken !== "") {
      //handleButton2();
    }
  }, [idToken]);

  useEffect(() => {
    if (bkashUrl !== "") {
      window.location.replace(`${bkashUrl}`);
    }
  }, [bkashUrl]);

  return (
    <div>
      <div className="text-center">
        <br />
        <br/>
        <h3>Bkash Payment</h3>
        <br />
        <br />
        <button type="submit" onClick={() => handleButton()}>
          Get Token & Create Payment
        </button>
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default BkashPayment;
