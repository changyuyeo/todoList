import { useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'

import getTodoColorNums from '@utils/getTodoColorNums'
import { useSelector } from '@store/index'
import { checkTodo, deleteTodo } from '@store/todo/actions'
import { Container } from '@components/TodoList/styles'
import TrashCanIcon from '../../../public/static/svg/trash_can.svg'
import CheckMarkIcon from '../../../public/static/svg/check_mark.svg'

const TodoList = () => {
	const dispatch = useDispatch()
	const { todos } = useSelector(state => state.todo)

	const todoColorNums = useMemo(() => getTodoColorNums(todos), [todos])

	const onCheckTodo = useCallback(
		(id: number) => async () => dispatch(checkTodo(id)),
		[dispatch]
	)

	const onDeleteTodo = useCallback(
		(id: number) => async () => dispatch(deleteTodo(id)),
		[dispatch]
	)

	return (
		<Container>
			<div className="todo-list-header">
				<p className="todo-list-last-todo">
					남은 TODO<span>{todos.length}개</span>
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
				{todos.map(todo => (
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
