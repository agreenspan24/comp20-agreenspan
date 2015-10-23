var request = new XMLHttpRequest();

function parse() {
	request.open("GET", "data.json", true);

	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			console.log("step1");
			data = request.responseText;
			console.log("step2");
			msg = JSON.parse(data);
			console.log("step3");
			elem = document.getElementById("messages");
			console.log("step4");
			for (var i = 1; i < 3; i++){
				console.log("i: " + (i+5));
				elem.innerHTML = "<p>" + msg[i].content + " " +
					msg[i].username + "</p>";
			}
		}
	}
	request.send(null);
}