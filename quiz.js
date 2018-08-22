// Japanese WWII Quiz Game!
var score = 0;

// Question1
var question1 = prompt('True or false. The bombing of Kure happened in July 1945, sinking large IJN warships.');

if (question1.toLowerCase () === 'true') {
  score += 1
} else {
  alert ('Sorry! The answer is true.');
}

// Question2
var question2 = prompt('True or false. The bombing of Hiroshima and Nagasaki consisted of many lives of young men who were in the military?');
if (question2.toLowerCase () === 'false') {
  score += 1
} else {
  alert ('Sorry! The answer is false');
}

// Question3
var question3 = prompt('What year did the automic bomb drop in Hiroshima.');
if (parseInt(question3) === 1945) {
  score += 1
} else {
  alert ('Sorry! The answer is 1945');
}

// Question4
var question4 = prompt('True or false. Harry S. Truman was president during the bombing.');
if (question4.toLowerCase () === 'true') {
  score += 1
} else {
  alert ('Sorry the answer is true');
}

// Question5
var question5 = prompt('True or false. The atomic bomb put an end to WWII.');
if (question5.toLowerCase () === 'false') {
  score +=1
} else {
  alert ('Sorry! The answer is false');
}

// Score output and Crown rewarded
if (score === 5) {
document.write ('<p> Banzai! You scored ' + score +' out of five answers correct! You win the Gold Crown</p>');
} else if (score <= 4 && score > 2) {
  document.write ('<p> Nice try! You scored ' + score +' out of five answers correct! You win the Silver Crown</p>');
} else if (score <=2 && score > 0) {
  document.write ('<p> Nice try! You scored ' + score+' out of five answers correct! You win the Bronze Crown</p>');
} else {
  document.write ('<p>Tojo Hideki is disappointed. You scored ' + score +' out of five answers correct! No crown for you!</p>');
}


