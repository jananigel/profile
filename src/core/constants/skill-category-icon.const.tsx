import { Code2, Database, Languages, Server, Terminal } from 'lucide-react';

import { SKILL_CATEGORY } from './skill-category.const';

export const CATEGORY_ICONS = {
	[SKILL_CATEGORY.frameWork]: Code2,
	[SKILL_CATEGORY.engineering]: Server,
	[SKILL_CATEGORY.performance]: Terminal,
	[SKILL_CATEGORY.backendAndOthers]: Database,
	[SKILL_CATEGORY.languages]: Languages,
} as const;
