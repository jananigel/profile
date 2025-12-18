import { Outlet, useLocation } from 'react-router-dom';

import MainNavbar from '../../components/main-navbar/main-navbar';

const MainLayout = () => {
	const location = useLocation();
	const isDashboard = location.pathname === '/dashboard';

	return (
		<div className="min-h-screen bg-slate-950 selection:bg-primary-500/30 font-sans">
			<MainNavbar></MainNavbar>
			<main>
				<Outlet></Outlet>
			</main>
			{!isDashboard && <footer>Footer</footer>}
		</div>
	);
};

export default MainLayout;
