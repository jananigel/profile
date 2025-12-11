import { motion } from 'framer-motion';

import { useCarrerTimeline } from '../hooks/carrer-timeline.hook';

import type { JobExperience } from '../../../../core/interfaces/job-experiences.interface';

interface TimelineData {
	job: JobExperience;
	index: number;
}

const CarrerItem = ({ job, index }: TimelineData) => {
	const { startYear, totalDurationYears } = useCarrerTimeline();

	const parseDate = (dateStr: string) => {
		if (dateStr.includes('Present') || dateStr.includes('Now')) {
			return new Date().getFullYear();
		}

		const [year] = dateStr.split('.');
		return parseInt(year);
	};

	const getJobStyle = (period: string) => {
		const [start, end] = period.split(' - ');
		const startY = parseDate(start);
		const endY = parseDate(end);

		const left = ((startY - startYear) / totalDurationYears) * 100;
		const width =
			((endY - startY + (end.includes('Present') ? 1 : 0.5)) / totalDurationYears) * 100;

		return { left: `${Math.max(0, left)}%`, width: `${Math.max(5, width)}%` };
	};

	const jobStyle = getJobStyle(job.period);

	return (
		<>
			<div key={job.id} className="relative z-10">
				<div className="flex justify-between text-xs text-slate-400 mb-1 px-1">
					<span>{job.role}</span>
					<span>{job.company}</span>
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
