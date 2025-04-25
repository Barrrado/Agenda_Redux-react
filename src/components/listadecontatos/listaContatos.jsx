import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	TelaInicial,
	Conteinerinicio,
	Circle,
	Agenda,
	Nome,
	Btnexcluir,
	Btnlink,
	Agendaconteiner,
	Menutexto,
	ConteinerAdicionar,
	MenuBtn,
	CirclePlus
} from './styles'

import { REMOVE_CONTATO } from '../../redux/types'
import { Trash2, View } from 'lucide-react'

function ListaNomesContatos() {
	const dispatch = useDispatch()
	const contatos = useSelector((state) => state.agenda.lista)
	if (contatos.length === 0) {
		return (
			<div>
				<h1>Lista de Contatos</h1>
				<Conteinerinicio>
					<TelaInicial>
						<span>Clique no </span>
						<Circle to="/adicionar">
							<CirclePlus></CirclePlus>
						</Circle>
						<span> para adicionar Contatos</span>
					</TelaInicial>
				</Conteinerinicio>
			</div>
		)
	}
	const RemoveContato = (index) => {
		dispatch({ type: REMOVE_CONTATO, payload: index })
	}

	return (
		<>
			<div>
				<h1>Lista de Contatos</h1>
			</div>
			<Agendaconteiner>
				{contatos.map((contato, index) => (
					<>
						<Agenda key={index}>
							<Nome>{contato.nome}</Nome>
							<MenuBtn>
								<Btnlink to={`/detalhes/${index}`}>
									<View />
								</Btnlink>
								<Btnexcluir onClick={() => RemoveContato(index)}>
									<Trash2 />
								</Btnexcluir>
							</MenuBtn>
						</Agenda>
					</>
				))}
				<ConteinerAdicionar>
					<Circle to="/adicionar">
						<CirclePlus></CirclePlus>
					</Circle>
					<Menutexto>Adicionar</Menutexto>
				</ConteinerAdicionar>
			</Agendaconteiner>
					<p> CRIADO POR DIEGO BARRADO PARA  ESTUDOS</p>
		</>

	)
}

export default ListaNomesContatos
