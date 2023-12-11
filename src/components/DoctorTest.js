import React from "react";
import axios from "axios";

const DoctorTest = () => {
  const api =
    "http://192.168.0.11:8000/api/v2/Online_Doctor_Booking/postDoctorAppointment/";
  var Body = new FormData();
  Body.append("Patient_Name", "test");
  Body.append("Patient_Phone", "test");
  Body.append("Patient_Age", "13");
  Body.append("Patient_Gender", "male");
  Body.append("Health_Issue", "test");
  Body.append("Doctor", 40);
  Body.append("is_Posted_From", "App");
  const clickbtn = () => {
    try {
      console.log("body", Body);
      axios
        .post(api, Body, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzU4ODYxMzg1LCJqdGkiOiI4NzQ4YjYxNGMxMTc0ODMyOWI2YTMzODE0YmZhMzU0ZiIsInVzZXJfaWQiOjI3MH0.ntzNR7bk83-QFG6cA94UZf9MgpwnFWVEvB7y3RDRMT8`,
          },
        })
        .then((res) => {
          console.log("res", res.data.data);
        })
        .catch((error) => {
          if (error.response.data.non_field_errors) {
            alert(error.response.data.non_field_errors);
          } else {
            console.log("error", error.response);
          }
        });
    } catch (error) {
      console.log("error in posting doctor booking  : ", error);
    }
  };
  return (
    <div>
      <button onClick={clickbtn}>Submit</button>
    </div>
  );
};

export default DoctorTest;
