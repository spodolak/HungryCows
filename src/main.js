import { Cow } from "./hungryCows";
import { Game } from "./game";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

let timeKeeper = (cow) => {
	let intervalID = setInterval(() => {
		console.log(cow);
		if(cow.didYouDie() === true) {
			$("#dead").show();
			console.log(intervalID);
			clearInterval(intervalID);
		}else {
			if(cow.needFood() === true) {
				$("#need-food" + cow.id).show();
			}else if(cow.needSleep() === true) {
				$("#need-sleep" + cow.id).show();
			}else if(cow.needSun() === true) {
				$("#need-sun" + cow.id).show();
			}else{
				$("#need-food" + cow.id).hide();
				$("#need-sleep" + cow.id).hide();
				$("#need-sun" + cow.id).hide();
			}
		}
	}, 1000);
}
	

$(document).ready(function() {
	let game = new Game();
	let cow = new Cow();
	game.addCow(cow);
	$("button#start-game").click(function() {
		event.preventDefault();
		$("#start-screen").hide();
		$("#cow1").show();
		cow.setHunger();
		cow.setSleep();
		cow.setSun();
		timeKeeper(cow);
		setInterval(() => {
			let cow = new Cow;
			game.addCow(cow);
			cow.setHunger();
			cow.setSleep();
			cow.setSun();
			timeKeeper(cow);
			console.log(game);
			$(".more-cows").append(
			
			`<div id='cow` + cow.id + `'> 
			<img src='assets/images/cow.jpg' alt='cow' width='200'> 
			<button id='food` + cow.id + `'>Feed me!</button>
			<button id='sleep` + cow.id + `'>Sleep</button>
			<button id='sun` + cow.id + `'>Sun!</button>
			<div id='need-food` + cow.id + `'>
				<p>I am hungry!</p> 
			</div>
			<div id='need-sleep` + cow.id + `'>
				<p>I want to sleep!</p> 
			</div>
			<div id='need-sun` + cow.id + `'>
				<p>I wanna be in the Sun!</p>
			</div>
			</div>`);
			
			$("#need-food" + cow.id).hide();
			$("#need-sleep" + cow.id).hide();
			$("#need-sun" + cow.id).hide();

			$("button#food" + cow.id).click(function() {
				event.preventDefault();
				game.cows[(cow.id -1)].feed();
			});	
			$("button#sleep" + cow.id).click(function() {
				event.preventDefault();
				game.cows[(cow.id -1)].sleep();
			});	
			$("button#sun" + cow.id).click(function() {
				event.preventDefault();
				game.cows[(cow.id -1)].sun();
			});	
		}, 10000);
	});

	$("button#food" + cow.id).click(function() {
		event.preventDefault();
		game.cows[(cow.id -1)].feed();
	});	
	$("button#sleep" + cow.id).click(function() {
		event.preventDefault();
		game.cows[(cow.id -1)].sleep();
	});	
	$("button#sun" + cow.id).click(function() {
		event.preventDefault();
		game.cows[(cow.id -1)].sun();
	});	
});

