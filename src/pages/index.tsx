import { GetServerSideProps, NextPage } from 'next'

import { wrapper } from '@store/index'
import { setTodo } from '@store/todo'
import { getTodosAPI } from '@lib/api/todo'
import TodoList from '@components/TodoList'

const HomePage: NextPage = () => {
	return <TodoList />
}

export const getServerSideProps: GetServerSideProps =
	wrapper.getServerSideProps(({ dispatch }) => async () => {
		try {
			const { data } = await getTodosAPI()
			dispatch(setTodo(data))
			return { props: {} }
		} catch (error) {
			console.error(error)
			return { props: {} }
		}
	})

export default HomePage
