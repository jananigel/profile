import { motion } from 'framer-motion';

import ExperienceCard from './components/experience-card';
import ExperienceTitle from './components/experience-title';

const Experience = () => {
	return (
		<>
			<section id="experience" className="py-24 bg-slate-900/50 relative overflow-hidden">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<ExperienceTitle></ExperienceTitle>
					<div className="relative space-y-12">
						<motion.div
							initial={{ height: 0 }}
							whileInView={{ height: '100%' }}
							viewport={{ once: true }}
							transition={{ duration: 1.5, ease: 'easeOut' }}
							className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-slate-800 origin-top"
						/>
						<ExperienceCard></ExperienceCard>
					</div>
				</div>
			</section>
		</>
	);
};

export default Experience;
