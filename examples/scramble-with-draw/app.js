const scramby = require('../../lib')

const scrambleNode = document.querySelector('#scramble')
const drawNode = document.querySelector('#draw')

const scramble = scramby({
  type: '222',
  draw: { el: drawNode, width: 300, height: 180 }
})

scrambleNode.textContent = scramble
