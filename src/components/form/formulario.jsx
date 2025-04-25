import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux' // Importe o useSelector
import { useNavigate } from 'react-router-dom'
import { addContato } from '../../redux/actions'
import { Save, BookX } from 'lucide-react'
import { Btncancelar, Btnsave } from './formstyle'

function FormularioContato() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const contatos = useSelector((state) => state.agenda.lista)

	const [novoContato, setNovoContato] = useState({
		nome: '',
		tel: '',
		email: ''
	})
	const [erro, setErro] = useState('')

	const InputChange = (e) => {
		const { name, value } = e.target
		setNovoContato({ ...novoContato, [name]: value })
		setErro('')
	}

	const formatarTelefone = (telefone) => {
		const cleaned = ('' + telefone).replace(/\D/g, '')
		const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/)
		if (match) {
			return `(${match[1]}) ${match[2]}-${match[3]}`
		}
		return cleaned
	}

	const validarEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}

	const Submitcontato = (e) => {
		e.preventDefault()
		const { nome, tel, email } = novoContato

		if (!nome.trim() || !tel.trim() || !email.trim()) {
			setErro('Por favor, preencha todos os campos.')
			return
		}

		const contatoExistente = contatos.find(
			(contato) => contato.nome.toLowerCase() === nome.toLowerCase() || contato.tel === tel
		)

		if (contatoExistente) {
			setErro('Já existe um contato com este nome ou telefone.')
			return
		}

		if (!validarEmail(email)) {
			setErro('Por favor, insira um e-mail válido.')
			return
		}

		const contatoParaAdicionar = { ...novoContato, tel: formatarTelefone(tel) }
		dispatch(addContato(contatoParaAdicionar))
		navigate('/elemento')
	}

	return (
		<div>
			<h1>Adicionar Novo Contato</h1>
			{erro && <p style={{ color: 'red' }}>{erro}</p>}
			<form onSubmit={Submitcontato}>
				<div>
					<label htmlFor="nome">Nome:</label>
					<input
						type="text"
						id="nome"
						name="nome"
						value={novoContato.nome}
						onChange={InputChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="tel">Telefone:</label>
					<input
						type="tel"
						id="tel"
						name="tel"
						value={novoContato.tel}
						onChange={InputChange}
						required
						placeholder="(XX) XXXXX-XXXX"
					/>
				</div>
				<div>
					<label htmlFor="email">E-mail:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={novoContato.email}
						onChange={InputChange}
						required
					/>
				</div>
				<Btnsave type="submit">
					<Save />
				</Btnsave>
				<Btncancelar type="button" onClick={() => navigate('/elemento')}>
					<BookX />
				</Btncancelar>
			</form>
		</div>
	)
}

export default FormularioContato
