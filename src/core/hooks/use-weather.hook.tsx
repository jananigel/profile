import {
	CloudFog,
	CloudLightning,
	CloudMoon,
	CloudRain,
	CloudSnow,
	CloudSun,
	type LucideIcon,
	Moon,
	Sun,
} from 'lucide-react';
import { useEffect, useState } from 'react';

import { getWeather } from '../services/apis/weather-api.service';

export const useWeather = () => {
	const [data, setData] = useState({ temp: 0, icon: Sun });
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const getWeatherIcon = (code: number, isDay: number): LucideIcon => {
		// Clear sky
		if (code === 0) return isDay ? Sun : Moon;

		// Mainly clear, partly cloudy, and overcast
		if (code >= 1 && code <= 3) return isDay ? CloudSun : CloudMoon;

		// Fog
		if (code >= 45 && code <= 48) return CloudFog;

		// Drizzle & Rain
		if (code >= 51 && code <= 67) return CloudRain;

		// Snow
		if (code >= 71 && code <= 77) return CloudSnow;

		// Rain showers
		if (code >= 80 && code <= 82) return CloudRain;

		// Snow showers
		if (code >= 85 && code <= 86) return CloudSnow;

		// Thunderstorm
		if (code >= 95 && code <= 99) return CloudLightning;

		return isDay ? Sun : Moon; // Default
	};

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
					console.log('p = ', position);
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
