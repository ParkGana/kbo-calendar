import { configureStore } from '@reduxjs/toolkit';
import schedule from '../slices/scheduleSlice';

const store = configureStore({
    reducer: {
        schedule
    }
});

export default store;
