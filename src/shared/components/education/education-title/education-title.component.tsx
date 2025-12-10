import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const EducationTitle = () => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="flex items-center gap-3 mb-12 justify-center">
				<GraduationCap className="text-primary-500" size={32} />
				<h2 className="text-2xl font-bold text-white">Education</h2>
			</motion.div>
		</>
	);
};

export default EducationTitle;
