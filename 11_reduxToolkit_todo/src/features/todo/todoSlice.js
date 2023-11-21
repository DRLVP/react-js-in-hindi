import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 123, text: "hello world" }]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.todos.push({ id: nanoid(), text: action.payload });
            },
            prepare: (text) => ({ payload: text }),
        },
        removeTodo: (state, action) => {
            return state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
    },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
