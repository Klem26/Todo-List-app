
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todosReducer from './todos/todos-reducer';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';


const myMiddlWare = store => next => action => {
    console.log('прослойка ', action);
    next(action);
};

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    myMiddlWare,
    logger,
];

const todosPersistConfig = {
    key: 'todos',
    storage,
    blacklist: ['filter'],
}



const store = configureStore({
    reducer: {
        todos: persistReducer(todosPersistConfig, todosReducer),
    },
    middleware: middleware,
    devTools: process.env.NODE_ENV === 'development',
});
const persistor = persistStore(store)


export default { persistor, store };