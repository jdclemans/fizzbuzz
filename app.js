
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
})(); //Show console.log in div "log"





    var choice = prompt("Pick a number, any number");
    choice = +choice;
    var numberChoice = parseInt(choice) + "<br>";
        console.log(numberChoice); 

    function function_name(argument) {
        console.log(argument);
        for (var i = 1; i < argument; i++) {
       
            if (i % 5 + i % 3 === 0) {
                console.log("fizzbuzz");
            }

            else if (i % 5 === 0) {
                console.log("buzz");
            }

            else if (i % 3 === 0) {
                console.log("fizz");
            }

            else {
            console.log(i);
            }
        }   
    }
        function_name(choice);


// 	for (var i = 1; i < 101; i++) {
   
//    	if (i % 5 + i % 3 === 0) {
// 		console.log("fizzbuzz")
// 	}

// 	else if (i % 5 === 0) {
// 		console.log("buzz")
// 	}

// 	else if (i % 3 === 0) {
// 		console.log("fizz");
// 	}

// 	else {
// 	console.log(i);
// }
// }
});