import { motion } from 'framer-motion';

import { CATEGORY_ICONS } from '../../../../core/constants/skill-category-icon.const';

import type { Skill } from '../../../../core/interfaces/skill.interface';

type Skills = { skills: Skill[] };

const SkillCard = ({ skills }: Skills) => {
	const Icon = CATEGORY_ICONS[skills[0].category];

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	return (
		<>
			<motion.div
				variants={item}
				whileHover={{ y: -5, borderColor: 'rgba(14, 165, 233, 0.5)' }}
				className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 transition-colors duration-300">
				<div className="flex items-center gap-3 mb-6">
					<div className="p-2 bg-slate-800 rounded-lg text-primary-400">
						<Icon size={24} />
					</div>
					<h3 className="text-lg font-bold text-white">{skills[0].category}</h3>
				</div>

				<div className="flex flex-wrap gap-2">
					{skills.map((skill: Skill) => {
						return (
							<motion.div
								key={skill.name}
								whileHover={{ scale: 1.05 }}
								className={`
                        px-3 py-1.5 rounded-md text-sm border transition-all cursor-default
                        ${
													skill.highlight
														? 'bg-primary-950/30 border-primary-500/30 text-primary-300'
														: 'bg-slate-800/50 border-slate-700 text-slate-300'
												}
                      `}>
								{skill.name}
							</motion.div>
						);
					})}
				</div>
			</motion.div>
		</>
	);
};

export default SkillCard;
