import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter(counter + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  useEffect(() => {
    console.log("한번 실행");
  }, []);
  useEffect(() => {
    console.log("keyword 바뀌면 실행");
  }, [keyword]);
  useEffect(() => {
    console.log("counter 바뀌면 실행");
  }, [counter]);
  useEffect(() => {
    console.log("keyword & counter 바뀌면 실행");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="검색..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
