import styled from 'styled-components'
import { Link } from 'react-router-dom'
import background from './img/wp8189591.webp'
import { CirclePlusIcon } from 'lucide-react'

export const TelaInicial = styled.p`
	font-family: 'Raleway', sans-serif;
	font-weight: 600;
	display: flex;
	align-items: center;
	letter-spacing: 2px;
`

export const Conteinerinicio = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	margin: 0;
	width: 100%;
`
export const Circle = styled(Link)`
	background-color: rgb(255, 255, 255);
	color: rgb(0, 112, 9);
	justify-content: flex-start;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	cursor: pointer;
	transition:
		all,
		0.3s ease-in;
	&:hover {
		transform: scale(1.3);
	}
`
export const Agenda = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #0c0000;
	border-top: 1px solid #0f00008f;
	padding: 10px 0;
	flex-direction: row;
	margin: 10px;
	border-radius: 20px;
	background-color: rgba(240, 248, 255, 0.192);
	backdrop-filter: blur(30px);
	height: 21px;
`
export const Nome = styled.span`
	font-family: 'Raleway', sans-serif;
	font-weight: 600;
`
export const Btnexcluir = styled.button`
	border-radius: 50%;
	height: 30px;
	width: 30px;
	margin: 10px;
	cursor: pointer;
	color: #000000;
	background-color: transparent;
	transition:
		all,
		0.3s ease-in;

	&:hover {
		background-color: rgb(167, 0, 0);
		color: rgb(255, 255, 255);
	}
`

export const Btnlink = styled(Link)`
	text-decoration: none;
	color: rgb(0, 0, 0);
	transition:
		all,
		0.3s ease-in;

	&:hover {
		transform: scale(1.3);
	}
`
export const Agendaconteiner = styled.div`
	background-color: rgba(228, 204, 98, 0.534);
	border-radius: 20px;
	width: 1000px;
	height: 500px;
	background-image: url(${background});
	background-size: cover;
	background-repeat: no-repeat;
	padding-top: 20px;
`

export const MenuBtn = styled.div`
	display: flex;
	align-items: center;
	font-family: 'Raleway', sans-serif;
	font-weight: 600;
	color: #000000;
`
export const ConteinerAdicionar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin: 0;
`
export const Menutexto = styled.span`
	font-family: 'Raleway', sans-serif;
	font-weight: 600;
	color: #000000;
	background-color: rgba(240, 248, 255, 0.6);
	border-radius: 20px;
`
export const CirclePlus = styled(CirclePlusIcon)`
	border-radius: 50%;
	width: 30px;
	height: 30px;
`

export const Footer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-item:center;
		background-color: rgba(240, 248, 255, 1.0);
			margin-top: 10px;
`
export const Pfooter = styled.p`
font-family: 'Raleway', sans-serif;
	font-weight: 900;



`
