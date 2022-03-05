import { AnyAction, CombinedState, combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'

import todoSlice, { TodoState } from '@store/todo'

export interface State {
	todo: TodoState
}

const rootReducer = (
	state: State | undefined,
	action: AnyAction
): CombinedState<State> => {
	switch (action.type) {
		case HYDRATE:
			return action.payload
		default: {
			const combineReducer = combineReducers({ todo: todoSlice })
			return combineReducer(state, action)
		}
	}
}

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
