import { writeFile, utils } from "xlsx";

export function convertJsonToWorkbook(jsonData) {
  const headers = ["Header 1", "Header 2", "Header 3"];
  const worksheet = utils.json_to_sheet(jsonData, { header: headers });
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, "Sheet 1");
  return workbook;
}

export function generateExcelFile(workbook, filename) {
  writeFile(workbook, `${filename}.xlsx`);
}
