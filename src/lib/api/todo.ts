import { AxiosPromise } from 'axios'

import { todos } from '@lib/api'
import { TodoType } from '@typings/todo'

interface AddTodoAPIBody {
	text: string
	color: TodoType['color']
}

//* TodoList 조회 API
export const getTodosAPI = (): AxiosPromise<TodoType[]> => todos.get('/')

//* TodoItem 체크 API
export const checkTodoAPI = (id: number) => todos.patch(`/${id}`)

//* TodoItem 추가 API
export const addTodoAPI = (body: AddTodoAPIBody) => todos.post('/', body)

//* TodoIteme 삭제 API
export const deleteTodoAPI = (id: number) => todos.delete(`/${id}`)
