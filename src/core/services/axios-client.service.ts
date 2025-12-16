import axios from 'axios';

const axiosClient = axios.create({
	baseURL: import.meta.env.BASE_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});

import { HTTP_ERROR_HANDLER_INTERCEPTOR } from './interceptors/http-error-handler.interceptor';

HTTP_ERROR_HANDLER_INTERCEPTOR(axiosClient);

export default axiosClient;
