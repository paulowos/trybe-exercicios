const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verify = (templete, answers) => {
  if (answers === 'N.A') return 0;
  if (answers === templete) return 1;
  return -0.5;
};

const points = (rightAnswers, studentsAnswers, callback) => {
  let total = 0;
  rightAnswers.forEach((element, index) => {
    total += callback(element, studentsAnswers[index]);
  });
  return total;
};

console.log(points(RIGHT_ANSWERS, STUDENT_ANSWERS, verify));