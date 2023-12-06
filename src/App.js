import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";
import "./styles.css";

export default function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux Toolkit</h1>
      <h2>Counter</h2>
      <div className="counter">
        <button onClick={() => dispatch(increment())}>+</button>
        <p>{count}</p>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}
