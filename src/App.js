import { useState , useRef } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState
  ([{id: 1 , name: "Todo1" , completed : false },
]);

const todoNameRef = useRef();

const handleAddTodo=() =>{
//タスクを追加する
const name = todoNameRef.current.value;
}

  return (
    <div className="App">
     <TodoList todos={todos}/>
     <input type="text" ref={todoNameRef}/>
     <button onClick={handleAddTodo}>タスクの追加</button>
     <button>完了したタスクの削除</button>
     <div>残りのタスク:0</div>
    </div>
  );
}
// 動画38:28

export default App;
