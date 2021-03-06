var SCREEN_WIDTH = 420;
var SCREEN_HEIGHT = 600;
var LEFT_KEY = 37;
var RIGHT_KEY = 39;
var LEFT_DIRECTION = 0;
var RIGHT_DIRECTION = 1;

function Hero(){
	this.width = 60;
	this.height = 80;
	this.img = new createjs.Bitmap("img/hero.png");
	this.x = SCREEN_WIDTH/2 - this.width/2;
	this.y = 0;
	this.direction = null;
	this.scores = 0;
}

function Mushroom(){
	this.width = this.height = 32;
	this.img = new createjs.Bitmap("img/mushroom.png");
	this.x = Math.random()*(SCREEN_WIDTH - this.width);
	this.y = SCREEN_HEIGHT;
	this.is_placed = false;
}

var hero = new Hero();

function game()
{
	var mush = new Mushroom();
	
	var stage = new createjs.Stage("gameStage");
	var house = new createjs.Bitmap("img/house.png");
	hero.img.set({x: hero.x, y: hero.y});
	stage.addChild(house);
	var houseNext = house.clone();
	houseNext.set({y: SCREEN_HEIGHT});
	stage.addChild(houseNext);
	var house_y = 0;
	var houseNext_y = SCREEN_HEIGHT;
	stage.addChild(hero.img);
	var scores = new createjs.Text("Scores: " + hero.scores, "20px Monaco", "#772200");
	scores.x = SCREEN_WIDTH - 140;
	scores.y = SCREEN_HEIGHT - 30;
	stage.addChild(scores);
	stage.update();
	window.setInterval(function (){
		mush.img.set({x: mush.x, y: mush.y});
		if(!mush.is_placed){
			mush.is_placed = true;
			stage.addChild(mush.img);
		}
		else{
			if(ndgmr.checkRectCollision(mush.img, hero.img)){
				stage.removeChild(mush.img);
				mush = new Mushroom();
				hero.scores++;
				scores.text = "Scores: " + hero.scores;
			}
			mush.y-=2;
			if(mush.y < -mush.height){
				alert("You loose!\nYour scores: " + hero.scores + ".");
				hero.scores = 0;
				scores.text = "Scores: " + hero.scores;
				stage.removeChild(mush.img);
				mush = new Mushroom();
			}
		}
		house_y-=2;
		houseNext_y-=2;
		house.set({y: house_y});
		houseNext.set({y: houseNext_y});
		hero.img.set({x: hero.x, y: hero.y});
		stage.update();
		if(house_y == -SCREEN_HEIGHT)
			house_y = SCREEN_HEIGHT;
		if(houseNext_y == -SCREEN_HEIGHT)
			houseNext_y = SCREEN_HEIGHT;
		if(hero.direction == LEFT_DIRECTION){
			hero.x-=4;
		}
		if(hero.direction == RIGHT_DIRECTION){
			hero.x+=4;
		}
	}, 4);
}

document.onkeydown = function (e){
	if(e.keyCode == LEFT_KEY) hero.direction = LEFT_DIRECTION;
	if(e.keyCode == RIGHT_KEY) hero.direction = RIGHT_DIRECTION;
}

document.onkeyup = function (e){
	if(e.keyCode == LEFT_KEY || e.keyCode == RIGHT_KEY)
		hero.direction = null;
}
