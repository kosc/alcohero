function game()
{
	var SCREEN_WIDTH = 420;
	var SCREEN_HEIGHT = 600;
	var TILES_WIDTH = SCREEN_WIDTH/30;
	var TILES_HEIGHT = SCREEN_HEIGHT/60;
	var stage = new createjs.Stage("gameStage");
	var width = document.body.clientWidth;
	var height = document.body.clientHeight;
	var houseRight = new createjs.Bitmap("img/houseRight.png");
	var houseLeft = new createjs.Bitmap("img/houseLeft.png");
	var houseCenter = new createjs.Bitmap("img/houseCenter.png");
	var mapMatrix = new Array(4);
	for(var i=0; i<TILES_WIDTH; i++){
		mapMatrix[i] = new Array(4);
		for(var j=0; j<TILES_HEIGHT; j++){
			if(i == 0)
				mapMatrix[i][j] = houseLeft.clone();
			else if(i == 13)
				mapMatrix[i][j] = houseRight.clone();
			else
				mapMatrix[i][j] = houseCenter.clone();
			mapMatrix[i][j].set({x: i*30, y: j*60});
			stage.addChild(mapMatrix[i][j]);
		}
	}
	function hero(){
		var scores;
		var x, y;
	}
	stage.update();
}
