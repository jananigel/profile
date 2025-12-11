import { CarrerTimelineContext } from '../providers/carrer-timeline.provider';

import type { BaseChildren } from '../../../../core/interfaces/base-children.interface';

export const CarrerTimelineProvider = ({ children }: BaseChildren) => {
	const startYear = 2012;
	const currentYear = new Date().getFullYear();
	const totalDurationYears = currentYear - startYear + 1;

	return (
		<CarrerTimelineContext.Provider value={{ startYear, currentYear, totalDurationYears }}>
			{children}
		</CarrerTimelineContext.Provider>
	);
};
