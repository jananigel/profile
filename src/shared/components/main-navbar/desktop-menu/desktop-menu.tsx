import { motion } from 'framer-motion';
import { Home, LayoutDashboard } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { MAIN_NAVS } from '../../../../core/constants/main-navs.const';
import LanguageSelector from '../../language-selector/language-selector.component';

const DesktopMenu = () => {
	const { t } = useTranslation('common');
	const navigate = useNavigate();
	const location = useLocation();
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
		<div className="hidden md:block items-center gap-4">
			<div className="flex items-center space-x-6">
				{!isDashboard ? (
					<>
						{MAIN_NAVS.map((link) => (
							<button
								key={link.name}
								onClick={() => handleNavClick(link.href)}
								className="relative text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors group">
								{t(link.name)}
								<span className="absolute bottom-1 left-3 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-[calc(100%-24px)]" />
							</button>
						))}
						<motion.button
							onClick={() => navigate('/dashboard')}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-primary-400 px-4 py-2 rounded-md text-sm font-bold transition-all border border-slate-700 hover:border-primary-500/50">
							<LayoutDashboard size={16} />
							{t('navbar_dashboard')}
						</motion.button>
					</>
				) : (
					<motion.button
						onClick={() => navigate('/')}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-md text-sm font-bold transition-all shadow-lg shadow-primary-500/20">
						<Home size={16} />
						{t('navbar_backToHome')}
					</motion.button>
				)}
				<LanguageSelector></LanguageSelector>
			</div>
		</div>
	);
};

export default DesktopMenu;
