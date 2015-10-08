var stage = new createjs.Stage('stage')

console.log(stage)
var stage, w, h, loader;
var sky;
function init() {
	// grab canvas width and height for later calculations:
	w = stage.canvas.width;
	h = stage.canvas.height;
	manifest = [
		{src: "background.png", id: "sky"}
	];

	loader = new createjs.LoadQueue(false);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(manifest, true, "img/shoot_background/");

	
};
init();

function handleComplete(){
	sky = new createjs.Shape();
	var skyImg = loader.getResult("sky");
	sky.graphics.beginBitmapFill(skyImg).drawRect(0, 0, w, h);
	stage.addChild(sky);
	sky.tileH = skyImg.height;
	stage.update();
	createjs.Ticker.timingMode = createjs.Ticker.RAF;
	createjs.Ticker.addEventListener("tick", tick);
}
function tick(event) {
	var deltaS = event.delta / 1000;
	//sky.y = sky.y+5;
	//sky.y = 
	console.log((sky.y - deltaS * 150) % sky.tileH);
	stage.update(event);
}
