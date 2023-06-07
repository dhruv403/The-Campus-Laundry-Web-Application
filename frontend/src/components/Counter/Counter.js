import React from 'react';
import './Counter.css';

const Counter = ({ count, onIncrement, onDecrement }) => {
  const handleIncrement = () => {
    if (count < 20) {
      onIncrement();
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      onDecrement();
    }
  };

  return (
    <div className="boxx">
      <div className="box1">
        <button onClick={handleDecrement} className="btnn btn-secondary btn-sm">
          -
        </button>
      </div>
      <div className="box1">
        <span>{count}</span>
      </div>
      <div className="box1">
        <button onClick={handleIncrement} className="btnn btn-secondary btn-sm">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
