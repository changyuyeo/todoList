import { ChangeEvent, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { TodoType } from '@typings/todo'
import { addTodo } from '@store/todo/actions'
import { Container } from '@components/AddTodo/styles'
import BrushIcon from '../../../public/static/svg/brush.svg'

const AddTodo = () => {
	const dispatch = useDispatch()
	const router = useRouter()

	const [text, setText] = useState('')
	const [selectedColor, setSelectedColor] = useState<TodoType['color']>()

	const onSelectedColor = useCallback(
		(color: TodoType['color']) => () => setSelectedColor(color),
		[]
	)

	const onChangeText = useCallback(
		(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.currentTarget.value),
		[]
	)

	const onAddTodoItem = useCallback(() => {
		if (!text || !selectedColor) return alert('색상과 할 일을 입력해주세요!')
		dispatch(addTodo({ text, color: selectedColor }))
		router.push('/')
	}, [dispatch, router, selectedColor, text])

	return (
		<Container>
			<div className="add-todo-header">
				<h1 className="add-todo-header-title">Add Todo</h1>
				<button
					type="button"
					className="add-todo-submit-button"
					onClick={onAddTodoItem}
				>
					추가하기
				</button>
			</div>
			<div className="add-todo-colors-wrapper">
				<div className="add-todo-color-list">
					{['red', 'orange', 'yellow', 'green', 'blue', 'navy'].map(
						(color, index) => (
							<button
								key={index}
								type="button"
								className={`bg-${color} add-todo-color-button ${
									color === selectedColor ? 'add-todo-selected-color' : ''
								}`}
								onClick={onSelectedColor(color as TodoType['color'])}
							/>
						)
					)}
				</div>
				<BrushIcon />
			</div>
			<textarea
				className="add-todo-textarea"
				value={text}
				onChange={onChangeText}
				placeholder="할 일을 입력해주세요!"
			/>
		</Container>
	)
}

export default AddTodo
