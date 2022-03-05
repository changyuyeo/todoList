import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TodoType } from '@typings/todo'
import { addTodo, checkTodo, deleteTodo } from '@store/todo/actions'

export interface TodoState {
	addTodoLoading: boolean
	addTodoDone: boolean
	addTodoError?: string | null
	checkTodoLoading: boolean
	checkTodoDone: boolean
	checkTodoError?: string | null
	deleteTodoLoading: boolean
	deleteTodoDone: boolean
	deleteTodoError?: string | null
	todos: TodoType[]
}

const initialState: TodoState = {
	addTodoLoading: false,
	addTodoDone: false,
	addTodoError: null,
	checkTodoLoading: false,
	checkTodoDone: false,
	checkTodoError: null,
	deleteTodoLoading: false,
	deleteTodoDone: false,
	deleteTodoError: null,
	todos: []
}

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		setTodo(state, action: PayloadAction<TodoType[]>) {
			state.todos = action.payload
		}
	},
	extraReducers: builder => {
		//* addTodo
		builder.addCase(addTodo.pending, state => {
			state.addTodoLoading = true
			state.addTodoDone = false
			state.addTodoError = null
		})
		builder.addCase(addTodo.fulfilled, (state, action) => {
			state.addTodoLoading = false
			state.addTodoDone = true
			state.todos.push(action.payload)
		})
		builder.addCase(addTodo.rejected, (state, action) => {
			state.addTodoLoading = false
			state.addTodoError = action.error.message
		})
		//* checkTodo
		builder.addCase(checkTodo.pending, state => {
			state.checkTodoLoading = true
			state.checkTodoDone = false
			state.checkTodoError = null
		})
		builder.addCase(checkTodo.fulfilled, (state, action) => {
			state.checkTodoLoading = false
			state.checkTodoDone = true
			state.todos = state.todos.map(todo =>
				todo.id === action.payload.id
					? { ...todo, checked: !todo.checked }
					: todo
			)
		})
		builder.addCase(checkTodo.rejected, (state, action) => {
			state.checkTodoLoading = false
			state.checkTodoError = action.error.message
		})
		//* deleteTodo
		builder.addCase(deleteTodo.pending, state => {
			state.deleteTodoLoading = true
			state.deleteTodoDone = false
			state.deleteTodoError = null
		})
		builder.addCase(deleteTodo.fulfilled, (state, action) => {
			state.deleteTodoLoading = false
			state.deleteTodoDone = true
			state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
		})
		builder.addCase(deleteTodo.rejected, (state, action) => {
			state.deleteTodoLoading = false
			state.deleteTodoError = action.error.message
		})
	}
})

export const { setTodo } = todoSlice.actions
export default todoSlice.reducer
