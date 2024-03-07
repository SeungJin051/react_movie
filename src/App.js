import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [toDo, setToDo] = useState(""); // 입력된 할 일을 저장하는 상태
  const [toDos, setToDos] = useState([]); // 할 일 목록을 저장하는 상태

  // 입력된 값을 상태에 업데이트하는 함수
  const onChange = (event) => setToDo(event.target.value);

  // 할 일을 추가하는 함수
  const onSubmit = (event) => {
    event.preventDefault(); // 폼의 기본 동작 방지
    if (toDo.trim() === "") return; // 입력된 값이 없으면 함수 종료

    // 이전 할 일 목록에 새로운 할 일을 추가하여 상태 업데이트
    setToDos((prevToDos) => [toDo, ...prevToDos]);
    setToDo(""); // 입력 필드 초기화
  };
  console.log(toDos);

  return (
    <div>
      <h1 className={styles.title}>My Todo List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="할 일을 적으세요"
          value={toDo}
          onChange={onChange}
        />
        <button type="submit">추가</button>
        <hr />
        <ul>
          {toDos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
