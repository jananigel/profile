import axiosClient from '../axios-client.service';

import type { WeatherData } from '../../interfaces';

const BASE_URL = 'https://api.open-meteo.com/v1';

export const getWeather = async (lat: number, lon: number): Promise<WeatherData> => {
	const res = await axiosClient.get(`${BASE_URL}/forecast`, {
		params: {
			latitude: lat,
			longitude: lon,
			curret: 'temperature_2m,weather_code,is_day',
			timezone: 'auto',
		},
	});

	const current = res.data.current;

	return {
		temperature: current.temperature_2m,
		weatherCode: current.weather_code,
		isDay: current.is_day,
	};
};
