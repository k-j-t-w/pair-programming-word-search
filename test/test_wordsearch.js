const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return false if the array is empty", function() {
    const result = wordSearch([], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present forwards", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present backwards", function() {
    const result = wordSearch([
      ["l", "p", "h", "z"],
      ["y", "e", "t", "a"],
      ["w", "e", "b", "s"],
      ["h", "d", "o", "n"]
        ], "ate")

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically down", function() {
    const result = wordSearch([
      [ 'l', 'y', 'w', 'h' ],
      [ 'p', 'a', 'e', 'd' ],
      [ 'h', 't', 'b', 'o' ],
      [ 'z', 'e', 's', 'n' ]
       ], "yate")

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically up", function() {
    const result = wordSearch([
      [ 'l', 'y', 'w', 'h' ],
      [ 'p', 'e', 'e', 'd' ],
      [ 'h', 't', 'b', 'o' ],
      [ 'z', 'a', 's', 'n' ]
       ], "ate")

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally top left to bottom right", function() {
    const result = wordSearch([
      ["l", "a", "e", "z"],
      ["y", "q", "t", "q"],
      ["q", "q", "b", "e"],
      ["h", "d", "o", "n"]
        ], "ate")

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally top right to bottom left", function() {
    const result = wordSearch([
      ["l", "p", "a", "z"],
      ["y", "t", "t", "c"],
      ["e", "e", "b", "s"],
      ["h", "d", "o", "n"]
      ], "ate")

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally bottom left to top right", function() {
    const result = wordSearch([
      [ 'l', 'y', 'w', 'h' ],
      [ 'p', 'q', 'e', 'd' ],
      [ 'h', 't', 'b', 'o' ],
      [ 'a', 'e', 's', 'n' ]
       ], "ate")

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally bottom right to top left", function() {
    const result = wordSearch([
      [ 'l', 'y', 'w', 'h' ],
      [ 'e', 'q', 'q', 'd' ],
      [ 'h', 't', 'b', 'o' ],
      [ 'z', 'q', 'a', 'n' ]
      ], "ate")

    assert.isTrue(result);
  });

});
