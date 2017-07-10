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

type Opts = {
  count?: number,
  type?: '222' | '333' | '444' | '555' | '666' | '777',
  draw?: { el: HTMLElement, width: number, height: number }
}

type Scramble = string | Array<string>

/**
 * Generates scrambles for various puzzles.
 *
 * @param [count=1] The amount of scrambles to generate.
 * @param [type='333'] The type of puzzle to generate scramble for.
 * @param [draw] The element to draw the scramble to.
 * @param [dim] The dimensions to set the drawn scramble to.
 *
 * @return {String|Array<String>} A string or an array of strings containing the scramble(s).
 */

function scramby({ type = '333', count = 1, draw }: Opts = {}): Scramble {
  if (!scramblers[type]) {
    throw new Error(`There is no scrambler for ${type}`)
  }

  const scrambler = scramblers[type]
  const { state, scrambleString } = scrambler.getRandomScramble()

  if (draw) {
    const { el, width, height } = draw
    scrambler.drawScramble(el, state, width, height)
  }

  return scrambleString
}

module.exports = scramby
