import { create } from 'zustand';

const useCalendarStore = create((set) => ({
    calendar: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: 1
    },
    /* 다음 년도로 이동 */
    moveToPrevYear: () =>
        set((state) => ({
            calendar: {
                ...state.calendar,
                year: state.calendar.year - 1
            }
        })),
    /* 이전 년도로 이동 */
    moveToNextYear: () =>
        set((state) => ({
            calendar: {
                ...state.calendar,
                year: state.calendar.year + 1
            }
        })),
    /* 다음 달로 이동 */
    moveToPrevMonth: () =>
        set((state) => ({
            calendar: {
                ...state.calendar,
                year: state.calendar.month === 1 ? state.calendar.year - 1 : state.calendar.year,
                month: state.calendar.month === 1 ? 12 : state.calendar.month - 1
            }
        })),
    /* 이전 달로 이동 */
    moveToNextMonth: () =>
        set((state) => ({
            calendar: {
                ...state.calendar,
                year: state.calendar.month === 12 ? state.calendar.year + 1 : state.calendar.year,
                month: state.calendar.month === 12 ? 1 : state.calendar.month + 1
            }
        })),
    /* 날짜 선택 */
    selectDay: (day) =>
        set((state) => ({
            calendar: {
                ...state.calendar,
                day
            }
        }))
}));

export default useCalendarStore;
