import "./App.css";
import { Greet, Add } from "./Grret";

//these function which has some logic in and return some ui element is component
function App() {
  return (
    <>
      <Greet name={"moheed"} />
      <Add a={10} b={15} />
      <h1>hello</h1>
    </>
  );
}

export default App;
