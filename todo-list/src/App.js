import './App.css';
import React, {useState, useEffect} from 'react';
import Form from './components/Form.js';
import TodoList from './components/TodoList';
function App() {
  const [inputText, setInputText]= useState("");
  const [todos, setTodos]= useState([]);
  const [status, setStatus]= useState("all");
  const [filterTodos, setFilterTodos]= useState([]);

  const filterHandler =() =>{
    
    switch(status){
      case 'completed':
        setFilterTodos(todos.filter(todo=> todo.completed === true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo=> todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
      }
  }

  //--------useEffect
  useEffect(()=>{
    filterHandler();
  }, [todos, status]);
  return (
    <div className="App">
      <header>Todo App </header>
      <Form 
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus= {setStatus}
      />

      <TodoList 
          todos={todos}
          setTodos={setTodos}
          filterTodos={filterTodos}
      />
    </div>
  );
}

export default App;
