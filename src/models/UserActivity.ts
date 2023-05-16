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
}

export { UserActivity };
