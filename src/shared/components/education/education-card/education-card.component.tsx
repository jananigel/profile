import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import type { Education } from '../../../../core/interfaces';

interface EducationData {
	education: Education;
	index: number;
}

const EducationCard = ({ education, index }: EducationData) => {
	const { t } = useTranslation('common');
	const baseKey = `landing_education_${education.id}`;
	return (
		<>
			<motion.div
				initial={{ opacity: 0, scale: 0.95, y: 20 }}
				whileInView={{ opacity: 1, scale: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: index * 0.1 }}
				whileHover={{ y: -5 }}
				className="group bg-slate-900/30 rounded-2xl p-8 border border-slate-800 text-center hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-900/10 flex flex-col h-full">
				<h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
					{t(`${baseKey}_school`, { defaultValue: education.school })}
				</h3>
				<div className="text-lg text-primary-400 font-medium mb-1">
					{t(`${baseKey}_degree`, { defaultValue: education.degree })}
				</div>
				<div className="text-slate-300 text-sm mb-4">
					{t(`${baseKey}_department`, { defaultValue: education.department })}
				</div>

				<div className="mt-auto">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 text-slate-400 text-xs font-mono mb-4 border border-slate-800">
						<Calendar size={12} />
						{t(`${baseKey}_period`, { defaultValue: education.period })}
					</div>
					<p className="text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 pt-4">
						{t(`${baseKey}_description`, { defaultValue: education.description })}
					</p>
				</div>
			</motion.div>
		</>
	);
};

export default EducationCard;
