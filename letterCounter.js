// Implement a compression algorithm that will count letters, e.g.
// coooooobalt => c6xobalt (or: 1xc6xo1xb1xa1xl1xt)
// stttartuuuup => s3xtart4xup (or: 1xs3xt1xa1xr1xt4xu1xp)
// Use the language/technology you feel strong in.

function letterCounter(word) {
  let currentLetter;
  let result = '';

  for (let i = 0; i < word.length; i++) {
    currentLetter = word[i];
    let count = 0;
    while (i < word.length && currentLetter === word[i + 1]) {
      count++;
      i++;
    }

    result = result + (count + 1) + 'x' + word[i];
  }

  return result;
}