import { Cow } from "./../src/hungryCows.js";
import { Game } from "./../src/game.js";
import { JestEnvironment } from "@jest/environment";
import { exportAllDeclaration, jsxText } from "@babel/types";

describe("Game", () => {
	let game;

	beforeEach(function ()	{
		game = new Game("Game");
	});

	test("should have an empty arrray of cows in game when created", () =>	{
		expect(game.cows).toEqual([]);
	});

	test("should create a new cow and add to index of cows",  () => {
		let cow = new Cow;
		game.addCow(cow);
		expect(game.cows[0]).toEqual(cow);
	});

	test("should add incrimental id numbers to each cow as they are added", () => {
		let cow1 = new Cow;
		let cow2 = new Cow;
		game.addCow(cow1);
		game.addCow(cow2);
		expect(game.cows[1].id).toEqual(2)
	});
});

describe("Cow1", () => {
	jest.useFakeTimers();
	let cow1;

	beforeEach(function () {
		cow1 = new Cow("Cow1");
		cow1.setHunger();
		cow1.setSleep();
		cow1.setSun();
	});

	afterEach(function () {
		jest.clearAllTimers();
	});

	test("should have a name and a food level, sleep level and sun level of 10 when it is created", () => {
		expect(cow1.foodLevel).toEqual(10);
		expect(cow1.sleepLevel).toEqual(10);
		expect(cow1.sunLevel).toEqual(10);
	});

//Food level tests
	test("should have a food level of 8 after 6001 miliseconds", () => {
		jest.advanceTimersByTime(6001);
		expect(cow1.foodLevel).toEqual(8);
	});

	test("should starve if the food level drops below zero", () => {
		cow1.foodLevel = 0;
		expect(cow1.didYouDie()).toEqual(true);
	});

	test("should get very hungry if 30 seconds pass without feeding", () => {
		jest.advanceTimersByTime(30001);
		expect(cow1.didYouDie()).toEqual(true);
	});

	test("should increase food level by 1 if fed", () => {
		jest.advanceTimersByTime(9001);
		cow1.foodLevel = 2;
		cow1.feed();
		expect(cow1.foodLevel).toEqual(3);
	});

	test("should stop feed if food level is equal to 0", () => {
		cow1.foodLevel = 0;
		expect(cow1.feed()).toEqual(false);
	});

	test("should notify user if food level drops below 5", () => {
		cow1.foodLevel = 4;
		expect(cow1.needFood()).toEqual(true);
	})

//Sleep level tests
	test("should have a sleep level of 7 after 36000 miliseconds have passed", () => {
		jest.advanceTimersByTime(36000);
		expect(cow1.sleepLevel).toEqual(7);
	});

	test("should die of sleep deprivation if sleep level drops below zero", () => {
		cow1.sleepLevel = 0;
		expect(cow1.didYouDie()).toEqual(true);
	});

	test("should die of sleep deprivation if 2 minutes pass without sleep", () => {
		jest.advanceTimersByTime(120000);
		expect(cow1.didYouDie()).toEqual(true);	
	});

	test("should increase sleep level by 1 if given sleep", () => {
		cow1.sleepLevel = 6;
		cow1.sleep();
		expect(cow1.sleepLevel).toEqual(7);
	});

	test("should stop sleep increase if sleep level is equal to 0", () => {
		cow1.sleepLevel = 0;
		expect(cow1.sleep()).toEqual(false);
	});

	test("should return notification if sleep level drops below 5", () => {
		cow1.sleepLevel = 4;
		expect(cow1.needSleep()).toEqual(true);
	});

	//Sun level tests
	test("should have a level of 7 after 18000 miliseconds have passed", () => {
		jest.advanceTimersByTime(18000);
		expect(cow1.sunLevel).toEqual(7);
	});

	test("should die of sun deprivation if sun level drops below zero", () => {
		cow1.sunLevel = 0;
		expect(cow1.didYouDie()).toEqual(true);
	});

	test("should die of sun deprivation if 1 minute passes without sun", () => {
		jest.advanceTimersByTime(60000);
		expect(cow1.didYouDie()).toEqual(true);
	});

	test("should increase the sun level by 1 if given sun", () => {
		cow1.sunLevel = 5;
		cow1.sun();
		expect(cow1.sunLevel).toEqual(6);
	});

	test("should stop sun if increase if sun level is equal 0", () => {
		cow1.sunLevel = 0;
		expect(cow1.sun()).toEqual(false);
	});

	test("should return notification if sun level drops below 5", () => {
		cow1.sunLevel = 4;
		expect(cow1.needSun()).toEqual(true);
	});
});

