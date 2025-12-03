import { useLocation } from 'react-router-dom';

import type React from 'react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const location = useLocation();
	const isDashboard = location.pathname === '/dashboard';

	return (
		<div className="min-h-screen bg-slate-950 selection:bg-primary-500/30 font-sans">
			<header>Header</header>
			<main>{children}</main>
			{!isDashboard && <footer>Footer</footer>}
		</div>
	);
};

export default MainLayout;
