import { useLocation } from 'react-router-dom';

import type { ReactNode } from 'react';

interface MainLayoutProps {
	children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
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
