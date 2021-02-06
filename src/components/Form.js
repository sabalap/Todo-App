import React from "react";
const Form = ({ input, setInput, todos, setTodos, setStatus }) => {
    const inputHandler = (e) => {
        setInput(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: input, completed: false, id: Math.random() * 1000
            }
        ])
        setInput("")
    }
    const filterHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <form>
            <input
                type="text"
                className="todo-input"
                onChange={inputHandler}
                value={input}
            />
            <button className="todo-button" type="submit" onClick={submitHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onClick={filterHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}
export default Form;