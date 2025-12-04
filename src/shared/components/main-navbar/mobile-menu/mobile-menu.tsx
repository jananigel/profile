import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="-mr-2 flex md:hidden">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none">
				{isOpen ? <X size={24} /> : <Menu size={24} />}
			</button>
		</div>
	);
};

export default MobileMenu;
