
$(document).ready(function(){

(function () {
    if (!console) {
        console = {};
    }
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})(); //Show console.log in div

	for (var i = 1; i < 101; i++) {
   
   	if (i % 5 + i % 3 === 0) {
		console.log("fizzbuzz")
	}

	else if (i % 5 === 0) {
		console.log("buzz")
	}

	else if (i % 3 === 0) {
		console.log("fizz");
	}

	else {
	console.log(i);
}
}
});