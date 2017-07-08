var scramblers = require('../../src')
scramblers["333"].initialize()

for (var i=1; i <= 5; i++) {
	// Generate a random scramble
	var randomScramble = scramblers["333"].getRandomScramble();

	// Print it
	document.write("" + i + ". " + randomScramble.scramble_string + "<br>");

	// Create an element and draw the scramble in it.
	var newDiv = document.createElement("div");
	scramblers["333"].drawScramble(newDiv, randomScramble.state, 300, 280);
	document.body.appendChild(newDiv);
}
