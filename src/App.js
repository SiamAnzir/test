import React, { useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import BkashPayment from "./components/BkashPayment";
import Example from "./components/Example";
import Membership from "./components/Membership";
import DoctorTest from "./components/DoctorTest";
import Prints from "./components/PrescriptionPrint";
import { renderToString } from "react-dom/server";
import footerImgData from "./assets/Frame.png";
import PaginatedItems from "./components/PaginatedItems";
import PrintTable from "./components/PrintTable";
import ImportCsvFile from "./components/ImportCsv";
import html2canvas from "html2canvas";

import jsPDF from "jspdf";

function App() {
  const [text, setText] = useState("Section To Print");
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
            //"Content-Type": "application/json",
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

  const handlePres = () => {
    //let data = prescriptionDetail.filter((item) => item.Book_Doctor === id)[0];
    //console.log(data);
    const string = renderToString(<Prints></Prints>);

    const pdf = new jsPDF("p", "pt", "a4");
    pdf.addImage(
      footerImgData,
      "PNG",
      0,
      pdf.internal.pageSize.height - 90,
      400,
      100
    );
    console.log(pdf.internal.pageSize.width);
    pdf.html(string).then(() => pdf.save("new.pdf"));
  };
  const handleTable = () => {
    //let data = prescriptionDetail.filter((item) => item.Book_Doctor === id)[0];
    //console.log(data);
    const string = renderToString(<PrintTable></PrintTable>);

    const pdf = new jsPDF("p", "pt", "a4");
    //console.log(pdf.internal.pageSize.width);
    pdf.html(string).then(() => pdf.save("invoice.pdf"));
  };

  function takeScreenshot() {
    var screenshot = document.documentElement.cloneNode(true);
    console.log(screenshot);
    screenshot.style.pointerEvents = "none";
    screenshot.style.overflow = "hidden";
    screenshot.style.webkitUserSelect = "none";
    screenshot.style.mozUserSelect = "none";
    screenshot.style.msUserSelect = "none";
    screenshot.style.oUserSelect = "none";
    screenshot.style.userSelect = "none";
    screenshot.dataset.scrollX = window.scrollX;
    screenshot.dataset.scrollY = window.scrollY;
    var blob = new Blob([screenshot.outerHTML], {
      type: "text/html",
    });
    return blob;
  }

  function generate() {
    window.URL = window.URL || window.webkitURL;
    window.open(window.URL.createObjectURL(takeScreenshot()));
  }

  const captureScreenshot = () => {
    const element = document.getElementById("capture-element");

    html2canvas(element).then((canvas) => {
      document.body.appendChild(canvas); // if you want see your screenshot in body.
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("download.pdf");
    });
  };

  return (
    <div className="App">
      <h3>Demo</h3>
      <br />
      {/**<PaginatedItems itemsPerPage={10}></PaginatedItems> */}

      {/* <button onClick={handleTable}>Pdf Download</button>
      <br></br> */}
      <div className="d-flex justify-content-center">
        <PrintTable></PrintTable>
      </div>
      <div id="capture-element">
        <p>Hello in my life</p>
        <span>How can hellp you</span>
      </div>
      <button onClick={captureScreenshot}>Capture Screenshot</button>
      {/* <ImportCsvFile></ImportCsvFile> */}
      {/**<DoctorTest></DoctorTest>**/}
      {/** <BkashPayment></BkashPayment> */}
    </div>
  );
}

export default App;
