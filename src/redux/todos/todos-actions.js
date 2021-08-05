import shortid from 'shortid';

import { createAction } from '@reduxjs/toolkit';

const addTodo = createAction('todo/add', text => {
    return {
        payload: {
            id: shortid.generate(),
            text,
            completed: false,
        },
    }
})

const deleteTodo = createAction('todo/delete')

const changeFilter = createAction('todo/filter')

const toggleCompleted = createAction('todo/toggle')

const actions = { addTodo, deleteTodo, changeFilter, toggleCompleted };
export default actions;