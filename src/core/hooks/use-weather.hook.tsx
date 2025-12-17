import { useQuery } from '@tanstack/react-query';
import { Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

import { getWeather } from '../services/apis/weather-api.service';
import { getGeoPosition, getWeatherIcon } from '../utils';

const TEN_MINUTES = 10 * 60 * 1000;

export const useWeather = () => {
	return useQuery({
		queryKey: ['weather'],
		queryFn: async () => {
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
	});

	const [data, setData] = useState({ temp: 0, icon: Sun });
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		let mounted = true;
		setIsLoading(true);

		if (!navigator.geolocation) {
			if (mounted) {
				setData((prev) => ({ ...prev }));
			}
			return;
		}

		navigator.geolocation.getCurrentPosition(
			async (position) => {
				try {
					const { latitude, longitude } = position.coords;
					const data = await getWeather(latitude, longitude);

					if (mounted) {
						setData({
							temp: data.temperature,
							icon: getWeatherIcon(data.weatherCode, data.isDay),
						});
						setIsLoading(false);
					}
				} catch (err) {
					if (mounted) {
						setIsLoading(false);
						setError(err as any);
					}
				}
			},
			(err) => {
				if (mounted) {
					setIsLoading(false);
					setError(err as any);
				}
			},
			{ timeout: 10000, maximumAge: 60000 },
		);

		return () => {
			mounted = false;
		};
	}, []);

	return { data, isLoading, error };
};
