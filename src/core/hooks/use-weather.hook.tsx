import { useQuery } from '@tanstack/react-query';

import { getWeather } from '../services/apis/weather-api.service';
import { getGeoPosition, getWeatherIcon } from '../utils';

import type { LucideIcon } from 'lucide-react';

const TEN_MINUTES = 10 * 60 * 1000;

interface Weather {
	temp: number;
	icon: LucideIcon;
}

export const useWeather = () => {
	return useQuery<Weather, Error>({
		queryKey: ['weather'],
		queryFn: async (): Promise<Weather> => {
			const position = await getGeoPosition();
			const { latitude, longitude } = position.coords;

			const response = await getWeather(latitude, longitude);

			return {
				temp: response.temperature,
				icon: getWeatherIcon(response.weatherCode, response.isDay),
			};
		},
		staleTime: TEN_MINUTES,
		retry: false,
		refetchOnWindowFocus: false,
	});
};
