// frequency Counter Pattern
function tournamentWinner(competitions, results) {
  let winnerLookup = {};
  for (let i = 0; i < competitions.length; i++) {
    const competitors = competitions[i];
    if (results[i] === 1) {
      // awayTeam
      winnerLookup[competitors[0]]
        ? (winnerLookup[competitors[0]] += 3)
        : (winnerLookup[competitors[0]] = 3);
    } else {
      // homeTeam
      winnerLookup[competitors[1]]
        ? (winnerLookup[competitors[1]] += 3)
        : (winnerLookup[competitors[1]] = 3);
    }
  }
  var maxPoints = 0;
  var winner = "";
  for (var key in winnerLookup) {
    // console.log("key", key);
    // console.log("value", winnerLookup[key]);
    if (winnerLookup[key] > maxPoints) {
      maxPoints = winnerLookup[key];
      winner = key;
    }
  }
  return winner;
}

console.log(
  tournamentWinner(
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    [0, 0, 1]
  )
);

// ["homeTeam", "awayTeam"]
// 0        1
