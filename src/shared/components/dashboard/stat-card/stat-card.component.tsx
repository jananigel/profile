import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import type { StatInfo } from '../../../../core/interfaces';

const StatCard = ({ titleKey, value, icon: Icon, color, delay }: StatInfo) => {
	const { t } = useTranslation('common');
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ delay }}
			className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl relative overflow-hidden group hover:border-slate-700 transition-colors">
			<div
				className={`absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity ${color}`}>
				<Icon size={64} />
			</div>
			<div className="relative z-10">
				<div className="flex items-center gap-2 mb-2 text-slate-400">
					<Icon size={18} />
					<span className="text-xs font-semibold uppercase tracking-wider">
						{t(titleKey)}
					</span>
				</div>
				<div className="text-3xl font-mono font-bold text-white">{value}</div>
			</div>
		</motion.div>
	);
};

export default StatCard;
