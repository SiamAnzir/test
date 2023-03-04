import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import generatePDF from "../services/reportGenerator";

const PrintTable = () => {
  const array = [
    {
      id: 1,
      name: "Siam",
      contactNo: "01620304621",
      email: "jhon@email.com",
      role: "Developer",
    },
    {
      id: 2,
      name: "Siam",
      contactNo: "01620304621",
      email: "jhon@email.com",
      role: "Developer",
    },
    {
      id: 3,
      name: "Siam",
      contactNo: "01620304621",
      email: "jhon@email.com",
      role: "Developer",
    },
    {
      id: 4,
      name: "Siam",
      contactNo: "01620304621",
      email: "jhon@email.com",
      role: "Developer",
    },
    {
      id: 5,
      name: "Siam",
      contactNo: "01620304621",
      email: "jhon@email.com",
      role: "Developer",
    },
    {
      id: 6,
      name: "Siam",
      contactNo: "01620304621",
      email: "jhon@email.com",
      role: "Developer",
    },
  ];
  const headers = [
    { label: "User ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Contact No", key: "contactNo" },
    { label: "Role", key: "role" },
    { label: "Email", key: "email" },
  ];
  const csvReport = {
    data: array,
    headers: headers,
    filename: "PUB_Report.csv",
  };
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  //const [list, setList] = useState([]);
  /**
  useEffect(() => {
    setSelectedItems(array.map((data) => {
      isCheck.includes(data.id) ? data : ""
    }))
  },[isCheck ,isCheckAll])

 */

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, parseInt(id)]);
    //setSelectedItems(array);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== parseInt(id)));
      setIsCheckAll(false);
    }
    console.log(typeof parseInt(id));
    console.log(checked);
  };
  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setSelectedItems(array);
    setIsCheck(array.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
      setSelectedItems([]);
    }
  };

  const downloadTextFile = (array) => {
    const element = document.createElement("a");
    const file = new Blob(
      [
        "\t \t \t PUB USER LIST \n \n" +
          "Id" +
          "\t" +
          "Name" +
          "\t" +
          "Contact" +
          "\t \t" +
          "Role" +
          "\t \t" +
          "Email" +
          "\n" +
          "\n" +
          array
            .map(
              (a) =>
                a.id +
                "\t" +
                a.name +
                "\t" +
                a.contactNo +
                "\t" +
                a.role +
                "\t" +
                a.email
            )
            .join("\n"),
      ],
      {
        type: "text/plain",
      }
    );
    element.href = URL.createObjectURL(file);
    element.download = "pub_report.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
  console.log("isCheckAll:", isCheckAll);
  console.log("selectedItems", selectedItems);
  console.log("isCheck", isCheck);
  return (
    <div>
      <div>
        <button onClick={() => generatePDF(array)}>Pdf Download</button>
        <br></br>
        <br></br>
        <button>
          <CSVLink {...csvReport} className="csv-report-btn" target="_blank">
            {" "}
            CSV Download{" "}
          </CSVLink>
        </button>
        <br></br>
        <br></br>
        <button onClick={() => downloadTextFile(array)}>.txt Download </button>
      </div>
      <br />
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                name="selectAll"
                id="selectAll"
                onChange={handleSelectAll}
                checked={isCheckAll}
              />
            </th>
            <th>User ID</th>
            <th>Name</th>
            <th>Contact No</th>
            <th>Role</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {array.map((val, index) => (
            <tr key={index}>
              <td>
                <input
                  key={val.id}
                  type="checkbox"
                  name={val.name}
                  id={val.id}
                  onChange={handleClick}
                  checked={isCheck.includes(val.id)}
                />
              </td>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.contactNo}</td>
              <td>{val.role}</td>
              <td>{val.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrintTable;
