var request = new XMLHttpRequest();

function parse() {
	request.open("GET", "data.json", true);

	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			data = request.responseText;
			msg = JSON.parse(data);
			elem = document.getElementById("messages");
			for (var i = 0; i < 2; i++){
				console.log("msg length: " + msg.length);
				onclick = function(msg, elem) {elem.innerHTML = "<p>" + msg[i].content + " " +
					msg[i].username + "</p>";}
			}
			/*elem.innerHTML = "<p>" + msg[0].content + " " + 
				msg[0].username + "</p>" + "<p>" + msg[1].content + 
				" " + msg[1].username + "</p>"; 
			console.log(msg[1].content + " " + msg[1].username); */
		}
	}
	request.send(null);
}