import type { SkillCategory } from '../types/skill-category.type';

export interface Skill {
	name: string;
	category: SkillCategory;
	highlight?: boolean;
}
