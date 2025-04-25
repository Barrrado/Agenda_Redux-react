import {
	ADD_CONTATO,
	REMOVE_CONTATO,
	EDIT_CONTATO_START,
	EDIT_CONTATO_SAVE,
	UPDATE_EDIT_VALUES
} from './types'

// Função para carregar os contatos do Local Storage
const loadContatos = () => {
	try {
		const storedContatos = localStorage.getItem('contatos')
		return storedContatos ? JSON.parse(storedContatos) : []
	} catch (error) {
		console.error('Erro ao carregar contatos do Local Storage:', error)
		return []
	}
}

// Estado inicial carregando os contatos do Local Storage
const initialState = {
	lista: loadContatos(),
	editIndex: null,
	editValues: { nome: '', tel: '', email: '' }
}

// Função para salvar os contatos no Local Storage
const saveContatos = (contatos) => {
	try {
		localStorage.setItem('contatos', JSON.stringify(contatos))
	} catch (error) {
		console.error('Erro ao salvar contatos no Local Storage:', error)
	}
}

const agendaReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CONTATO:
			const newStateAdd = { ...state, lista: [...state.lista, action.payload] }
			saveContatos(newStateAdd.lista)
			return newStateAdd

		case REMOVE_CONTATO:
			const newStateRemove = {
				...state,
				lista: state.lista.filter((_, index) => index !== action.payload)
			}
			saveContatos(newStateRemove.lista)
			return newStateRemove

		case EDIT_CONTATO_START:
			const contatoParaEditar = state.lista[action.payload]
			return {
				...state,
				editIndex: action.payload,
				editValues: { ...contatoParaEditar }
			}

		case EDIT_CONTATO_SAVE:
			const listaAtualizada = [...state.lista]
			listaAtualizada[action.payload.index] = action.payload.updatedContato
			const newStateEdit = {
				...state,
				lista: listaAtualizada,
				editIndex: null,
				editValues: { nome: '', tel: '', email: '' }
			}
			saveContatos(newStateEdit.lista)
			return newStateEdit

		case UPDATE_EDIT_VALUES:
			return {
				...state,
				editValues: action.payload
			}

		default:
			return state
	}
}

export default agendaReducer
