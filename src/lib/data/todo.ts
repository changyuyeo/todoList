import { readFileSync, writeFileSync } from 'fs'
import { TodoType } from '@typings/todo'

//* TodoList 데이터 불러오기
const getList = () => {
	const todosBuffer = readFileSync('src/data/todos.json')
	const todosString = todosBuffer.toString()
	if (!todosString) return []
	const todos: TodoType[] = JSON.parse(todosString)
	return todos
}

//* id의 TodoItem이 있는지 확인하기
const exist = ({ id }: { id: number }) => {
	const todos = getList()
	const todo = todos.some(todo => todo.id === id)
	return todo
}

//* TodoItem 저장하기
const write = async (todos: TodoType[]) => {
	writeFileSync('src/data/todos.json', JSON.stringify(todos))
}

export default { getList, exist, write }
