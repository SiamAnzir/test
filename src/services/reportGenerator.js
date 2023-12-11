import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call
//import { format } from "date-fns";

// define a generatePDF function that accepts a tickets argument
const generatePDF = (tickets) => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  const tableColumn = [
    [
      {
        content: "People",
        rowSpan: 2,
        styles: { valign: "middle" },
      },
      {
        content: "Received",
        colSpan: 2,
        styles: { halign: "center" },
      },
      {
        content: "Sold",
        colSpan: 2,
        styles: { halign: "center" },
      },
    ],
    ["Name", "Contact No", "Role", "Email"],
  ];
  // define an empty array of rows
  const tableRows = [];

  // for each ticket pass all its data into an array
  tickets.forEach((ticket) => {
    const ticketData = [
      ticket.id,
      ticket.name,
      ticket.contactNo,
      ticket.role,
      ticket.email,
      // called date-fns to format the date on the ticket
      //format(new Date(ticket.updated_at), "yyyy-MM-dd"),
    ];
    // push each tickcet's info into a row
    tableRows.push(ticketData);
  });

  // startY is basically margin-top
  doc.autoTable({
    //styles: { fillColor: [0, 0, 0] },
    startY: 20,
    head: tableColumn,
    body: tableRows,
    theme: "plain",
    styles: { halign: "center", lineColor: "DCE0E4", lineWidth: 0.2 },
    headStyles: {
      textColor: "black",
      fillColor: "#fafbfe",
    },
  });
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  //const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left
  doc.text("PUB User List", 85, 14);
  // we define the name of our PDF file.
  doc.save(`report.pdf`);
};

export default generatePDF;
