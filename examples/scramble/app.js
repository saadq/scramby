const scramby = require('../../lib')
const scrambler = scramby('222')

document.body.innerHTML = scrambler.getRandomScramble().scrambleString
