import { motion } from 'framer-motion';
import { Home, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { MAIN_NAVS } from '../../../../core/constants/main-navs.const';
import { useNavbar } from '../hooks/use-navbar.hook';

const MobileMenuPanel = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { isOpen, setIsOpen } = useNavbar();
	const isDashboard = location.pathname === '/dashboard';

	const handleNavClick = (href: string) => {
		if (isDashboard) {
			navigate('/');
			// Allow time for navigation before scrolling
			setTimeout(() => {
				const element = document.querySelector(href);
				element?.scrollIntoView({ behavior: 'smooth' });
			}, 100);
		} else {
			const element = document.querySelector(href);
			element?.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<motion.div
			initial={false}
			animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
			className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden">
			<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
				{!isDashboard ? (
					<>
						{MAIN_NAVS.map((link) => (
							<button
								key={link.name}
								onClick={() => handleNavClick(link.href)}
								className="w-full text-left text-slate-300 hover:text-white hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium">
								{link.name}
							</button>
						))}
						<button
							onClick={() => {
								setIsOpen(false);
								navigate('/dashboard');
							}}
							className="w-full text-left text-primary-400 hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-bold flex items-center gap-2">
							<LayoutDashboard size={18} />
							Dashboard
						</button>
					</>
				) : (
					<button
						onClick={() => {
							setIsOpen(false);
							navigate('/');
						}}
						className="w-full text-left text-white bg-primary-600 hover:bg-primary-500 block px-3 py-2 rounded-md text-base font-bold flex items-center gap-2">
						<Home size={18} />
						Back to Home
					</button>
				)}
			</div>
		</motion.div>
	);
};

export default MobileMenuPanel;
