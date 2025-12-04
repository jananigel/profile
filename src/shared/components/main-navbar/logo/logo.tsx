import { Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import type { KeyboardEvent } from 'react';

const Logo = () => {
	const navigate = useNavigate();

	const goTop = () => {
		navigate('/');
		window.scrollTo(0, 0);
	};

	const keyConfirmHandler = (e: KeyboardEvent) => {
		if (e.key === 'Enter' || e.key === ' ') {
			goTop();
		}
	};
	return (
		<div
			className="flex-shrink-0 cursor-pointer"
			onClick={goTop}
			role="button"
			tabIndex={0}
			onKeyDown={keyConfirmHandler}>
			<div className="flex items-center gap-2">
				<div className="bg-primary-500 p-1.5 rounded-lg transition-transform hover:rotate-[20deg]">
					<Terminal size={20} className="text-white" />
				</div>
				<span className="text-xl font-bold tracking-tight text-slate-100">
					Kyle <span className="text-primary-400">Portfolio</span>
				</span>
			</div>
		</div>
	);
};

export default Logo;
