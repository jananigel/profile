import { createHashRouter } from 'react-router-dom';

import MainLayout from './shared/layouts/main-layout/MainLayout';

export const router = createHashRouter([
	{
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: '/',
				lazy: async () => {
					const { default: LandingPage } = await import('./pages/landing/landing.page');
					return { Component: LandingPage };
				},
			},
			{
				path: '/dashboard',
				lazy: async () => {
					const { default: DashboardPage } = await import('./pages/dashboard/dashboard.page');
					return { Component: DashboardPage };
				},
			},
		],
	},
]);
