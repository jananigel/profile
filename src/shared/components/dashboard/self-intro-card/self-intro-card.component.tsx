import { motion } from 'framer-motion';
import { UserCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SelfIntroCard = () => {
	const { t } = useTranslation('common');
	return (
		<>
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.45 }}
				className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col items-center text-center relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent pointer-events-none" />
				<div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-4 border-2 border-primary-500 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
					<UserCircle size={48} className="text-slate-300" />
				</div>
				<h3 className="text-xl font-bold text-white mb-1">{t('dashboard_self_intro_title')}</h3>
				<p className="text-primary-400 text-sm font-mono mb-4">{t('dashboard_self_intro_subtitle')}</p>
				<p className="text-slate-400 text-sm leading-relaxed">{t('dashboard_self_intro_description')}</p>
			</motion.div>
		</>
	);
};

export default SelfIntroCard;
