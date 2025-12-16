import type { AxiosInstance } from 'axios';

export const HTTP_ERROR_HANDLER_INTERCEPTOR = (axiosClient: AxiosInstance) => {
	const interceptorId = axiosClient.interceptors.response.use(
		(response) => response,
		(error) => {
			const { status } = error.response || {};

			switch (status) {
				case 401:
					console.error('Does not have the permisson to access');
					break;
				case 500:
					console.error('Internal server error.');
					break;
				default:
					console.error('Something wrong occurred');
			}

			return Promise.reject(error);
		},
	);

	axiosClient.interceptors.request.eject(interceptorId);
};
