import { useContext } from 'react';

import { CarrerTimelineContext } from '../providers/carrer-timeline.provider';

export const useCarrerTimeline = () => {
	const ctx = useContext(CarrerTimelineContext);
	if (!ctx) {
		throw new Error('useContext must be used inside <CarrerTimelineProvider>');
	}

	return ctx;
};
