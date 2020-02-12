export class Cow {
	constructor() {
		this.foodLevel = 10;
		this.sleepLevel = 10;
		this.sunLevel = 10;
		this.id;
	}
	
	didYouDie() {
		if (this.foodLevel > 0 && this.sleepLevel > 0 && this.sunLevel > 0) {
			return false;
		} else {
			return true;
		}
	}
	
	setHunger() {
		setInterval(() => {
			this.foodLevel--;
		}, 3000);
	}

	feed() {
		if (this.foodLevel > 0 && this.foodLevel < 10) {
			this.foodLevel++;
		} else {
			return false;
		}
	}

	needFood() {
		if(this.foodLevel <5) {
			return true;
		}else{
			return false;
		}
	}

	setSleep() {
		setInterval(() => {
			this.sleepLevel--;
		}, 12000);
	}

	sleep() {
		if (this.sleepLevel > 0 && this.sleepLevel < 10) {
			this.sleepLevel++;
		} else {
			return false;
		}
	}

	needSleep() {
		if (this.sleepLevel < 5) {
			return true;
		} else {
			return false;
		}
	}

	setSun() {
		setInterval(() => {
			this.sunLevel--;
		}, 6000);
	}

	sun() {
		if(this.sunLevel > 0 && this.sunLevel <10) {
			this.sunLevel++;
		} else {
			return false;
		}
	}

	needSun() {
		if(this.sunLevel < 5) {
			return true;	
		} else {
			return false;
		}
	}
}

