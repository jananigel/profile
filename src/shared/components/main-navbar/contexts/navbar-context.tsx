import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { NavbarContext } from '../providers/navbar.provider';

import type { BaseChildren } from '../../../../core/interfaces/base-children.interface';

export const NavbarProvider = ({ children }: BaseChildren) => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();
	const isDashboard = location.pathname === '/dashboard';

	return (
		<NavbarContext.Provider value={{ isOpen, setIsOpen, isDashboard }}>
			{children}
		</NavbarContext.Provider>
	);
};
