const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName=[];
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let askName=['Candidate Name: '];

let question;
let correctAnswer;
let candidateAnswer=[];
let questions=['1) Who was the first American woman in space? \n','2) True or false: 5000 meters = 5 kilometers. \n', '3) (5 + 3)/2 * 10 = ? \n', '4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2? \n', '5) What is the minimum crew size for the ISS? \n'];
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  for (let i=0; i< askName.length; i++){
   name = input.question(askName[i]);
  
  }
  return candidateName.push(name);

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  let candidateAnswer=[];

  for (let i=0; i< questions.length; i++){
 answers = (input.question(questions[i]));
 candidateAnswer.push((answers));
}
return candidateAnswer;
}

function gradeQuiz(candidateAnswers) {
  let userAnswers = askQuestion(); 

let initialScore=0;
let questionCount=0;
let overallTestStatus='';
    if (String(userAnswers[0]) === 'sally ride' || String(userAnswers[0]) === 'Sally Ride' || String(userAnswers[0]) ==='sally Ride' || String(userAnswers[0]) === 'Sally ride'){
      initialScore= 100;
      questionCount= 1;
    }

    
    if (String(userAnswers[1]) === 'true' ||String(userAnswers[1])==='TRUE'||String(userAnswers[1])==='True'){
      initialScore = initialScore + 100;
      questionCount = questionCount + 1;
    }
    
    if(String(userAnswers[2])=== '40'){
      initialScore = initialScore + 100;
      questionCount = questionCount + 1;
    }

    
    if(String(userAnswers[3])==='Trajectory'|| String(userAnswers[3])==='trajectory'){
      initialScore = initialScore + 100;
      questionCount = questionCount + 1;
    }

    
    if(String(userAnswers[4])==='3'){
      initialScore= initialScore +100;
      questionCount = questionCount + 1;
    }
    
    
    let totalScore= (initialScore) / 5;
    let finalQuestionCount= (questionCount) + 0;

    if(totalScore >= 80){
      overallTestStatus="passed";
    }
    else{
      overallTestStatus="failed";
    }

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

console.log(`
Candidate Name: ${name}
1) Who was the first American woman in Space?
Your Answer: ${userAnswers[0]}
Correct Answer: Sally Ride\n

2) True or false: 5000 meters = 5 kilometers.
Your Answer: ${userAnswers[1]}
Correct Answer: true\n

3) (5+3)/2 * 10 = ?
Your Answer: ${userAnswers[2]}
Correct Answer: 40\n

4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?
Your Answer: ${userAnswers[3]}
Correct Answer: Trajectory\n

5) What is the minimum crew size for the ISS?
Your answer: ${userAnswers[4]}
Correct Answer: 3\n

>>> Overall Grade: ${totalScore}% (${finalQuestionCount} of 5 responses correct) <<<
>>>Status: ${overallTestStatus}<<<`);


  // let grade;
  

  // return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  // askQuestion();
  // gradeQuiz(this.candidateAnswers);
  //added this line
  gradeQuiz();
  

}

function displayResults(finalResults){
let candidateName= askForName;

let userAnswers=checkAnswers;

}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};