import type { LucideIcon } from 'lucide-react';

export interface StatInfo {
	title: string;
	value: string | number;
	icon: LucideIcon;
	color: string;
	delay?: number;
}
