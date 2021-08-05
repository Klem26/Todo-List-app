import React from 'react';
import styles from './TodoItem.module.css'

const TodoItem = ({ text, completed, onToggleCompleted, onDeleteTodo }) => {
    return (
        <>
            <input
                type="checkbox"
                className={styles.TodoList__checkbox}
                checked={completed}
                onChange={onToggleCompleted}
            />
            <p className={styles.text}
            >{text}</p>
            <button
                className={styles.btn}
                onClick={onDeleteTodo}
            >Delete</button>
        </>
    )
}

export default TodoItem;