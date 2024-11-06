import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/Counter/CounterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default store;

