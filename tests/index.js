/**
 * @flow
 */

const test = require('ava')
const scramby = require('../src')

test('it can generate 2x2 and 3x3 scrambles', async t => {
  const validChars = [
    'U', "U'", 'U2',
    'D', "D'", 'D2',
    'F', "F'", 'F2',
    'B', "B'", 'B2',
    'L', "L'", 'L2',
    'R', "R'", 'R2'
  ]

  const scrambler2x2 = scramby('222')
  const scramble2x2 = scrambler2x2.getRandomScramble().scrambleString
  const chars2x2 = scramble2x2.split(' ')
  t.true(chars2x2.every(char => validChars.includes(char)))

  const scrambler3x3 = scramby('333')
  const scramble3x3 = scrambler3x3.getRandomScramble().scrambleString
  const chars3x3 = scramble3x3.split(' ')
  t.true(chars3x3.every(char => validChars.includes(char)))
})

test('it can generate 4x4 and 5x5 scrambles', async t => {
  const validChars = [
    'U', "U'", 'U2', 'Uw', "Uw'", 'Uw2',
    'D', "D'", 'D2', 'Dw', "Dw'", 'Dw2',
    'F', "F'", 'F2', 'Fw', "Fw'", 'Fw2',
    'B', "B'", 'B2', 'Bw', "Bw'", 'Bw2',
    'L', "L'", 'L2', 'Lw', "Lw'", 'Lw2',
    'R', "R'", 'R2', 'Rw', "Rw'", 'Rw2'
  ]

  const scrambler4x4 = scramby('444')
  const scramble4x4 = scrambler4x4.getRandomScramble().scrambleString
  const chars4x4 = scramble4x4.split(' ')
  t.true(chars4x4.every(char => validChars.includes(char)))

  const scrambler5x5 = scramby('555')
  const scramble5x5 = scrambler5x5.getRandomScramble().scrambleString
  const chars5x5 = scramble5x5.split(' ')
  t.true(chars5x5.every(char => validChars.includes(char)))
})

test('it can generate 6x6 and 7x7 scrambles', async t => {
  const validChars = [
    'U', "U'", 'U2', '2U', "2U'", '2U2', '3U', "3U'", '3U2',
    'D', "D'", 'D2', '2D', "2D'", '2D2', '3D', "3D'", '3D2',
    'F', "F'", 'F2', '2F', "2F'", '2F2', '3F', "3F'", '3F2',
    'B', "B'", 'B2', '2B', "2B'", '2B2', '3B', "3B'", '3B2',
    'L', "L'", 'L2', '2L', "2L'", '2L2', '3L', "3L'", '3L2',
    'R', "R'", 'R2', '2R', "2R'", '2R2', '3R', "3R'", '3R2'
  ]

  const scrambler6x6 = scramby('666')
  scrambler6x6.initialize()
  const scramble6x6 = scrambler6x6.getRandomScramble().scrambleString
  const chars6x6 = scramble6x6.split(' ')
  t.true(chars6x6.every(char => validChars.includes(char)))

  const scrambler7x7 = scramby('777')
  scrambler7x7.initialize()
  const scramble7x7 = scrambler7x7.getRandomScramble().scrambleString
  const chars7x7 = scramble7x7.split(' ')
  t.true(chars7x7.every(char => validChars.includes(char)))
})
