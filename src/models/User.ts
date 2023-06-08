class User {
	id: number;
	userInfo: {
		firstName: string;
		lastName: string;
		age: number;
	};
	todayScore: number;
	keyData: {
		calorieCount: number;
		proteinCount: number;
		carbohydrateCount: number;
		lipidCount: number;
	};
	constructor(
		id: number,
		userInfo: { firstName: string; lastName: string; age: number },
		todayScore: number,
		keyData: {
			calorieCount: number;
			proteinCount: number;
			carbohydrateCount: number;
			lipidCount: number;
		}
	) {
		this.id = id;
		this.userInfo = userInfo;
		this.todayScore = todayScore;
		this.keyData = keyData;
	}

	getFirstName(): string {
		return this.userInfo.firstName;
	}

	getTodayScore(): { name: string; value: number }[] {
		return [{ name: 'todayScore', value: this.todayScore }];
	}

	getKeyData(): {
		calorieCount: number;
		proteinCount: number;
		carbohydrateCount: number;
		lipidCount: number;
	} {
		return this.keyData;
	}
}

export { User };
