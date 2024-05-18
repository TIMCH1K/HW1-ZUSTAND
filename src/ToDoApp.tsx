import React, { useState } from 'react';
import useStore from './store';
import './App.css';

const ToDoApp: React.FC = () => {
    const [text, setText] = useState('');
    const todos = useStore((state) => state.todos);
    const addTodo = useStore((state) => state.addTodo);
    const toggleTodo = useStore((state) => state.toggleTodo);
    const deleteTodo = useStore((state) => state.deleteTodo);

    const handleAddTodo = () => {
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <div className="todo-container">
            <h1>ToDo List with Zustand</h1>
            <div className="todo-input">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button onClick={handleAddTodo}>Add ToDo</button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
            <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoApp;
