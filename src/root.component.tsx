import React, { useState, useEffect } from "react";
// window['myapp'] = {
//   counter: 0,
//   incrementor: () => {
//       window['myapp'].counter += 1;
//       window.dispatchEvent(new Event('onIncrement'));
//   },
//   decrementor: () => {
//       window['myapp'].counter -= 1;
//       window.dispatchEvent(new Event('onDecrement'));
//   }
// };

export default function Root(props) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    window.addEventListener("onIncrement", () => {
      // console.log(window);
      setVal(window["myapp"]["counter"]);
    });
    window.addEventListener("onDecrement", () => {
      setVal(window["myapp"]["counter"]);
    });
  }, []);

  return (
    <div>
      <section>{props.name} is mounted!</section>
      <p>Counter is {val}</p>
      <input
        type="button"
        onClick={() => window["myapp"].incrementor()}
        value="+"
      ></input>
    </div>
  );
}
