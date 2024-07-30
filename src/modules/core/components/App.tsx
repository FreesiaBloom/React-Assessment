import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((res) => setTodos(res.todos));
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {todos.length && <div>Todo List : {todos.length}</div>}
      </div>
    </>
  );
}

export default App;