import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import actions from "./todos-actions";


const items = createReducer([], {

    [actions.addTodo]: (state, action) => [...state, action.payload],


    [actions.deleteTodo]: (state, action) => state.filter(todo => todo.id !== action.payload),

    [actions.toggleCompleted]: (state, action) =>
        state.map(todo =>
            todo.id === action.payload ? {
                ...todo, completed: !todo.completed
            } : todo,
        )

})




const filter = createReducer('', {
    [actions.changeFilter]: (_, action) => action.payload
})



export default combineReducers({
    items,
    filter
})
