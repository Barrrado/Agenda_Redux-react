import styled from 'styled-components'
import { ChevronsLeft } from 'lucide-react'

export const Btnsalvar = styled.button`
	background-color: black;
	color: aliceblue;
	border-radius: 10px;
	width: 34px;
	height: 34px;
	cursor: pointer;
	margin-left: 5px;
	transition: all 0.4s ease-in;

	&:hover {
		background-color: rgb(54, 192, 0);
		color: rgb(0, 0, 0);
	}
`

export const Btnvoltar = styled.button`
	background-color: black;
	color: aliceblue;
	border-radius: 10px;
	width: 34px;
	height: 34px;
	cursor: pointer;
	margin-left: 5px;
`
export const Btneditar = styled.button`
	background-color: black;
	color: aliceblue;
	border-radius: 10px;
	width: 34px;
	height: 34px;
	cursor: pointer;
	margin-left: 5px;
	transition: all 0.4s ease-in;

	&:hover {
		background-color: rgb(0, 0, 185);
	}
`

export const Detalhesconteiner = styled.div`
	display: flex;
	background-color: bisque;
	border-radius: 20px;
	padding-top: 20px;
	padding-bottom: 20px;
	padding-right: 20px;
	width: 800px;
	height: 30px;
`

export const Detalhesp = styled.p`
	font-family: 'Raleway', sans-serif;
	font-weight: 400;
	font-size: 18px;
	pointer-events: none;
`
export const Seta = styled(ChevronsLeft)`
	transition: all 0.4s ease-in;

	&:hover {
		transform: scale(1.5);
	}
`

export const ConteinerEditar = styled.div`
	display: flex;
	width: 900px;
`
