import AverageSessions from '../components/dashboard/AverageSessionsChart';

interface AverageSessions {
	day: string;
	sessionLength: number;
}

class UserAverageSessions {
	id: number;
	sessions: AverageSessions[];

	constructor(id: number, sessions: AverageSessions[]) {
		this.id = id;
		this.sessions = sessions;
	}
}

export { UserAverageSessions };
