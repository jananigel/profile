export interface JobExperience {
	id: string;
	company: string;
	role: string;
	period: string;
	description: string[];
	techStack: string[];
	startYear: number;
	startMonth?: number;
	endYear?: number | null;
	endMonth?: number | null;
}
