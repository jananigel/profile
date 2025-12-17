import { AnimatePresence, motion } from 'framer-motion';
import { Loader2, MapPinOff } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { useWeather } from '../../../core/hooks';

const Weather = () => {
	const { data, isLoading, error, refetch, isFetching } = useWeather();
	const { t } = useTranslation('common');
	return (
		<>
			<AnimatePresence>
				{!isLoading && !isFetching && !error && !!data && (
					<motion.div
						key="weather"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.8 }}
						className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer"
						title={t('weather_title')}
						onClick={() => refetch()}>
						<data.icon size={16} className="text-primary-400"></data.icon>
						<span className="text-sm font-medium font-mono">{Math.round(data.temp || 0)}°C</span>
					</motion.div>
				)}

				{isLoading ||
					(isFetching && (
						<motion.div
							key="loading"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="px-2">
							<Loader2 size={16} className="animate-spin text-slate-500"></Loader2>
						</motion.div>
					))}

				{error && (
					<motion.div
						key="error"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="px-2 text-slate-600"
						title={error.message}
						onClick={() => refetch()}>
						<MapPinOff size={16}></MapPinOff>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Weather;
