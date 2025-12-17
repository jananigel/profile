export const getGeoPosition = (): Promise<GeolocationPosition> =>
	new Promise((resolve, reject) => {
		if (!navigator.geolocation) {
			reject(new Error('Geolocation not supported'));
			return;
		}

		navigator.geolocation.getCurrentPosition(resolve, reject, {
			timeout: 10000,
			maximumAge: 60000,
		});
	});
