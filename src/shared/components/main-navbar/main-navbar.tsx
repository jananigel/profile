import { Home, LayoutDashboard, Menu, Terminal, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Logo from './logo/logo';

import type { KeyboardEvent } from 'react';

const MainNavbar = () => {
	return (
		<nav className={`fixed w-full z-50 transition-all duration-300 bg-transparent pt-5 pb-2`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Logo */}
				<Logo></Logo>
			</div>
		</nav>
	);
};

export default MainNavbar;
