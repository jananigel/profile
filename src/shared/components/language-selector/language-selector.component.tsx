import { AnimatePresence, motion } from 'framer-motion';
import { Check, Languages } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LANGUAGES } from '../../../core/constants';

const LanguageSelector = () => {
	const langMenuRef = useRef<HTMLDivElement>(null);
	const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
	const { t, i18n } = useTranslation();
	const changeLanguage = (lang: string) => {
		i18n.changeLanguage(lang);
		setIsLangMenuOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
				setIsLangMenuOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<>
			<div className="relative" ref={langMenuRef}>
				<button
					onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
					className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors">
					<Languages size={20} />
				</button>

				<AnimatePresence>
					{isLangMenuOpen && (
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 10 }}
							className="absolute right-0 mt-2 w-40 bg-slate-900 border border-slate-800 rounded-md shadow-xl overflow-hidden ring-1 ring-black ring-opacity-5 focus:outline-none">
							<div className="py-1">
								{LANGUAGES.map((lang) => (
									<button
										key={lang.code}
										onClick={() => changeLanguage(lang.code)}
										className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white flex items-center justify-between">
										{t(lang.label)}
										{i18n.language.startsWith(lang.code) && (
											<Check size={14} className="text-primary-500" />
										)}
									</button>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export default LanguageSelector;
