import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { useCarrerTimeline } from '../hooks/carrer-timeline.hook';

import type { JobExperience } from '../../../../core/interfaces/job-experiences.interface';

interface TimelineData {
	job: JobExperience;
	index: number;
}

const CarrerItem = ({ job, index }: TimelineData) => {
	const { startYear, totalDurationYears, currentYear } = useCarrerTimeline();
	const { t } = useTranslation('common');

	const toYearValue = (year: number, month = 1) => year + (month - 1) / 12;
	const getJobStyle = () => {
		const startValue = toYearValue(job.startYear, job.startMonth ?? 1);
		const effectiveEndValue = job.endYear
			? toYearValue(job.endYear, job.endMonth ?? 12)
			: toYearValue(currentYear, new Date().getMonth() + 1);
		const paddedEndValue = effectiveEndValue + (job.endYear ? 0.5 : 1);
		const left = ((startValue - startYear) / totalDurationYears) * 100;
		const width = ((paddedEndValue - startValue) / totalDurationYears) * 100;
		return { left: `${Math.max(0, left)}%`, width: `${Math.max(5, width)}%` };
	};

	const jobStyle = getJobStyle();
	const jobKey = `landing_experience_${job.id}`;

	return (
		<>
			<div key={job.id} className="relative z-10">
				<div className="flex justify-between text-xs text-slate-400 mb-1 px-1">
					<span>{t(`${jobKey}_role`, { defaultValue: job.role })}</span>
					<span>{t(`${jobKey}_company`, { defaultValue: job.company })}</span>
				</div>
				<div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden relative">
					<motion.div
						className="absolute top-0 bottom-0 bg-gradient-to-r from-primary-600 to-indigo-600 rounded-full"
						style={jobStyle}
						initial={{ width: 0 }}
						animate={{ width: jobStyle.width }}
						transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
					/>
				</div>
			</div>
		</>
	);
};

export default CarrerItem;
