import React, { useState } from "react";
import { read, utils } from "xlsx";
import axios from "axios";

const ImportCsvFile = () => {
  const postApi = async (data) => {
    try {
      //const form_data = new FormData();
      //form_data.append("csv_file", filefield);
      const body = data;
      const settings = {
        headers: {
          Authorization: `Bearer 75977f8aaf014ef89b1011c6036c13f7`,
        },
      };

      const api = "http://192.168.68.138:8000/api/product/assetupload/";

      await axios
        .post(api, body, settings)
        .then((res) => {
          console.log("success", res.data);
          //setImportAssetModal(false);
          //successAlert();
          //dispatch(getProductList());
          //setFilefield(null);
        })
        .catch((errror) => {
          console.log("error", errror);
        });
    } catch {
      console.log("error");
    }
  };
  return (
    <div>
      <h4>Import CSV</h4>
      <input
        type="file"
        onChange={(e) => {
          const csv = e.target.files[0];
          const fileReader = new FileReader();
          fileReader.addEventListener("load", (ev) => {
            const wb = read(fileReader.result);
            const data = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
            console.log(data);
            postApi(data);
          });
          fileReader.readAsArrayBuffer(csv);
        }}
      />
    </div>
  );
};

export default ImportCsvFile;
