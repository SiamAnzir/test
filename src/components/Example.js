import React, { useRef, useState , useEffect } from "react";
import { useReactToPrint } from "react-to-print";

import ComponentToPrint from "./ComponentToPrint";

const Example = () => {
  const componentRef = useRef();
  
  console.log(componentRef.current);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: () => console.log("print"),
  });
  const [text, setText] = useState(
    "Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!"
  );
  //console.log(text);
  return (
    <>
      <div>
        <ComponentToPrint ref={componentRef}>{text}</ComponentToPrint>
        <button onClick={handlePrint}>Print this out!</button>
      </div>
      <div>
        <button onClick={() => setText("This is new text//////////////")}>
          Change Text
        </button>
      </div>
    </>
  );
};

export default Example;
