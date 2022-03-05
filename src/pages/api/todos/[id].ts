import { NextApiRequest, NextApiResponse } from 'next'
import Data from '@lib/data'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	//* PATCH /api/todos/:id
	//* 아이템 체크 API
	if (req.method === 'PATCH') {
		try {
			const todoId = Number(req.query.id)
			const todo = Data.todo.exist({ id: todoId })
			if (!todo) {
				res.statusCode = 404
				return res.end()
			}
			const todos = Data.todo.getList()
			const changedTodos = todos.map(todo => {
				if (todo.id === todoId) return { ...todo, checked: !todo.checked }
				return todo
			})
			Data.todo.write(changedTodos)
			res.statusCode = 200
			return res.send({ id: todoId })
		} catch (error) {
			console.log(error)
			res.statusCode = 500
			return res.send(error)
		}
	}

	//* DELETE /api/todos/:id
	//* 아이템 삭제 API
	if (req.method === 'DELETE') {
		try {
			const todoId = Number(req.query.id)
			const todo = Data.todo.exist({ id: todoId })
			if (!todo) {
				res.statusCode = 404
				return res.end()
			}
			const todos = Data.todo.getList()
			const filterTodos = todos.filter(todo => todo.id !== todoId)
			Data.todo.write(filterTodos)
			res.statusCode = 200
			return res.send({ id: todoId })
		} catch (error) {
			console.log(error)
			res.statusCode = 500
			return res.send(error)
		}
	}

	res.statusCode = 405
	return res.end()
}
