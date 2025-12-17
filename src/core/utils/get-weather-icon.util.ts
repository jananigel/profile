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

export const getWeatherIcon = (code: number, isDay: number): LucideIcon => {
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
