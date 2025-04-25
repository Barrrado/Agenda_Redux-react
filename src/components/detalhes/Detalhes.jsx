import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editContatoStart, updateEditValues, editContatoSave } from '../../redux/actions'
import { SaveAll, UserPen } from 'lucide-react'
import {
	Btnsalvar,
	Btnvoltar,
	Btneditar,
	Detalhesconteiner,
	Seta,
	Detalhesp,
	ConteinerEditar
} from '../detalhes/Detalhesstyled'

function DetalhesContato() {
	const { id } = useParams()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const contatos = useSelector((state) => state.agenda.lista)
	const editValues = useSelector((state) => state.agenda.editValues)
	const contato = contatos[id]
	const [isEditando, setIsEditando] = useState(false)

	useEffect(() => {
		if (contato) {
			dispatch(editContatoStart({ ...contato }))
		} else {
			navigate('/elemento')
		}
	}, [id, contato, dispatch, navigate])

	const EditInputChange = (e) => {
		const { name, value } = e.target
		dispatch(updateEditValues({ ...editValues, [name]: value }))
	}

	const SalvarContato = () => {
		dispatch(editContatoSave({ index: parseInt(id), updatedContato: editValues }))
		setIsEditando(false)
		navigate('/elemento')
	}

	if (!contato) {
		return <div>Contato não encontrado.</div>
	}

	return (
		<div className="body">
			<h1>Detalhes do Contato</h1>

			{isEditando ? (
				<ConteinerEditar>
					<form onSubmit={(e) => e.preventDefault()}>
						<div>
							<label>Nome:</label>
							<input
								name="nome"
								type="text"
								value={editValues.nome || ''}
								onChange={EditInputChange}
							/>
						</div>
						<div>
							<label>Telefone:</label>
							<input
								name="tel"
								type="tel"
								value={editValues.tel || ''}
								onChange={EditInputChange}
							/>
						</div>
						<div>
							<label>E-mail:</label>
							<input
								name="email"
								type="email"
								value={editValues.email || ''}
								onChange={EditInputChange}
							/>
						</div>
						<div>
							<Btnsalvar onClick={SalvarContato}>
								<SaveAll />
							</Btnsalvar>
							<Btnvoltar onClick={() => navigate('/detalhes/:id')}>
								<Seta></Seta>
							</Btnvoltar>
						</div>
					</form>
				</ConteinerEditar>
			) : (
				<>
					<Detalhesconteiner>
						<Detalhesp>
							<strong>Nome:</strong> {contato.nome}
						</Detalhesp>
						<Detalhesp>
							<strong>Telefone:</strong> {contato.tel}
						</Detalhesp>
						<Detalhesp>
							<strong>E-mail:</strong> {contato.email}
						</Detalhesp>
						<Btneditar
							onClick={() => {
								dispatch(editContatoStart(parseInt(id)))
								setIsEditando(true)
							}}
						>
							<UserPen />
						</Btneditar>
						<Btnvoltar onClick={() => navigate('/elemento')}>
							<Seta></Seta>
						</Btnvoltar>
					</Detalhesconteiner>
				</>
			)}
		</div>
	)
}
export default DetalhesContato
