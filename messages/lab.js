var request = new XMLHttpRequest();

function parse() {
	//set up http request
	request.open("GET", "http://messagehub.herokuapp.com/messages.json", true);

	//set up callback function
	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			data = request.responseText;
			msg = JSON.parse(data);
			elem = document.getElementById("messages");
			// add to id
			for (var i = 0; i < msg.length; i++){
				elem.innerHTML += "<p>" + msg[i].content + " " +
					msg[i].username + "</p>";
			};
		}
	}

	//trigger http request
	request.send(null);
}