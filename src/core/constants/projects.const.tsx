import { BASE_USER_INFO } from './base-user-info.const';

import type { Project } from '../interfaces';

export const PROJECTS: Project[] = [
	{
		title: 'Angular - Video Player',
		description:
			'Integrate Youtube API, Organize the project structure for scalability and maintainability.',
		techStack: ['Angular', 'Youtube API'],
		type: 'Github',
		link: `${BASE_USER_INFO.github}/angular-video-youtube`,
	},
	{
		title: 'Angular - Resizable Layout',
		description:
			'Create a directive to enable the Layout to be resizable by the user, enhancing UI flexibility.',
		techStack: ['Angular', 'Directives', 'DOM Manipulation'],
		type: 'Github',
		link: `${BASE_USER_INFO.github}/angular-resizable-bar-for-layout`,
	},
	{
		title: 'React - Login Releate',
		description:
			'A comprehensive login system with form validation, password generator, toast component, and modal component.',
		techStack: ['React', 'Forms', 'UI Components'],
		type: 'Github',
		link: `${BASE_USER_INFO.github}/react-login`,
	},
];
