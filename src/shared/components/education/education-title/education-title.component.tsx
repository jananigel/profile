import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const EducationTitle = () => {
	const { t } = useTranslation('common');
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="flex items-center gap-3 mb-12 justify-center">
				<GraduationCap className="text-primary-500" size={32} />
				<h2 className="text-2xl font-bold text-white">{t('landing_education_title')}</h2>
			</motion.div>
		</>
	);
};

export default EducationTitle;
