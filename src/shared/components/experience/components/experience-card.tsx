import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { JOP_EXPERIENCE } from '../../../../core/constants/job-experiences.const';

const ExperienceCard = () => {
	const { t } = useTranslation('common');
	return (
		<>
			{JOP_EXPERIENCE.map((job, index) => (
				<motion.div
					key={job.id}
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.5, delay: index * 0.1 }}
					className="relative pl-0 md:pl-24 group">
					{/* Timeline Dot */}
					<div className="hidden md:flex absolute left-0 top-0 w-16 h-16 items-center justify-center">
						<motion.div
							initial={{ scale: 0 }}
							whileInView={{ scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
							className="w-4 h-4 bg-slate-800 border-2 border-primary-500 rounded-full z-10 group-hover:bg-primary-500 transition-colors shadow-[0_0_10px_rgba(14,165,233,0.3)]"
						/>
					</div>

					<div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 md:p-8 hover:border-primary-500/30 transition-all hover:bg-slate-800/60 hover:shadow-lg hover:shadow-primary-900/5">
						<div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
							<div>
								<h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
									{t(`landing_experience_${job.id}_role`, { defaultValue: job.role })}
									<span className="text-primary-400 text-lg font-normal">
										@ {t(`landing_experience_${job.id}_company`, { defaultValue: job.company })}
									</span>
								</h3>
							</div>
							<div className="flex items-center text-slate-400 text-sm bg-slate-900/50 px-3 py-1 rounded-full border border-slate-800 w-fit">
								<Calendar size={14} className="mr-2" />
								{t(`landing_experience_${job.id}_period`, { defaultValue: job.period })}
							</div>
						</div>

						<div className="space-y-3 mb-6">
							{job.description.map((desc, idx) => (
								<div key={idx} className="flex items-start text-slate-300">
									<span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
									<p className="leading-relaxed">
										{t(`landing_experience_${job.id}_desc_${idx + 1}`, { defaultValue: desc })}
									</p>
								</div>
							))}
						</div>

						<div className="flex flex-wrap gap-2">
							{job.techStack.map((tech) => (
								<motion.span
									key={tech}
									whileHover={{ scale: 1.05, backgroundColor: 'rgba(15, 23, 42, 0.8)' }}
									className="px-3 py-1 text-xs font-medium rounded-full bg-slate-900 text-primary-300 border border-slate-700 cursor-default">
									{tech}
								</motion.span>
							))}
						</div>
					</div>
				</motion.div>
			))}
		</>
	);
};

export default ExperienceCard;
