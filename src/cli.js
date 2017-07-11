#!/usr/bin/env node

const scramby = require('.')
const meow = require('meow')
const { red } = require('chalk')

const template = `
  Usage
    $ scramby

  Options
    --puzzle, -p  Specify which puzzle you want a scramble for (222 - 777).
    --count, -c  The amount of scrambles you want.

  Examples
    $ scramby
    F  L2 B' D2 F' R2 U2 F' L2 B2 F' R' F' R' D  R' D  R  U  F' R

    $ scramby -c 2
    F' D2 B  L2 F  D2 U2 B  F2 U2 F  L  F  U2 R  D2 U' R  B  L2 F'
    U2 R' D2 L' F2 D2 L  D2 F2 D2 L  B' D  U2 B2 L  F  L  B  R  U'

    $ scramby -p 222 -c 2
    F  U  F' U2 R  U  F  R' F
    U' R' U  R  F  R' F2 R'
`

const options = {
  alias: {
    p: 'puzzle',
    c: 'count'
  }
}

const cli = meow(template, options)
const { puzzle, count = 1 } = cli.flags

try {
  const scrambler = scramby(puzzle)
  const scrambles = []

  for (let i = 0; i < count; i++) {
    scrambles.push(scrambler.getRandomScramble().scrambleString)
  }

  console.log(scrambles.join('\n'))
} catch (err) {
  console.error(red(err.message))
}
