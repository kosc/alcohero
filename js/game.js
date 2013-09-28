var SCREEN_WIDTH = 420;
var SCREEN_HEIGHT = 600;
var LEFT_KEY = 37;
var RIGHT_KEY = 39;
var LEFT_DIRECTION = 0;
var RIGHT_DIRECTION = 1;

function Hero(){
	this.img = new createjs.Bitmap("img/hero.png");
	this.x = SCREEN_WIDTH/2 - 30;
	this.y = 200;
	this.direction = null;
}

var hero = new Hero();

function game()
{
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
	stage.update();
	window.setInterval(function (){
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
	}, 5);
}

document.onkeydown = function (e){
	if(e.keyCode == LEFT_KEY) hero.direction = LEFT_DIRECTION;
	if(e.keyCode == RIGHT_KEY) hero.direction = RIGHT_DIRECTION;
}

document.onkeyup = function (e){
	if(e.keyCode == LEFT_KEY || e.keyCode == RIGHT_KEY)
		hero.direction = null;
}
