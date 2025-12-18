import { RouterProvider } from 'react-router-dom';

import './App.scss';
import './core/services/i18n.service';
import { router } from './App.route';

function App() {
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;
