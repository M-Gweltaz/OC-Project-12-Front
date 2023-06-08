import { mockedData } from '../mocks/mockedData';
import { User } from '../models/User';
import { UserActivity } from '../models/UserActivity';
import { UserAverageSessions } from '../models/UserAverageSessions';
import { UserPerformance } from '../models/UserPerformance';

interface mainDataInterface {
	id: number;
	userInfos: { firstName: string; lastName: string; age: number };
	todayScore: number;
	keyData: {
		calorieCount: number;
		proteinCount: number;
		carbohydrateCount: number;
		lipidCount: number;
	};
}
interface activityDataInterface {
	userId: number;
	sessions: { day: string; kilogram: number; calories: number }[];
}

interface averageSessionsDataInterface {
	userId: number;
	sessions: { day: number; sessionLength: number }[];
}

interface performanceDataInterface {
	userId: number;
	kind: { 1: string; 2: string; 3: string; 4: string; 5: string; 6: string };
	data: { value: number; kind: number }[];
}

interface resultInterface {
	mainData: mainDataInterface;
	activityData: activityDataInterface;
	averageSessionsData: averageSessionsDataInterface;
	performanceData: performanceDataInterface;
}

const fetchingData = async (
	id: string
): Promise<{
	user: User;
	activity: UserActivity;
	averageSessions: UserAverageSessions;
	performance: UserPerformance;
}> => {
	const userId: number = parseInt(id);

	let result: resultInterface;

	import.meta.env.VITE_USE_API == 'true'
		? (result = await fetchingApi(userId))
		: (result = await fetchingMockedData(userId));

	return parsingData(result);
};

const fetchingApi = async (userId: number): Promise<resultInterface> => {
	const apiUrl = 'http://localhost:3000/user';

	const mainData: mainDataInterface = await fetchApiMainData(apiUrl, userId);
	const activityData: activityDataInterface = await fetchApiActivityData(
		apiUrl,
		userId
	);
	const averageSessionsData: averageSessionsDataInterface =
		await fetchApiAverageSessionsData(apiUrl, userId);
	const performanceData: performanceDataInterface =
		await fetchApiPerformanceData(apiUrl, userId);

	const resultData: resultInterface = {
		mainData,
		activityData,
		averageSessionsData,
		performanceData,
	};

	return resultData;
};

const fetchApiMainData = async (
	apiUrl: string,
	userId: number
): Promise<mainDataInterface> => {
	try {
		const response = await fetch(`${apiUrl}/${userId}`);
		const mainDataResponse = await response.json();
		if (mainDataResponse.data.score) {
			const mainDataResponseCurated = mainDataResponse;
			mainDataResponseCurated.data.todayScore = mainDataResponse.data.score;
			delete mainDataResponseCurated.data.score;
			return mainDataResponseCurated.data;
		}
		return mainDataResponse.data;
	} catch (error) {
		console.log(`This is an API error: ${error}`);
		throw error;
	}
};

const fetchApiActivityData = async (
	apiUrl: string,
	userId: number
): Promise<activityDataInterface> => {
	try {
		const response = await fetch(`${apiUrl}/${userId}/activity`);
		const activityDataResponse = await response.json();
		return activityDataResponse.data;
	} catch (error) {
		console.log(`This is an API error: ${error}`);
		throw error;
	}
};

const fetchApiAverageSessionsData = async (
	apiUrl: string,
	userId: number
): Promise<averageSessionsDataInterface> => {
	try {
		const response = await fetch(`${apiUrl}/${userId}/average-sessions`);
		const averageSessionDataResponse = await response.json();
		return averageSessionDataResponse.data;
	} catch (error) {
		console.log(`This is an API error: ${error}`);
		throw error;
	}
};

const fetchApiPerformanceData = async (
	apiUrl: string,
	userId: number
): Promise<performanceDataInterface> => {
	try {
		const response = await fetch(`${apiUrl}/${userId}/performance`);
		const performanceDataResponse = await response.json();
		return performanceDataResponse.data;
	} catch (error) {
		console.log(`This is an API error: ${error}`);
		throw error;
	}
};

const fetchingMockedData = (userId: number): resultInterface => {
	const mainData = mockedData.USER_MAIN_DATA.find(
		(user) => user.id === userId
	) as mainDataInterface;

	const activityData = mockedData.USER_ACTIVITY.find(
		(user) => user.userId === userId
	) as activityDataInterface;
	const averageSessionsData = mockedData.USER_AVERAGE_SESSIONS.find(
		(user) => user.userId === userId
	) as averageSessionsDataInterface;
	const performanceData = mockedData.USER_PERFORMANCE.find(
		(user) => user.userId === userId
	) as performanceDataInterface;
	const resultData: resultInterface = {
		mainData,
		activityData,
		averageSessionsData,
		performanceData,
	};
	return resultData;
};

// passing data through models
const parsingData = (
	result: resultInterface
): {
	user: User;
	activity: UserActivity;
	averageSessions: UserAverageSessions;
	performance: UserPerformance;
} => {
	const parsedResult = {
		user: parsingMainData(result.mainData),
		activity: parsingActivityData(result.activityData),
		averageSessions: parsingAverageSessionsData(result.averageSessionsData),
		performance: parsingPerformanceData(result.performanceData),
	};

	return parsedResult;
};

const parsingMainData = (mainData: mainDataInterface): User => {
	const parsedMainData: User = new User(
		mainData.id,
		mainData.userInfos,
		mainData.todayScore,
		mainData.keyData
	);
	return parsedMainData;
};

const parsingActivityData = (
	activityData: activityDataInterface
): UserActivity => {
	const parsedActivityData: UserActivity = new UserActivity(
		activityData.userId,
		activityData.sessions
	);
	return parsedActivityData;
};

const parsingAverageSessionsData = (
	averageSessionsData: averageSessionsDataInterface
): UserAverageSessions => {
	const sessions: {
		day: string;
		sessionLength: number;
	}[] = [];

	const dayOfTheWeek: {
		1: string;
		2: string;
		3: string;
		4: string;
		5: string;
		6: string;
		7: string;
	} = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };

	averageSessionsData.sessions.forEach((session) => {
		const data: {
			day: string;
			sessionLength: number;
		} = { day: '', sessionLength: 0 };
		data.day = dayOfTheWeek[session.day as keyof typeof dayOfTheWeek];
		data.sessionLength = session.sessionLength;
		sessions.push(data);
	});

	const parsedAverageSessionsData: UserAverageSessions =
		new UserAverageSessions(averageSessionsData.userId, sessions);

	return parsedAverageSessionsData;
};

const parsingPerformanceData = (
	performanceData: performanceDataInterface
): UserPerformance => {
	const performances: {
		sport: string;
		value: number;
	}[] = [];

	// Define the desired order of sports
	const desiredSportsOrder: string[] = [
		'intensity',
		'speed',
		'strength',
		'endurance',
		'energy',
		'cardio',
	];

	// switching the data object to only one array for sport and value
	Object.entries(performanceData.kind).forEach(
		([key, sport]: [string, string]) => {
			const kindKey: number = parseInt(key);
			const perf: { value: number; kind: number } | undefined =
				performanceData.data.find((item) => item.kind === kindKey);
			if (perf) {
				performances.push({ sport: sport, value: perf.value });
			}
		}
	);

	// Sort the performances array based on the desired sports order
	const sortedPerformances = performances.sort((a, b) => {
		const indexA = desiredSportsOrder.indexOf(a.sport);
		const indexB = desiredSportsOrder.indexOf(b.sport);
		return indexA - indexB;
	});

	const parsedPerformanceData: UserPerformance = new UserPerformance(
		performanceData.userId,
		sortedPerformances
	);

	return parsedPerformanceData;
};

export { fetchingData };
