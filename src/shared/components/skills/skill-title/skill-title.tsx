import { motion } from 'framer-motion';

const SkillTitle = () => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="mb-16">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Proficiency</h2>
				<p className="text-slate-400 max-w-2xl">
					A comprehensive toolset developed over a decade of engineering, focusing on scalability,
					performance, and user experience.
				</p>
			</motion.div>
		</>
	);
};

export default SkillTitle;
