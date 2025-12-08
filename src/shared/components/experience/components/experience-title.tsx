import { motion } from 'framer-motion';

const ExperienceTitle = () => {
	return (
		<>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Professional Experience
					</h2>
					<div className="h-1 w-20 bg-primary-500 mx-auto rounded-full" />
				</motion.div>
			</div>
		</>
	);
};

export default ExperienceTitle;
