import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import ListaNomesContatos from './components/listadecontatos/listaContatos'
import DetalhesContato from './components/detalhes/Detalhes'
import GlobalStyle from './styles/globalstyle'
import Formulario1 from './components/form/formulario'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<Provider store={store}>
			<GlobalStyle />

			<BrowserRouter>
				<Routes>
					<Route path="/elemento" element={<ListaNomesContatos />} />
					<Route path="/detalhes/:id" element={<DetalhesContato />} />
					<Route path="/adicionar" element={<Formulario1 />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	)
}

export default App
