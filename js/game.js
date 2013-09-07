function init()
{
	var stage = new createjs.Stage("gameStage");
	var circle = new createjs.Shape();
	circle.graphics.beginFill("green").drawCircle(0, 0, 50);
	circle.x = 250;
	circle.y = 100;
	stage.addChild(circle);
	stage.update();
}
