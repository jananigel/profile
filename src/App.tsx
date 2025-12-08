import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import LandingPage from './pages/landing/landing.page';
import MainLayout from './shared/layouts/main-layout/MainLayout';

function App() {
	return (
		<>
			<HashRouter>
				<MainLayout>
					<Routes>
						<Route path="/" element={<LandingPage />}></Route>
					</Routes>
				</MainLayout>
			</HashRouter>
		</>
	);
}

export default App;
