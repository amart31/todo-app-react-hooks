import React, { useState, useEffect } from 'react';
import './App.css';

import {  
    Container,
    Navbar,
    NavbarBrand } from 'reactstrap';

function NavBar() {
    return (
        <Container>

            <Navbar className="nav">
            <NavbarBrand href="/">To-Do App</NavbarBrand>
            </Navbar>
        </Container>
    );
}

function Task({ task, index, completeTask, removeTask }) {
    return (
        <Container
            className="task"
            style={{textDecoration: task.completed ? "line-through" : " "}}
            >
            {task.title}
            <button style={{background: "red" }} onClick={() => removeTask(index)}>X</button>
            <button onClick={() => completeTask(index)}>Complete</button>
            </Container>
    );
}

function CreateTask({ addTask}) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;

        addTask(value);
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input  
                type="text"
                className="input"
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
                />
        </form>
    );
}

function Todo() {
    const [tasksRemaining, setTasksRemaining] = useState(0);
    const [tasks, setTasks] = useState([
        
        {
            title: "Code, code, code",
            completed: false
        }
    ]);


    useEffect(() => { setTasksRemaining(tasks.filter(task => !task.completed).length) });

    const addTask = title => {
        const newTasks = [...tasks, {title, completed: false}];
        setTasks(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <Container>
        <NavBar />
        <Container className="todo-container">
        <Container className="header">Pending tasks ({tasksRemaining})</Container>
        <Container className="tasks">
            {tasks.map((task, index) => (
                <Task
                    task={task}
                    index={index}
                    completeTask={completeTask}
                    removeTask={removeTask}
                    key={index}
                    />
            ))}
        </Container>
                <Container className="create-task" >
                    <CreateTask addTask={addTask} />
                </Container>
        </Container>
        </Container>
    );
}

export default Todo;