import type { LucideIcon } from 'lucide-react';

export interface StatInfo {
	titleKey: string;
	value: string | number;
	icon: LucideIcon;
	color: string;
	delay?: number;
}
