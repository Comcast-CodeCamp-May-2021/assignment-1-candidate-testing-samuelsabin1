const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  const input=require('readline-sync');


let askName=['Candidate Name: '];
let userAnswers=[];
let arrayAnswers=[];  
let candidatesName=[];

function askForCandidateName(){
  for (let i=0; i< askName.length; i++){
   name = input.question(askName[i]);
  
  }
  return candidatesName.push(name);
}

function askQuestions(){
  
  let questions=['1) Who was the first American woman in space? \n','2) True or false: 5000 meters = 5 kilometers. \n', '3) (5 + 3)/2 * 10 = ? \n', '4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2? \n', '5) What is the minimum crew size for the ISS? \n'];

  let arrayAnswers=[];

  for (let i=0; i< questions.length; i++){
 answers = (input.question(questions[i]));
 arrayAnswers.push((answers));
}
return arrayAnswers;

// userAnswers.push((arrayAnswers));
}
// user inputs always come in as a String - no need to convert. 
// Instead of checking specific spellings, see if there's a string method you can use to convert the user input so you only have to check one spelling
// use a for loop to check the answers in the array of user answers instead of hard coding it *** do this after you get checks for hard coded answers working. ;) 

// function checkAnswers()
function checkAnswers(){
let userAnswers = askQuestions(); 
let checkingAnswers= userAnswers;

let initialScore=0;
let questionCount=0;
let overallTestStatus='';
    if (String(checkingAnswers[0]) === 'sally ride' || String(checkingAnswers[0]) === 'Sally Ride' || String(checkingAnswers[0]) ==='sally Ride' || String(checkingAnswers[0]) === 'Sally ride'){
      initialScore= 100;
      questionCount= 1;
    }

    
    if (String(checkingAnswers[1]) === 'true' ||String(checkingAnswers[1])==='TRUE'||String(checkingAnswers[1])==='True'){
      initialScore = initialScore + 100;
      questionCount = questionCount + 1;
    }
    
    if(String(checkingAnswers[2])=== '40'){
      initialScore = initialScore + 100;
      questionCount = questionCount + 1;
    }

    
    if(String(checkingAnswers[3])==='Trajectory'|| String(checkingAnswers[3])==='trajectory'){
      initialScore = initialScore + 100;
      questionCount = questionCount + 1;
    }

    
    if(String(checkingAnswers[4])==='3'){
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

     
  
  // console.log(checkingAnswers);
  // console.log(initialScore);
  // console.log(totalScore);


console.log(`
Candidate Name: ${name}
1) Who was the first American woman in Space?
Your Answer: ${checkingAnswers[0]}
Correct Answer: Sally Ride\n

2) True or false: 5000 meters = 5 kilometers.
Your Answer: ${checkingAnswers[1]}
Correct Answer: true\n

3) (5+3)/2 * 10 = ?
Your Answer: ${checkingAnswers[2]}
Correct Answer: 40\n

4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?
Your Answer: ${checkingAnswers[3]}
Correct Answer: Trajectory\n

5) What is the minimum crew size for the ISS?
Your answer: ${checkingAnswers[4]}
Correct Answer: 3\n

>>> Overall Grade: ${totalScore}% (${finalQuestionCount} of 5 responses correct) <<<
>>>Status: ${overallTestStatus}<<<`);


}

function displayResults(finalResults){
let candidateName= askForName;
let userAnswers=checkAnswers;


}

console.log(askForCandidateName());
// console.log(askQuestions());
console.log(checkAnswers()); 
// displayResults(askForName,askQuestions,checkAnswers);
// console.log(finalScore);
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