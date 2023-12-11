import { forwardRef } from 'react';

const ComponentToPrint = forwardRef(( props, ref ) => {
  console.log("....",props)
  return (
  <div ref={ref}>
    <p>{ props.children }</p>
  </div>
)});

export default ComponentToPrint;