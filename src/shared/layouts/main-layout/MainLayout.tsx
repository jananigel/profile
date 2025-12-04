import { useLocation } from 'react-router-dom';

import type { BaseChildren } from '../../../core/interfaces/base-children.interface';

const MainLayout = ({ children }: BaseChildren) => {
	const location = useLocation();
	const isDashboard = location.pathname === '/dashboard';

	return (
		<div className="min-h-screen bg-slate-950 selection:bg-primary-500/30 font-sans">
			<main>{children}</main>
			{!isDashboard && <footer>Footer</footer>}
		</div>
	);
};

export default MainLayout;
