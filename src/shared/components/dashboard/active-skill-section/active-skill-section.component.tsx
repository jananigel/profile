import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

import { SKILLS } from '../../../../core/constants/skills.const';

const ActiveSkillSection = () => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.7 }}
				className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
				<h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
					<Trophy size={18} className="text-primary-400" />
					Active Tech Stack
				</h3>
				<div className="flex flex-wrap gap-2">
					{SKILLS.filter((s) => s.highlight).map((skill, i) => (
						<motion.span
							key={skill.name}
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.8 + i * 0.05 }}
							className="px-3 py-1 bg-slate-800/80 border border-slate-700 text-slate-300 text-sm rounded font-mono hover:bg-primary-900/20 hover:border-primary-500/50 hover:text-primary-400 transition-colors cursor-crosshair">
							{skill.name}
						</motion.span>
					))}
				</div>
			</motion.div>
		</>
	);
};

export default ActiveSkillSection;
