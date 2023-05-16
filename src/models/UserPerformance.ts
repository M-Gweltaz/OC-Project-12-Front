interface Performance {
	sport: string;
	value: number;
}

class UserPerformance {
	id: number;
	performances: Performance[];

	constructor(id: number, performances: Performance[]) {
		this.id = id;
		this.performances = performances;
	}
}

export { UserPerformance };
