function init(){
	var img = new Image(); 
	img.src = "duckhunt-background.gif";

	var elem = new Image();
	elem.src = "duckhunt_various_sheet.png"

	var canvas = document.getElementById("game_canvas");
	var ctx = canvas.getContext("2d");

	ctx.drawImage(img, 0, 0, 256, 240, 0, 0, 256, 240);

	ctx.drawImage(elem, 0, 115, 40, 40, 90, 40, 40, 40);
	ctx.drawImage(elem, 170, 155, 40, 40, 175, 75, 40, 40);



}






