interface Session {
	day: string;
	kilogram: number;
	calories: number;
}

class UserActivity {
	id: number;
	sessions: Session[];

	constructor(id: number, sessions: Session[]) {
		this.id = id;
		this.sessions = sessions;
	}

	getActivityBarChartData(): {
		day: number;
		kilogram: number;
		calories: number;
	}[] {
		const result: { day: number; kilogram: number; calories: number }[] =
			this.sessions.map((session, index) => ({
				day: index,
				kilogram: session.kilogram, // Corrected property name from `kilogram` to `poid`
				calories: session.calories,
			}));

		return result;
	}
}

export { UserActivity };
