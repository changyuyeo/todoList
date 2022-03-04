import { FC, useCallback, useMemo, useState } from 'react'

import { TodoType } from '@typings/todo'
import { checkTodoAPI, deleteTodoAPI } from '@lib/api/todo'
import getTodoColorNums from '@utils/getTodoColorNums'
import { Container } from '@components/TodoList/styles'
import TrashCanIcon from '../../../public/static/svg/trash_can.svg'
import CheckMarkIcon from '../../../public/static/svg/check_mark.svg'

interface TodoListProps {
	todos: TodoType[]
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
	const [localTodos, setLocalTodos] = useState(todos)

	const todoColorNums = useMemo(
		() => getTodoColorNums(localTodos),
		[localTodos]
	)

	const onDeleteTodo = useCallback(
		(id: number) => async () => {
			try {
				await deleteTodoAPI(id)
				const newTodos = localTodos.filter(todo => todo.id !== id)
				setLocalTodos(newTodos)
			} catch (error) {
				console.error(error)
			}
		},
		[localTodos]
	)

	const onCheckTodo = useCallback(
		(id: number) => async () => {
			try {
				await checkTodoAPI(id)
				const newTodo = localTodos.map(todo =>
					todo.id === id ? { ...todo, checked: !todo.checked } : todo
				)
				setLocalTodos(newTodo)
			} catch (error) {
				console.error(error)
			}
		},
		[localTodos]
	)

	return (
		<Container>
			<div className="todo-list-header">
				<p className="todo-list-last-todo">
					남은 TODO<span>{localTodos.length}개</span>
				</p>
				<div className="todo-list-header-colors">
					{Object.keys(todoColorNums).map((color, index) => (
						<div key={index} className="todo-list-header-color-num">
							<div className={`todo-list-header-round-color bg-${color}`} />
							<p>{todoColorNums[color]}개</p>
						</div>
					))}
				</div>
			</div>
			<ul className="todo-list">
				{localTodos.map(todo => (
					<li key={todo.id} className="todo-item">
						<div className="todo-left-side">
							<div className={`todo-color-block bg-${todo.color}`} />
							<p
								className={`todo-text ${
									todo.checked ? 'checked-todo-text' : ''
								}`}
							>
								{todo.text}
							</p>
						</div>
						<div className="todo-right-side">
							{todo.checked ? (
								<>
									<TrashCanIcon
										className="todo-trash-can"
										onClick={onDeleteTodo(todo.id)}
									/>
									<CheckMarkIcon
										className="todo-check-mark"
										onClick={onCheckTodo(todo.id)}
									/>
								</>
							) : (
								<button
									type="button"
									className="todo-button"
									onClick={onCheckTodo(todo.id)}
								/>
							)}
						</div>
					</li>
				))}
			</ul>
		</Container>
	)
}

export default TodoList
