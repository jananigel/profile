import { Clock, Code2, Layers, Zap } from 'lucide-react';

import { PROJECTS } from './projects.const';
import { SKILLS } from './skills.const';

import type { StatInfo } from '../interfaces';

export const STAT_INFO: StatInfo[] = [
	{
		title: 'Years Experience',
		value: new Date().getFullYear() - 2012,
		icon: Clock,
		color: 'text-blue-500',
	},
	{
		title: 'Total Projects',
		value: PROJECTS.length + 10,
		icon: Layers,
		color: 'text-purple-500',
	},
	{
		title: 'Skill Nodes',
		value: SKILLS.length,
		icon: Code2,
		color: 'text-emerald-500',
	},
	{
		title: 'System Efficiency',
		value: '98%',
		icon: Zap,
		color: 'text-yellow-500',
	},
];
