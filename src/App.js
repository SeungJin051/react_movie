import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter(counter + 1);
  console.log("항상 실행");
  useEffect(() => {
    console.log("API 호출");
  }, []);
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
