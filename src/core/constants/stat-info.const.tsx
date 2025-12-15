import { Clock, Code2, Layers, Zap } from 'lucide-react';

import { PROJECTS } from './projects.const';
import { SKILLS } from './skills.const';

import type { StatInfo } from '../interfaces';

export const STAT_INFO: StatInfo[] = [
	{
		titleKey: 'dashboard_stat_years_experience',
		value: new Date().getFullYear() - 2012,
		icon: Clock,
		color: 'text-blue-500',
	},
	{
		titleKey: 'dashboard_stat_total_projects',
		value: PROJECTS.length + 10,
		icon: Layers,
		color: 'text-purple-500',
	},
	{
		titleKey: 'dashboard_stat_skill_nodes',
		value: SKILLS.length,
		icon: Code2,
		color: 'text-emerald-500',
	},
	{
		titleKey: 'dashboard_stat_system_efficiency',
		value: '98%',
		icon: Zap,
		color: 'text-yellow-500',
	},
];
