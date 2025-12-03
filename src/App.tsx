import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import MainLayout from './shared/layouts/main-layout/MainLayout';

function App() {
	return (
		<>
			<HashRouter>
				<MainLayout>
					<div>Main</div>
				</MainLayout>
			</HashRouter>
		</>
	);
}

export default App;
