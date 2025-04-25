import { configureStore } from '@reduxjs/toolkit'
import agendaReducer from './reducers'

const store = configureStore({
	reducer: {
		agenda: agendaReducer
	}
})

export default store
