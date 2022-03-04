import { NextApiRequest, NextApiResponse } from 'next'
import Data from '@lib/data'

export default async (req: NextApiRequest, res: NextApiResponse) => {
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

	if (req.method === 'POST') {
		const { text, color } = req.body
		if (!text || !color) {
			res.statusCode = 400
			return res.send('text와 color는 필수입니다!')
		}
		const todos = Data.todo.getList()
		let todoId: number
		todos.length > 0 ? (todoId = todos[todos.length - 1].id + 1) : (todoId = 1)
		Data.todo.write([
			...todos,
			{
				id: todoId,
				text,
				color,
				checked: false
			}
		])
		res.statusCode = 200
		return res.end()
	}

	res.statusCode = 405
	console.log(res.statusCode)
	return res.end()
}
