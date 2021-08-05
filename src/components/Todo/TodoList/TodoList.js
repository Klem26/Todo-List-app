import React from 'react';
import { connect } from 'react-redux';
import styles from './TodoList.module.css'
import TodoItem from '../TodoItem'
import todosActions from '../../../redux/todos/todos-actions';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
    return (
        <div className={styles.container}>
            <ul className={styles.containerList}>
                {todos.map(({ id, text, completed }) => (
                    <li className={styles.containerItem}
                        key={id}>

                        <TodoItem
                            text={text}
                            completed={completed}
                            onToggleCompleted={() => onToggleCompleted(id)}
                            onDeleteTodo={() => onDeleteTodo(id)}
                        />

                    </li>))}
            </ul>
        </div>
    )

};


const getVisibleTodos = (allTodos, filter) => {
    const normalizedFilter = filter.trim().toLocaleLowerCase();
    return allTodos.filter(({ text }) =>
        text.toLocaleLowerCase().includes(normalizedFilter))
};

const mapStateToProps = ({ todos: { items, filter } }) => ({
    todos: getVisibleTodos(items, filter),

})

const mapDispatchToProps = dispatch => ({
    onDeleteTodo: id => dispatch(todosActions.deleteTodo(id)),
    onToggleCompleted: id => dispatch(todosActions.toggleCompleted(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);