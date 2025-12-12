import { SKILL_CATEGORY } from './skill-category.const';

import type { Skill } from '../interfaces/skill.interface';

export const SKILLS: Skill[] = [
	// Frameworks
	{ name: 'Angular (6+ Years)', category: SKILL_CATEGORY.frameWork, highlight: true },
	{ name: 'Vue 2/3', category: SKILL_CATEGORY.frameWork, highlight: true },
	{ name: 'React', category: SKILL_CATEGORY.frameWork, highlight: true },
	{ name: 'TypeScript', category: SKILL_CATEGORY.frameWork, highlight: true },
	{ name: 'Tailwind CSS', category: SKILL_CATEGORY.frameWork, highlight: true },
	{ name: 'RxJS', category: SKILL_CATEGORY.frameWork, highlight: true },
	{ name: 'Ionic', category: SKILL_CATEGORY.frameWork },

	// Engineering
	{ name: 'Docker / Compose', category: SKILL_CATEGORY.engineering, highlight: true },
	{ name: 'Jenkins CI/CD', category: SKILL_CATEGORY.engineering },
	{ name: 'GitLab CI', category: SKILL_CATEGORY.engineering },
	{ name: 'Design Systems', category: SKILL_CATEGORY.engineering },
	{ name: 'Nginx Cache', category: SKILL_CATEGORY.engineering },
	{ name: 'Webpack / Gulp', category: SKILL_CATEGORY.engineering },

	// Performance
	{ name: 'Web Worker', category: SKILL_CATEGORY.performance },
	{ name: 'IndexedDB', category: SKILL_CATEGORY.performance },
	{ name: 'WebSocket / SSE', category: SKILL_CATEGORY.performance, highlight: true },
	{ name: 'Infinite Scroll', category: SKILL_CATEGORY.performance },

	// Backend & Others
	{ name: 'NodeJS', category: SKILL_CATEGORY.backendAndOthers },
	{ name: 'C# / Unity', category: SKILL_CATEGORY.backendAndOthers },
	{ name: 'IOT Interface', category: SKILL_CATEGORY.backendAndOthers },
	{ name: 'Map Visualization', category: SKILL_CATEGORY.backendAndOthers },

	// Languages
	{ name: 'Mandarin (Chinese)', category: SKILL_CATEGORY.languages },
	{ name: 'English', category: SKILL_CATEGORY.languages },
] as const;
