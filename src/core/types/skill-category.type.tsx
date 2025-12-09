import type { SKILL_CATEGORY } from '../constants/skill-category.const';

export type SkillCategory = (typeof SKILL_CATEGORY)[keyof typeof SKILL_CATEGORY];
