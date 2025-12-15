import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { BASE_USER_INFO } from '../../../../core/constants';

const ProjectTitle = () => {
	const { t } = useTranslation('common');
	return (
		<>
			<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}>
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
						{t('landing_projects_title')}
					</h2>
					<p className="text-slate-400">{t('landing_projects_subtitle')}</p>
				</motion.div>
				<motion.a
					href={BASE_USER_INFO.github}
					target="_blank"
					rel="noreferrer"
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					whileHover={{ scale: 1.05, color: '#38bdf8' }}
					className="flex items-center text-primary-400 hover:text-primary-300 transition-colors gap-2 text-sm font-semibold">
					{t('landing_projects_github_link')} <ExternalLink size={16} />
				</motion.a>
			</div>
		</>
	);
};

export default ProjectTitle;
