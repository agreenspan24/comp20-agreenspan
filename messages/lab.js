var request = new XMLHttpRequest();

function parse() {
	request.open("GET", "data.json", true);

	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			data = request.responseText;
			msg = JSON.parse(data);
			elem = document.getElementById("messages");
			/*for (var i = 1; i < 3; i++){
				console.log("i: " + i);
				elem.innerHTML = "<p>" + msg[0].content + " " +
					msg[0].username + "</p>";
			}*/
			console.log(msg[0].content + " " + msg[0].username); 
		}
	}
	request.send(null);
}