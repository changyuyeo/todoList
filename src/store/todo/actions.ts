import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	addTodoAPI,
	AddTodoAPIBody,
	checkTodoAPI,
	deleteTodoAPI
} from '@lib/api/todo'

export const addTodo = createAsyncThunk(
	'todo/addTodo',
	async (body: AddTodoAPIBody) => {
		const { data } = await addTodoAPI(body)
		return data
	}
)

export const checkTodo = createAsyncThunk(
	'todo/checkTodo',
	async (id: number) => {
		const { data } = await checkTodoAPI(id)
		return data
	}
)

export const deleteTodo = createAsyncThunk(
	'todo/deleteTodo',
	async (id: number) => {
		const { data } = await deleteTodoAPI(id)
		return data
	}
)
