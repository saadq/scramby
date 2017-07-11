const scramby = require('../../lib')
const scrambler = scramby('333')

// Generate and draw 5 scrambles
for (var i=1; i <= 5; i++) {
	const randomScramble = scrambler.getRandomScramble()
	document.write("" + i + ". " + randomScramble.scrambleString + "<br>")

	const newDiv = document.createElement("div")
	scrambler.drawScramble(newDiv, randomScramble.state, 300, 180)
	document.body.appendChild(newDiv)
}
