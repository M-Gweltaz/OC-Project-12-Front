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

const fetchingData = (
	id: string
): {
	user: User;
	activity: UserActivity;
	averageSessions: UserAverageSessions;
	performance: UserPerformance;
} => {
	const userId: number = parseInt(id);

	let result: {
		mainData: mainDataInterface;
		activityData: activityDataInterface;
		averageSessionsData: averageSessionsDataInterface;
		performanceData: performanceDataInterface;
	} = fetchingMockedData(userId);

	import.meta.env.VITE_USE_API == 'true'
		? (result = fetchingApi(userId))
		: (result = fetchingMockedData(userId));

	return parsingData(result);
};

const fetchingApi = (userId: number) => {
	// fetching logic
	console.log(userId);
};

const fetchingMockedData = (
	userId: number
): {
	mainData: mainDataInterface;
	activityData: activityDataInterface;
	averageSessionsData: averageSessionsDataInterface;
	performanceData: performanceDataInterface;
} => {
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
	const resultData: {
		mainData: mainDataInterface;
		activityData: activityDataInterface;
		averageSessionsData: averageSessionsDataInterface;
		performanceData: performanceDataInterface;
	} = {
		mainData,
		activityData,
		averageSessionsData,
		performanceData,
	};
	return resultData;
};

// passing data through models
const parsingData = (result: {
	mainData: mainDataInterface;
	activityData: activityDataInterface;
	averageSessionsData: averageSessionsDataInterface;
	performanceData: performanceDataInterface;
}): {
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
	const parsedAverageSessionsData: UserAverageSessions =
		new UserAverageSessions(
			averageSessionsData.userId,
			averageSessionsData.sessions
		);

	return parsedAverageSessionsData;
};

const parsingPerformanceData = (
	performanceData: performanceDataInterface
): UserPerformance => {
	const performances: {
		sport: string;
		value: number;
	}[] = [];

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

	const parsedPerformanceData: UserPerformance = new UserPerformance(
		performanceData.userId,
		performances
	);

	return parsedPerformanceData;
};

export { fetchingData };
