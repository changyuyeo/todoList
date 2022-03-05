import { AxiosPromise } from 'axios'

import { todos } from '@lib/api'
import { TodoType } from '@typings/todo'

export interface AddTodoAPIBody {
	text: string
	color: TodoType['color']
}

//* TodoList 조회 API
export const getTodosAPI = (): AxiosPromise<TodoType[]> => todos.get('/')

//* TodoItem 추가 API
export const addTodoAPI = (body: AddTodoAPIBody): AxiosPromise<TodoType> =>
	todos.post('/', body)

//* TodoItem 체크 API
export const checkTodoAPI = (id: number): AxiosPromise<{ id: number }> =>
	todos.patch(`/${id}`)

//* TodoIteme 삭제 API
export const deleteTodoAPI = (id: number): AxiosPromise<{ id: number }> =>
	todos.delete(`/${id}`)
