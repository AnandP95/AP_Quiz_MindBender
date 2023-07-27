


var questions = [ 


  

  {
      Que_list: "Choose the correct HTML element for the largest heading:",

      Ans_list:["<heading>",  "<head>", "<h6>","<h1>"],
      correctAnswer:3
  },

  {
      Que_list: "Which sign does jQuery use as a shortcut for jQuery?",

      Ans_list:["%",  "?", "$","&"],
      correctAnswer:2
  },

  {
      Que_list: "Which HTML attribute is used to define inline styles?",

      Ans_list:["style",  "class", "font","styles"],
      correctAnswer:3
  },

  {
      Que_list: "Choose the correct HTML element for the largest heading:",

      Ans_list:["<heading>",  "<head>", "<h6>","<h1>"],
      correctAnswer:3
  },

];

let currentQue = 0;
let score = 0;
let TotalTime = 60;
let quizFinished = false;
let timerInterval;

var allScores =[];

var startBtn = document.getElementById("start_Btn");
var QuestionEl = document.getElementById("Que_list");
var AnswerEl = document.getElementById("Ans_list");
var TimeEl = document.getElementById("timer");
var FinalResult = document.getElementById("result");
var initialsInput = document.getElementById("initials");
var SaveBtn = document.getElementById("Save_Score");
var scoreEl = document.getElementById("score");
var scoreList = document.getElementById("score-list");
var initialsInput = document.getElementById('initials');


function startQuiz() {
startBtn.style.display = "none";
document.getElementById("quiz-container").style.display = "block";
displayQuestion();
timer();
}



function saveScore(event,userScore) {
event.preventDefault();


var initials = initialsInput.value;

 
allScores.push({ initials, score });


localStorage.setItem('allScores', JSON.stringify(allScores));





var  messageElement = document.getElementById('message');
messageElement.textContent = 'Score saved successfully!';

initialsInput.value = '';
}




function displayQuestion() {
if (currentQue < questions.length) {
  var Que_list = questions[currentQue];
  QuestionEl.textContent = Que_list.Que_list;


  var OptionBtn = document.getElementsByClassName("option");
  for (let i = 0; i < OptionBtn.length; i++) {
    OptionBtn[i].textContent = Que_list.Ans_list[i];
  }
} else {
  endQuiz();
}
}



function displayAnswer(userAnswer) {
if (quizFinished) {
  return;
}
var Que_list = questions[currentQue];
if (userAnswer == Que_list.correctAnswer) {
  score = score + 25;
  document.getElementById("message").textContent ="Correct Answer";
} else {
  TotalTime = Math.max(TotalTime - 10, 0);
  document.getElementById("message").textContent ="Wrong Answer";
}
if (currentQue === questions.length - 1) {
  quizFinished = true;
  clearInterval(timerInterval);
  endQuiz();
} else {
  currentQue++;
  displayQuestion();
}
}



function timer() {
TimeEl.textContent = TotalTime;
timerInterval = setInterval(function () {
  TotalTime--;
  if (TotalTime >= 0) {
    TimeEl.textContent = "Time left: " + TotalTime + " seconds";
  } else {
    clearInterval(timerInterval);
    endQuiz();
  }
}, 1000);
}



function endQuiz() {
clearInterval(timerInterval);
document.getElementById("quiz-container").style.display = "none";
FinalResult.style.display = "block";

scoreEl.textContent = score;
TimeEl.textContent = "Time left: " + TotalTime + " seconds";
loadScoresFromLocalStorage();
}



function loadScoresFromLocalStorage(){

  var storedScores = localStorage.getItem("allScores");

  if (storedScores) {
    allScores = JSON.parse(storedScores);
    scoreList.innerHTML = '';

    allScores.forEach((entry) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${entry.initials}: ${entry.score}`;
      scoreList.appendChild(listItem);

} );
  }
}

