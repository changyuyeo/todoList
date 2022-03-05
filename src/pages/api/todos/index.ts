import { NextApiRequest, NextApiResponse } from 'next'
import Data from '@lib/data'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	//* GET /api/todos
	//* 리스트 조회 API
	if (req.method === 'GET') {
		try {
			const todos = Data.todo.getList()
			res.statusCode = 200
			return res.send(todos)
		} catch (error) {
			console.log(error)
			res.statusCode = 500
			res.send(error)
		}
	}

	//* POST /api/todos
	//* 아이템 추가 API
	if (req.method === 'POST') {
		const { text, color } = req.body
		if (!text || !color) {
			res.statusCode = 400
			return res.send('text와 color는 필수입니다!')
		}
		const todos = Data.todo.getList()
		let todoId: number
		todos.length > 0 ? (todoId = todos[todos.length - 1].id + 1) : (todoId = 1)
		const newTodo = {
			id: todoId,
			text,
			color,
			checked: false
		}
		Data.todo.write([...todos, newTodo])
		res.statusCode = 200
		return res.send(newTodo)
	}

	res.statusCode = 405
	console.log(res.statusCode)
	return res.end()
}
