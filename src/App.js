import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css"
function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodo, setFilterTodo] = useState([]);
  const filteredTodo = () => {
    switch (status) {
      case "completed":
        setFilterTodo(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodo(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodo(todos)
    }
  }
  const localTodo = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const getLocalTodo = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    }
    else {
      const localTodo = JSON.parse(localStorage.getItem("todos"))
      setTodos(localTodo)
    }
  }
  useEffect(() => {
    getLocalTodo();
  }, [])
  useEffect(() => {
    filteredTodo()
    localTodo();
  }, [status, todos])
  return (
    <div className="App">
      <header>
        <h1>Saba's Todo List</h1>
      </header>
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filterTodo={filterTodo}
      />
    </div>
  )
}
export default App;