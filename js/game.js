function game()
{
	var SCREEN_WIDTH = 420;
	var SCREEN_HEIGHT = 600;
	var stage = new createjs.Stage("gameStage");
	var house = new createjs.Bitmap("img/house.png");
	function hero(){
		var scores;
		var x, y;
	}
	stage.addChild(house);
	var houseNext = house.clone();
	houseNext.set({y: SCREEN_HEIGHT});
	stage.addChild(houseNext);
	stage.update();
	var house_y = 0;
	var houseNext_y = SCREEN_HEIGHT;
	window.setInterval(function (){
		house_y--;
		houseNext_y--;
		house.set({y: house_y});
		houseNext.set({y: houseNext_y});
		stage.update();
		if(house_y == -SCREEN_HEIGHT)
			house_y = SCREEN_HEIGHT;
		if(houseNext_y == -SCREEN_HEIGHT)
			houseNext_y = SCREEN_HEIGHT;
	}, 1);
	
}
