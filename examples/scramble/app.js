const scramby = require('../../lib')
const scrambler = scramby('222')

const button = document.querySelector('button')
const scramble = document.querySelector('#scramble')

scramble.textContent = scrambler.getRandomScramble().scrambleString

button.addEventListener('click', () => {
  scramble.textContent = scrambler.getRandomScramble().scrambleString
})
