import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const stackTags = [
	'dashboard_title_chip_react',
	'dashboard_title_chip_angular',
	'dashboard_title_chip_vue',
];

const DashboardTitle = () => {
	const { t } = useTranslation('common');
	return (
		<>
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
				<div>
					<motion.h1
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
						<Activity className="text-primary-500" />
						{t('dashboard_title_heading')}
					</motion.h1>
					<p className="text-slate-500 font-mono text-sm mt-1">
						{t('dashboard_title_status_label')}: 
						<span className="text-emerald-500 animate-pulse">{t('dashboard_title_status_online')}</span>
					</p>
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="flex gap-2 font-mono text-xs text-slate-500">
					{stackTags.map((tag) => (
						<span key={tag} className="px-2 py-1 bg-slate-900 rounded border border-slate-800">
							{t(tag)}
						</span>
					))}
				</motion.div>
			</div>
		</>
	);
};

export default DashboardTitle;
