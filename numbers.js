const score1 = 33, score2 = 52, score3 = 18;
let total_score = score1 + score2 + score3,
average = total_score / 3;

console.log(total_score, Math.round(average * 100) / 100); // I use round function to shorten the decimals

let plates = 20,
people = 7,
remaining_plates = plates - people;

// increment remaining platest by 1
remaining_plates++;

let message = `There are ${remaining_plates} plates available`

console.log(message);

