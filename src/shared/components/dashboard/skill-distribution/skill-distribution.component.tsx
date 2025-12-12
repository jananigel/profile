import { motion } from 'framer-motion';
import { Database } from 'lucide-react';

import { SKILL_CATEGORY } from '../../../../core/constants/skill-category.const';
import { SKILLS } from '../../../../core/constants/skills.const';

import type { SkillCategory } from '../../../../core/types/skill-category.type';

const SkillDistribution = () => {
	const skillsByCategory = SKILLS.reduce(
		(acc, skill) => {
			acc[skill.category] = (acc[skill.category] || 0) + 1;
			return acc;
		},
		{} as Record<SkillCategory, number>,
	);

	const categoryLabels = Object.keys(skillsByCategory) as SkillCategory[];
	const categoryShortNames: Record<string, string> = {
		[SKILL_CATEGORY.frameWork]: 'Frameworks',
		[SKILL_CATEGORY.engineering]: 'DevOps',
		[SKILL_CATEGORY.performance]: 'Performance',
		[SKILL_CATEGORY.backendAndOthers]: 'Backend',
		[SKILL_CATEGORY.languages]: 'Core',
	};

	const maxSkillCount = Math.max(...Object.values(skillsByCategory));
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6 }}
				className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col">
				<h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
					<Database size={18} className="text-primary-400" />
					Skill Distribution
				</h3>

				<div className="flex-1 flex flex-col justify-center space-y-5">
					{categoryLabels.map((cat, idx) => {
						const count = skillsByCategory[cat];
						const percentage = (count / maxSkillCount) * 100;

						return (
							<div key={cat}>
								<div className="flex justify-between text-sm mb-1">
									<span className="text-slate-300 font-medium">{categoryShortNames[cat]}</span>
									<span className="text-primary-400 font-mono text-xs">{count} Modules</span>
								</div>
								<div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
									<motion.div
										className="h-full bg-primary-500"
										initial={{ width: 0 }}
										animate={{ width: `${percentage}%` }}
										transition={{ duration: 0.8, delay: 0.7 + idx * 0.1 }}
									/>
								</div>
							</div>
						);
					})}
				</div>
			</motion.div>
		</>
	);
};

export default SkillDistribution;
