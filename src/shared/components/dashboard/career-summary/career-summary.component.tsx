import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

import { CAREER } from '../../../../core/constants';

const CareerSummary = () => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.45 }}
				className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-xl p-6 relative">
				<div className="flex items-center gap-2 mb-4">
					<Briefcase className="text-primary-500" size={20} />
					<h3 className="text-lg font-bold text-white">Career Summary</h3>
				</div>
				<div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800/50">
					<p className="text-slate-300 leading-relaxed">
						Senior Frontend Engineer with over 10 years of experience specializing in
						high-performance web applications. Expert in migrating legacy systems (Vue to Angular),
						establishing CI/CD pipelines, and integrating IoT devices with web technologies. Proven
						track record of optimizing system architecture, reducing code complexity by 70%, and
						leading frontend teams.
					</p>
				</div>

				{/* Decorative tech pills */}
				<div className="mt-4 flex flex-wrap gap-2 opacity-60">
					{CAREER.map((tag) => (
						<span
							key={tag}
							className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
							{tag}
						</span>
					))}
				</div>
			</motion.div>
		</>
	);
};

export default CareerSummary;
