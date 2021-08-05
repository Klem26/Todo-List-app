import React from 'react';
import { connect } from 'react-redux';
import styles from './TodoCount.module.css'

const TodoCount = ({ total, completedTodo }) => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>All todos: {total}</p>
            <p className={styles.text}>Done : {completedTodo}</p>
        </div >
    )
}

const mapStateToProps = (state) => ({
    total: state.todos.items.length,
    completedTodo: state.todos.items.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0,)
});



export default connect(mapStateToProps)(TodoCount);