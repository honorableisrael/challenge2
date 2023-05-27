// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, 
// awarding points on a scale from 1 to 100 
// for three categories: problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), 
// and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.
function compareTriplets() {
  const arr1 = [17, 28, 30];
  const arr2 = [99, 16, 8];
  const result1 = [];
  const result2 = [];
  const addElements = (arrArg) => {
   return arrArg.reduce((sum, i) => sum + i, 0);
  };
  arr1.forEach((item1, i1) => {
    arr2.forEach((item2, i2) => {
      if (item1 > item2 && i1 === i2) {
        result1.push(1);
      }
      if (item2 > item1 && i1 === i2) {
        result2.push(1);
      }
    });
  });
  const finalResult = [addElements(result1),addElements(result2)]
  return(finalResult);
}
console.log(compareTriplets());
