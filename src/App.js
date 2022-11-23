import React from 'react'
import Main from './components/Main'
import Header from './components/Header'
import NoRecordFound from './components/NoRecordFound'
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<React.Fragment>
			<div className="flex flex-col justify-center items-center">
				<Header />
				<main className="w-11/12">
					<Routes>
						<Route path="/visa-requirements/:uId" element={<Main />} />
						<Route path="*" element={<NoRecordFound />} />
					</Routes>
				</main>
			</div>
		</React.Fragment>
	)
}

export default App
