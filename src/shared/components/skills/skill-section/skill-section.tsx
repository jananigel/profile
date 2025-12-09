import { motion } from 'framer-motion';

import { SKILLS } from '../../../../core/constants/skills.const';
import SkillCard from '../skill-card/skill-card';
import SkillTitle from '../skill-title/skill-title';

import type { SkillCategory } from '../../../../core/types/skill-category.type';

const SkillSection = () => {
	const skillsByCategory = SKILLS.reduce(
		(acc, skill) => {
			if (!acc[skill.category]) {
				acc[skill.category] = [];
			}
			acc[skill.category].push(skill);
			return acc;
		},
		{} as Record<SkillCategory, typeof SKILLS>,
	);

	const categories = Object.keys(skillsByCategory) as SkillCategory[];

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	return (
		<>
			<section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
				<motion.div
					animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
					transition={{ duration: 10, repeat: Infinity }}
					className="absolute right-0 top-1/4 w-96 h-96 bg-primary-900/10 rounded-full blur-[100px] pointer-events-none"
				/>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<SkillTitle></SkillTitle>
					<motion.div
						variants={container}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: '-50px' }}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{categories.map((category) => {
							return <SkillCard key={category} skills={skillsByCategory[category]}></SkillCard>;
						})}
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default SkillSection;
