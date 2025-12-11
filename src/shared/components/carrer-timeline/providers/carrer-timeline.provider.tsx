import { createContext } from 'react';

interface CarrerTimeline {
	startYear: number;
	currentYear: number;
	totalDurationYears: number;
}

export const CarrerTimelineContext = createContext<CarrerTimeline | null>(null);
