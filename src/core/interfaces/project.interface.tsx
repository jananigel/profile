export interface Project {
	id: string;
	title: string;
	description: string;
	techStack: string[];
	link?: string;
	type: 'Github' | 'Commercial';
}
