import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
];
//pub currentItems = items get from api
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

export default function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  // pub: const [offset , setOffset] = US(0)
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  // pub page count = Math.ceil(count / limit);
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    // pub newOffset = (event.selecter * limit) % count
    // dispatch(api(limit , offset))
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset} , itemsPerPage ${itemsPerPage} length ${items.length}`
    );
    setItemOffset(newOffset);
    
  };

  return (
    <div>
      <div
        className=""
        style={{
          border: "2px solid black",
          margin: "0px 150px",
          minHeight: "80vh",
          position: "relative",
        }}
      >
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousClassName="hide"
          nextClassName="hide"
          activeLinkClassName="active"
        />
      </div>
      <br />
      <div className="footer">
        <h3>Footer Text</h3>
      </div>
    </div>
  );
}
