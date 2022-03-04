import { TodoType } from '@typings/todo'

interface ObjectIndexType {
	[key: string]: number | undefined
}

const getTodoColorNums = (todos: TodoType[]) => {
	const colors: ObjectIndexType = {}
	todos.forEach(todo => {
		const value = colors[todo.color]
		!value
			? (colors[`${todo.color}`] = 1) //* 존재하지 않은 key
			: (colors[`${todo.color}`] = value + 1) //* 존재하는 key
	})
	return colors
}

export default getTodoColorNums
