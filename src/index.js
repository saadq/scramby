const scramblers = {
  '333': require('./scramblers/333'),
  '444': require('./scramblers/NNN')['444'],
  '555': require('./scramblers/NNN')['555'],
  '666': require('./scramblers/NNN')['666'],
  '777': require('./scramblers/NNN')['777']
}

/**
 * Generates scrambles for various puzzles.
 *
 * @param {number} [count=1] The amount of scrambles to generate.
 * @param {string} [type='333'] The type of puzzle to generate scramble for.
 *
 * @return {String|Array<String>} A string or an array of strings containing the moves for the scramble(s).
 */

function scramby({ count = 1, type = '777' } = {}) {
  if (!scramblers[type]) {
    throw new Error(`There is no scrambler for ${type}`)
  }

  const scrambler = scramblers[type]
  scrambler.initialize()

  return count <= 1
    ? scrambler.getRandomScramble().scramble_string
    : Array.from({ length: count }).map(
        () => scrambler.getRandomScramble().scramble_string
      )
}

module.exports = scramby
