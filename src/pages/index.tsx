import { GetServerSideProps, NextPage } from 'next'

import { TodoType } from '@typings/todo'
import TodoList from '@components/TodoList'
import { getTodosAPI } from '@lib/api/todo'

interface Props {
	todos: TodoType[]
}

const HomePage: NextPage<Props> = ({ todos }) => {
	return <TodoList todos={todos} />
}

export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const { data } = await getTodosAPI()
		return { props: { todos: data } }
	} catch (error) {
		console.error(error)
		return { props: {} }
	}
}

export default HomePage
