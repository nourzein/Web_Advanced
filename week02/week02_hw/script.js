//each question is one object, within each question, each component is an object (question, choices, answer)

//you can also run function to radomize quiz order if you wanted
let quizData = [
  {
    question: "What is the male part of the plant",
    answer: {
      a: "Stigma",
      b: "Stamens",
      c: "Pollen"
    },
    correctAnswer: "a"
  },
  {
    question: "How could you tell the age of most trees?",
    answer: {
      a: "by measuring the tree's height",
      b: "by measuring the tree's width",
      c: "by measuring the rings are the tree's trunk"
    },
    correctAnswer: "c"
  },

  {
    question: "What are leaves for?",
    answer: {
      a: "to make the plant look pretty",
      b: "to soak up the sun's energy and make the plant look good",
      c: "to protect the plant from rain"
    },
    correctAnswer: "b"
  }
];

function makeQuiz() {
  const output = [];

  quizData.forEach((question, i) => {
    const answerOptions = [];
    for (letter in question.answer) {
      answerOptions.push(`<label>
  <input type="radio" name="question${i}" value="${letter}">
  ${letter} :
  ${question.answer[letter]}
</label>`);
    }
    output.push(`<div class="question"> ${question.question} </div>
    <div class= "answers"> ${answerOptions.join("")} </div>`); //.join('') removes commas and seperates by space
  });
  quiz.innerHTML = output.join("");
}

function giveResults() {
  const answerBoxes = quiz.querySelectorAll(".answers");
  let correctAnswer = 0;
  quizData.forEach((question, i) => {
    const answerBox = answerBoxes[i];
    const selector = `input[name=question${i}]:checked`;
    const selectedAnswer = (answerBox.querySelector(selector) || {}).value;

    if (selectedAnswer === question.correctAnswer) {
      correctAnswer++;
      selectedAnswer.style.color = "green";
    }
    // else {
    //   selectedAnswer.style.color = "red";
    // }
  });
  results.innerHTML = `${correctAnswer} out of ${quizData.length}`;
}

//run makeQuiz

// create function for submitting results (this will run whne submit is clicked)

//find the divs in the html page
const quiz = document.querySelector("#quiz");
let results = document.getElementsByClassName("results");
var submitButton = document.querySelector("button");
console.log(submitButton);

makeQuiz();

//for the submit button, run the "give results" function when it is "clicked"
submitButton.addEventListener("click", giveResults);

//create functions for making the quiz
