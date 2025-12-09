import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

import { NavbarProvider } from './contexts/navbar-context';
import DesktopMenu from './desktop-menu/desktop-menu';
import Logo from './logo/logo';
import MobileMenu from './mobile-menu/mobile-menu';
import MobileMenuPanel from './mobile-menu-panel/mobile-menu-panel';

const MainNavbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const isDashboard = location.pathname === '/dashboard';

	const scrollYProgress = useMotionValue(0);
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setScrolled(currentScrollY > 50);

			const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
			if (totalHeight > 0) {
				const progress = currentScrollY / totalHeight;
				scrollYProgress.set(progress);
			} else {
				scrollYProgress.set(0);
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	}, [scrollYProgress]);

	return (
		<NavbarProvider>
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5 }}
				className={`fixed w-full z-50 transition-all duration-300 ${
					scrolled || isDashboard
						? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800'
						: 'bg-transparent pt-5 pb-2'
				}`}>
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

				{/* Progress Bar (Only show on Landing Page) */}
				{!isDashboard && (
					<motion.div
						className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-500 origin-left"
						style={{ scaleX }}
					/>
				)}
			</motion.nav>
		</NavbarProvider>
	);
};

export default MainNavbar;
