import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/outline";
import "./Counter.css";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const Counter = ({ initialValue }) => {
  const [counter, setCounter] = useState(0);
  const [hidden, setHidden] = useState(false);
  const dispatch = useDispatch();
  const deleteCounter = () => setHidden(true);

  const addItemToBasket = () => {
    const product = {
      counter,
    };
    setCounter(counter + 1);
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    setCounter(counter - 1);
    dispatch(removeFromBasket({ counter }));
  };

  return (
    <div className="counters">
      {!hidden ? (
        <div className="counter__items">
          {initialValue ? (
            <div className="count">{counter + initialValue}</div>
          ) : (
            <div className="count">{counter}</div>
          )}
          <div className="counter__item">
            <button className="btn" onClick={addItemToBasket}>
              +
            </button>
            <button className="btn1 btn" onClick={removeItemFromBasket}>
              -
            </button>
            <span onClick={deleteCounter}>
              <TrashIcon className="btn2 btn" />
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Counter;
