import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SkillTitle = () => {
	const { t } = useTranslation('common');
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="mb-16">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
					{t('landing_skills_title')}
				</h2>
				<p className="text-slate-400 max-w-2xl">{t('landing_skills_subtitle')}</p>
			</motion.div>
		</>
	);
};

export default SkillTitle;
