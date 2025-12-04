import { createContext } from 'react';

interface NavbarContextValue {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isDashboard: boolean;
}

export const NavbarContext = createContext<NavbarContextValue | null>(null);
