import { Home, LayoutDashboard, Menu, Terminal, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { NavbarProvider } from './contexts/navbar-context';
import DesktopMenu from './desktop-menu/desktop-menu';
import Logo from './logo/logo';
import MobileMenu from './mobile-menu/mobile-menu';
import MobileMenuPanel from './mobile-menu-panel/mobile-menu-panel';

import type { KeyboardEvent } from 'react';

const MainNavbar = () => {
	return (
		<NavbarProvider>
			<nav className={`fixed w-full z-50 transition-all duration-300 bg-transparent pt-5 pb-2`}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-14">
						{/* Logo */}
						<Logo></Logo>
						{/* Desktop Menu */}
						<DesktopMenu></DesktopMenu>
						{/* Mobile Menu Button */}
						<MobileMenu></MobileMenu>
					</div>
				</div>

				{/* Mobile Menu Panel */}
				<MobileMenuPanel></MobileMenuPanel>
			</nav>
		</NavbarProvider>
	);
};

export default MainNavbar;
