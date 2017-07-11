/**
 * @flow
 */

const scramblers = {
  '222': require('./scramblers/222'),
  '333': require('./scramblers/333'),
  '444': require('./scramblers/NNN')['444'],
  '555': require('./scramblers/NNN')['555'],
  '666': require('./scramblers/NNN')['666'],
  '777': require('./scramblers/NNN')['777']
}

type Scramble = {
  state: string,
  scrambleString: string
}

type Scrambler = {
  initialize: () => void,
  getRandomScramble: () => Scramble,
  drawScramble: (
    el: HTMLElement,
    state: string,
    width: number,
    height: number
  ) => any
}

type Puzzle = '222' | '333' | '444' | '555' | '666' | '777'

function scramby(puzzle: Puzzle = '333'): Scrambler {
  if (!scramblers[puzzle]) {
    throw new Error(`There is no scrambler for ${puzzle}`)
  }

  const scrambler: Scrambler = scramblers[puzzle]
  return scrambler
}

module.exports = scramby
