import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ExperienceTitle = () => {
	const { t } = useTranslation('common');
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="mb-16 text-center">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
					{t('landing_experience_title')}
				</h2>
				<div className="h-1 w-20 bg-primary-500 mx-auto rounded-full" />
			</motion.div>
		</>
	);
};

export default ExperienceTitle;
