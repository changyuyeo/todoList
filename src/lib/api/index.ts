import Axios from 'axios'

//* NEXT_PUBLIC_API_URL=http://localhost:3000/api
const { NEXT_PUBLIC_API_URL } = process.env

const instance = (url: string) =>
	Axios.create({ baseURL: `${NEXT_PUBLIC_API_URL}/${url}` })

export const todos = instance('todos')
