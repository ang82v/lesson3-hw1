// начался рефакторинг
//import React, { useState } from "react";
import React from "react";
const Counter = (props) => {
  console.log(props)
  // начался рефакторинг
  //const [value, setValue] = useState(props.value);
  // меняем value на props.value
  const formValue = () => {
    return props.value === 0 ? 0 : props.value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 p-2 bg-";
    classes += props.value === 0 ? "danger" : "primary";
    return classes;
  };

  // начался рефакторинг
  // const handleIncrement = (productId) => {
  //   setValue(value + 1);
  // };

  // const handleDecrement = () => {
  //   if (props.value !== 0) {
  //     setValue(value - 1);
  //   }
  // };

  // const deleteProduct = (productId) => {
  //   if (value !== 0) {
  //     setValue(value - 1);
  //   }
  // };

  return (
    <div>
      <span className={getBadgeClasses()}>{formValue()}</span>
      <button
        onClick={() => props.onIncrement(props.id)}
        className="btn btn-secondary btn-sm m-2"
      >
        +
      </button>
      <button
        onClick={() => props.onDecrement(props.id)}
        className="btn btn-secondary btn-sm m-2"
      >
        -
      </button>
      <button
        onClick={() => props.onDelete(props.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Del
      </button>
      <span style={{ fontSize: '18px' }}>{props.name}</span>
    </div>
  );
};

export default Counter;
