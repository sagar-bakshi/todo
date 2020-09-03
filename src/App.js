import React,{useState} from 'react';
import './App.css';
import Form from "./component/Form";
import TodoList from "./component/ToDoList";

function App() {

    const [inputText, setInputText] = useState("");
    const [todos, setToDos] = useState([]);

  return (
    <div className="App">
      <header>
          <h2>My To Do List</h2>
      </header>
        <Form setInputText={setInputText}
              inputText={inputText}
              todos={todos}
              setTodo={setToDos}
        />
        <TodoList todos={todos} setTodos={setToDos}/>
    </div>
  );
}

export default App;
