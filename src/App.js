import { useState , useRef } from "react";
import TodoList from "./TodoList";
import {v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);

const todoNameRef = useRef();

const handleAddTodo = () => {
//タスクを追加する
const name = todoNameRef.current.value;
setTodos((prevTodos) => {
  return [...prevTodos,{id: uuidv4(), name, completed: false}];
});
todoNameRef.current.value = null;
};

const toggleTodo = (id) => {
 const newTodos = [...todos]; //直接値を触らないようにコピーしてあげている
 const todo = newTodos.find((todo) => todo.id === id); //状態が一致していたらチェックを反転させる
 todo.completed = !todo.completed;
 setTodos(newTodos) //更新する
};
const handleClear = () =>{
  const newTodos = todos.filter((todo) => !todo.completed);
setTodos(newTodos);
}

  return (
    <div className="App">
     <TodoList todos={todos}  toggleTodo={toggleTodo}/>
     <input type="text" ref={todoNameRef}/>
     <button onClick={handleAddTodo}>タスクの追加</button>
     <button onClick={handleClear}>完了したタスクの削除</button>
     <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
  };
// 動画38:28

export default App;
