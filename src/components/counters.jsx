import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  // const [counters, setCounters] = useState([
  //   { value: 0, id: 1, name: "Ложка" },
  //   { value: 4, id: 2, name: "Вилка" },
  //   { value: 0, id: 3, name: "Тарелка" },
  //   { value: 0, id: 4, name: "Стартовый набор минималиста" },
  //   { value: 0, id: 5, name: "Ненужные вещи" },
  // ]);

  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 4, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleIncrement = (counterId) => {
    const newCounter = counters.map((c) => {
      if (c.id === counterId) {
        c.value += 1;
      }
      return c;
    });
    setCounters(newCounter);
  };

  const handleDecrement = (counterId) => {
    const newCounter = counters.map((c) => {
      if (c.id === counterId && c.value !== 0) {
        c.value -= 1;
      }
      return c;
    });
    setCounters(newCounter);
  };

  const handleDelete = (counterId) => {
    const newCounter = counters.filter((c) => c.id !== counterId);
    setCounters(newCounter);
  };

  const handleReset = () => {
    setCounters(initialState);
  };
  return (
    <div>
      <h4>Counters</h4>
      <button onClick={handleReset} className="btn btn-primary btn-sm m-2">
        Сброс
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          // id={counter.id}
          // value={counter.value}
          // name={counter.name}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          {...counter}
        />
      ))}
    </div>
  );
};

export default Counters;
