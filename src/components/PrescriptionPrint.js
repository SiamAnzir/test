import React from "react";
import logo from "../assets/care-box.png";
import vector from "../assets/emergency.png";
import Rx from "../assets/Rx.png";
import signature from "../assets/signature.png";

const Prints = () => {
  return (
    <div
      className="container"
      style={{
        marginTop: "1rem",
        marginLeft: "1rem",
        marginRight: "1rem",
        width: "562px",
        font: "Montserrat",
      }}
    >
      {/* or 80vh */}
      <div style={{ minHeight: "710px" }}>
        <div style={{ height: "20px", backgroundColor: "#833586" }}></div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              height: "10px",
              //width: "250px",
              paddingLeft: "20px",
              paddingRight: "25px",
              //backgroundColor: "#900C3F",
              //color: "#fff",
              // fontSize: "15px",
              //borderRadius: "7px",
              marginTop: "-10px",
            }}
          >
            <div>
              <p>
                <span style={{ fontSize: "14px", fontWeight: "800"  }}>
                  Dr. Fillerup Grab
                </span>
                <br/>
                <span style={{ fontSize: "12px", fontWeight: "700" }}>
                  MBBS , FCPS , BCS (Health)
                </span>
                <br />
                <span style={{ fontSize: "12px", fontWeight: "400" }}>
                  Professor , Dhaka Medical College
                  <br />
                  BMDC Number - 8700
                </span>
              </p>
            </div>
          </div>
          <div style={{ paddingRight: "20px" }}>
            <img
              style={{ marginTop: "10px", marginLeft: "70px" , height:"36px"}}
              src={logo}
              alt="logo"
            />
            <br />
            
            <div style={{ marginTop: "-5px" }}>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  marginLeft: "38px",
                }}
              >
                Appointment & Emergency Care
              </span>
              <br />
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: "bold",
                  marginLeft: "42px",
                }}
              >
                +8801886020709 , +8801796020709
              </span>
            </div>
          </div>
        </div>

        <div></div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #833586",
            borderBottom: "1px solid #833586",
            marginTop: "15px",
            //marginBottom: "10px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <p
            style={{
              margin: "4px 2px 7px 2px",
              //padding: "2px",
              fontSize: "12px",
            }}
          >
            <b>Patient Name:</b> Demo
          </p>
          <p
            style={{
              margin: "4px 2px 7px 2px",
              //padding: "2px",
              fontSize: "12px",
            }}
          >
            <b>Age:</b> 25
          </p>
          <p
            style={{
              margin: "4px 2px 7px 2px",
              //padding: "2px",
              fontSize: "12px",
            }}
          >
            <b>Gender:</b> Male
          </p>
          <p
            style={{
              margin: "4px 2px 7px 2px",
              //padding: "3px",
              fontSize: "12px",
            }}
          >
            <b>Date:</b> Dec 27, 2022
          </p>
        </div>

        <div style={{ overflow: "hidden" }}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "40%" }}>
              <div style={{ marginBottom: "50px" }}>
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    paddingLeft: "20px",
                  }}
                >
                  <b>Clinical Complaints :</b>{" "}
                </p>
                <ul
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    marginTop: "-5px",
                    //wordSpacing: "5px",
                    //lineHeight: "16px",
                    //marginRight: "7px",
                  }}
                >
                  <li>Upper Abdominal Pain</li>
                  <li>Cold</li>
                  <li>High Fever</li>
                </ul>
              </div>
              <div style={{ marginBottom: "50px" }}>
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    paddingLeft: "20px",
                  }}
                >
                  <b>Risk Factors :</b>{" "}
                </p>
                <ul
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    marginTop: "-5px",
                    //wordSpacing: "5px",
                    //lineHeight: "16px",
                    //marginRight: "7px",
                  }}
                >
                  <li>BP - 80/100</li>
                  <li>Heart Rate - 65</li>
                  <li>
                    O<sub>2</sub> Level - 99
                  </li>
                  <li>Temperature - 100 deg</li>
                </ul>
              </div>
              <div style={{ marginBottom: "10px", paddingLeft: "20px" }}>
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  <b>Investigations:</b>{" "}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    marginTop: "-5px",
                    //wordSpacing: "5px",
                    //lineHeight: "16px",
                    //marginRight: "7px",
                  }}
                >
                  CBC , ECG , Echo 2D/Doppler,
                  <br />
                  CXR (P / A )
                </p>
              </div>
            </div>
            <div style={{ width: "60%" }}>
              <div>
                <img
                  src={Rx}
                  alt="Rx"
                  style={{ marginTop: "20px", marginLeft: "15px" }}
                />
                <ol style={{ marginLeft: "-10px" }}>
                  <li style={{ borderBottom: "1px solid #E5E5E5" }}>
                    <p
                      style={{
                        fontSize: "12px",
                        //textAlign: "justify",
                        //lineHeight: "16px",
                        //marginLeft: "5px",
                        //letterSpacing: "0.9px",
                        fontWeight: "500",
                        wordSpacing: "3px",
                      }}
                    >
                      Tab. Acos (500 mg)
                    </p>
                    <p
                      style={{
                        marginTop: "-12px",
                        fontWeight: "400",
                        fontSize: "10px",
                      }}
                    >
                      <span style={{ paddingLeft: "5px" }}>0+0+1</span>
                      <span style={{ paddingLeft: "35px" }}>After Meal</span>
                      <span style={{ paddingLeft: "35px" }}>7 Days</span>
                    </p>
                  </li>
                  <li style={{ borderBottom: "1px solid #E5E5E5" }}>
                    <p
                      style={{
                        fontSize: "12px",
                        //textAlign: "justify",
                        //lineHeight: "16px",
                        //marginLeft: "5px",
                        //letterSpacing: "0.9px",
                        fontWeight: "500",
                        wordSpacing: "3px",
                      }}
                    >
                      Tab. Monas (10 mg)
                    </p>
                    <p
                      style={{
                        marginTop: "-12px",
                        fontWeight: "400",
                        fontSize: "10px",
                      }}
                    >
                      <span style={{ paddingLeft: "5px" }}>1+0+1</span>
                      <span style={{ paddingLeft: "35px" }}>After Meal</span>
                      <span style={{ paddingLeft: "35px" }}>30 Days</span>
                    </p>
                  </li>
                  <li style={{ borderBottom: "1px solid #E5E5E5" }}>
                    <p
                      style={{
                        fontSize: "12px",
                        //textAlign: "justify",
                        //lineHeight: "16px",
                        //marginLeft: "5px",
                        //letterSpacing: "0.9px",
                        fontWeight: "500",
                        wordSpacing: "3px",
                      }}
                    >
                      Tab. Acos (500 mg)
                    </p>
                    <p
                      style={{
                        marginTop: "-12px",
                        fontWeight: "400",
                        fontSize: "10px",
                      }}
                    >
                      <span style={{ paddingLeft: "5px" }}>0+0+1</span>
                      <span style={{ paddingLeft: "35px" }}>After Meal</span>
                      <span style={{ paddingLeft: "35px" }}>7 Days</span>
                    </p>
                  </li>
                  <li style={{ borderBottom: "1px solid #E5E5E5" }}>
                    <p
                      style={{
                        fontSize: "12px",
                        //textAlign: "justify",
                        //lineHeight: "16px",
                        //marginLeft: "5px",
                        //letterSpacing: "0.9px",
                        fontWeight: "500",
                        wordSpacing: "3px",
                      }}
                    >
                      Tab. Acos (500 mg)
                    </p>
                    <p
                      style={{
                        marginTop: "-12px",
                        fontWeight: "400",
                        fontSize: "10px",
                      }}
                    >
                      <span style={{ paddingLeft: "5px" }}>0+0+1</span>
                      <span style={{ paddingLeft: "35px" }}>After Meal</span>
                      <span style={{ paddingLeft: "35px" }}>7 Days</span>
                    </p>
                  </li>
                </ol>
                <div
                  style={{
                    marginTop: "20px",
                    marginLeft: "15px",
                    fontSize: "14px",
                    wordSpacing: "1px"
                  }}
                >
                  <p>
                    <b>Follow - up Within</b> : 1 Week
                  </p>
                </div>
              </div>
              <div style={{ marginTop: "50px", marginLeft: "15px" }}>
                <img
                  style={{ marginLeft: "30px" }}
                  src={signature}
                  alt="signature"
                />
                <p style={{marginTop:'5px'}}>
                  <span style={{ fontSize: "12px", fontWeight: "800" , wordSpacing: "3px"}}>
                    Dr. Fillerup Grab
                  </span>
                  <br />
                  <span style={{ fontSize: "10px", fontWeight: "500" }}>
                    MBBS , FCPS , BCS (Health)
                  </span>
                  <br />
                  <span style={{ fontSize: "10px", fontWeight: "400" }}>
                    Professor , Dhaka Medical College
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prints;
