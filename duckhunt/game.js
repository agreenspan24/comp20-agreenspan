function init() {
	//sets background to variable "img"
	var img = new Image(); 
	img.src = "duckhunt-background.gif";

	// sets various sheet to variable elem
	var elem = new Image();
	elem.src = "duckhunt_various_sheet.png";

	//sets up canvas using id in index.html
	var canvas = document.getElementById("game_canvas");
	var ctx = canvas.getContext("2d");

	// slices in background
	ctx.drawImage(img, 0, 0, 256, 240, 0, 0, 256, 240);

	// slices in two birds
	ctx.drawImage(elem, 0, 115, 40, 40, 90, 40, 40, 40);
	ctx.drawImage(elem, 170, 155, 40, 40, 175, 75, 40, 40);

}






