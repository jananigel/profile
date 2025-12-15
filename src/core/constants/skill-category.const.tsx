export const SKILL_CATEGORY = {
	frameWork: 'Frontend Frameworks',
	engineering: 'Engineering & DevOps',
	performance: 'Performance & Data',
	backendAndOthers: 'Backend & Others',
	languages: 'Languages',
} as const;

export const SKILL_CATEGORY_LABEL_KEYS = {
	[SKILL_CATEGORY.frameWork]: 'landing_skills_category_framework',
	[SKILL_CATEGORY.engineering]: 'landing_skills_category_engineering',
	[SKILL_CATEGORY.performance]: 'landing_skills_category_performance',
	[SKILL_CATEGORY.backendAndOthers]: 'landing_skills_category_backend',
	[SKILL_CATEGORY.languages]: 'landing_skills_category_languages',
} as const;
