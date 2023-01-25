import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Inc, Dec } from "./states/reducers";

function App() {
  const curruntState = useSelector((state) => state.number);
  const dispatch = useDispatch();

  return (
    <>
      <div className="App">
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1>React | Redux</h1>
          <h1>{curruntState}</h1>
          <div>
            <button onClick={() => dispatch(Inc(1))} className="btn">
              +Increment
            </button>
            <button onClick={() => dispatch(Dec(1))} className="btn">
              -Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
