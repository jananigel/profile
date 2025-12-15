import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { JOP_EXPERIENCE } from '../../../../core/constants/job-experiences.const';
import CarrerItem from '../carrer-item/carrer-item.component';
import { useCarrerTimeline } from '../hooks/carrer-timeline.hook';

const CarrerSection = () => {
	const { currentYear, startYear } = useCarrerTimeline();
	const { t } = useTranslation('common');

	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5 }}
				className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-xl p-6">
				<div className="flex items-center justify-between mb-6">
					<h3 className="text-lg font-bold text-white flex items-center gap-2">
						<Target size={18} className="text-primary-400" />
						{t('dashboard_career_timeline_title')}
					</h3>
					<div className="text-xs font-mono text-slate-500">
						{startYear} - {currentYear}
					</div>
				</div>

				<div className="relative space-y-6">
					{/* Grid Lines */}
					<div className="absolute inset-0 flex justify-between px-2 pointer-events-none opacity-20">
					{Array(currentYear - startYear + 1)
						.fill('')
						.map((_, i) => (
								<div
									key={i}
									className="h-full w-px bg-slate-500 border-l border-dashed border-slate-500"
								/>
							))}
					</div>

					{JOP_EXPERIENCE.map((job, idx) => (
						<CarrerItem key={job.id} job={job} index={idx}></CarrerItem>
					))}

					{/* Timeline Axis */}
					<div className="flex justify-between text-xs font-mono text-slate-600 pt-2 border-t border-slate-800 mt-4">
						<span>{startYear}</span>
						<span>2015</span>
						<span>2018</span>
						<span>2021</span>
						<span>{t('dashboard_career_timeline_now')}</span>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default CarrerSection;
