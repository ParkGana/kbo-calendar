import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dates: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        days: []
    }
};

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        /* 이전 or 다음 달로 이동하기 */
        moveMonth: (state, action) => {
            const { year, month } = action.payload;

            state.dates = { ...state.dates, year, month };
        },

        /* 날짜 데이터 가져오기 */
        fetchDates: (state, action) => {
            const { year, month } = action.payload;

            const firstDay = (new Date(year, month - 1).getDay() + 6) % 7;
            const lastDate = new Date(year, month, 0).getDate();

            let dates = Array.from({ length: 42 }, () => null);

            for (let i = firstDay; i < firstDay + lastDate; i++) {
                dates[i] = i - firstDay + 1;
            }

            state.dates = { year, month, days: dates };
        }
    }
});

export const { moveMonth, fetchDates } = scheduleSlice.actions;
export default scheduleSlice.reducer;
