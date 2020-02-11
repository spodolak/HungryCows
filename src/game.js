export class Game {
	constructor() {
		this.cows = [];
		this.id = 0;
	}

	addCow(newCow) {
		this.id++;
		newCow.id = this.id;
		this.cows.push(newCow);
	}
}