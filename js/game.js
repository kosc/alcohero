var SCREEN_WIDTH = 420;
var SCREEN_HEIGHT = 600;
var LEFT_KEY = 37;
var RIGHT_KEY = 39;

function Hero(){
	this.img = new createjs.Bitmap("img/hero.png");
	this.x = SCREEN_WIDTH/2 - 30;
	this.y = 200;
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
		house_y--;
		houseNext_y--;
		house.set({y: house_y});
		houseNext.set({y: houseNext_y});
		hero.img.set({x: hero.x, y: hero.y});
		stage.update();
		if(house_y == -SCREEN_HEIGHT)
			house_y = SCREEN_HEIGHT;
		if(houseNext_y == -SCREEN_HEIGHT)
			houseNext_y = SCREEN_HEIGHT;
	}, 1);
}

document.onkeypress = function (e){
	if(e.keyCode == LEFT_KEY) hero.x-=5;
	if(e.keyCode == RIGHT_KEY) hero.x+=5;
}
