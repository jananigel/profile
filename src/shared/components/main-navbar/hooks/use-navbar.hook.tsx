import { useContext } from 'react';

import { NavbarContext } from '../providers/navbar.provider';

export const useNavbar = () => {
	const ctx = useContext(NavbarContext);
	if (!ctx) {
		throw new Error('useNavbar must be used inside <NavbarProvider>');
	}

	return ctx;
};
