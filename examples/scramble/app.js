const scramby = require('../../lib')

// Options passed to specify how to draw the scramble
const drawOpts = {
  el: document.querySelector('#draw'),
  width: 300,
  height: 180
}

// Generate a scramble and draw it to the screen
const scramble = scramby({
  type: '222',
  draw: drawOpts
})

// Write the scramble string to the screen
document.querySelector('#scramble').textContent = scramble
