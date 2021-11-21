import "./App.css";
import Nav from "./components/Nav";
import Counter from "./components/Counter";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearBasket } from "./slices/basketSlice";

function App() {
  const [counters, setCounters] = useState([
    <Counter initialValue={1} />,
    <Counter />,
    <Counter />,
    <Counter />,
    <Counter />,
  ]);
  const dispatch = useDispatch();

  const resetAllCounters = () => {
    const newCounters = [];
    counters.forEach(() => newCounters.push(<Counter key={Math.random()} />));
    setCounters(newCounters);
    dispatch(clearBasket({ counters }));
  };

  return (
    <div className="App">
      <Nav />
      <div className="items">
        <div className="counterss">
          <button onClick={resetAllCounters} className="reset-btn">
            Reset
          </button>
          {counters}
        </div>
      </div>
    </div>
  );
}

export default App;
