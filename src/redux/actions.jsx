import {
	ADD_CONTATO,
	REMOVE_CONTATO,
	EDIT_CONTATO_START,
	EDIT_CONTATO_SAVE,
	UPDATE_EDIT_VALUES
} from './types'

export const addContato = (contato) => ({
	type: ADD_CONTATO,
	payload: contato
})

export const removeContato = (index) => ({
	type: REMOVE_CONTATO,
	payload: index
})

export const editContatoStart = (index) => ({
	type: EDIT_CONTATO_START,
	payload: index
})

export const editContatoSave = ({ index, updatedContato }) => ({
	type: EDIT_CONTATO_SAVE,
	payload: { index, updatedContato }
})

export const updateEditValues = (values) => ({
	type: UPDATE_EDIT_VALUES,
	payload: values
})
