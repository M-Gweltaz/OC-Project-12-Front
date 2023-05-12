import { mockedData } from '../mocks/mockedData.js';
import { User } from '../models/User.js';

const usingMockedData = (): void => {
	if (!import.meta.env.VITE_USE_API) {
		// write fetching mockedDATA
		console.log(mockedData.USER_MAIN_DATA);
	}
};

const usingAPI = (): void => {
	if (import.meta.env.VITE_USE_API) {
		// write fetching API
	}
};
