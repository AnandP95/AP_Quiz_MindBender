var questions = [ 

    {
        Que_list: "Choose the correct HTML element for the largest heading:",

        Ans_list:["<heading>",  "<head>", "<h6>","<h1>"],
        correctAnswer:3
    },

    {
        Que_list: "Choose the correct HTML element for the largest heading:",

        Ans_list:["<heading>",  "<head>", "<h6>","<h1>"],
        correctAnswer:3
    },

    {
        Que_list: "Choose the correct HTML element for the largest heading:",

        Ans_list:["<heading>",  "<head>", "<h6>","<h1>"],
        correctAnswer:3
    },

    {
        Que_list: "Choose the correct HTML element for the largest heading:",

        Ans_list:["<heading>",  "<head>", "<h6>","<h1>"],
        correctAnswer:3
    },

];


let currentQue= 0;
let score = 0;
let TotalTime = 60;

var startBtn = document.getElementById("start_Btn");
var QuestionEl = document.getElementById("Que_list");
var AnswerEl = document.getElementById("Ans_list");
var TimeEl =  document.getElementById("timer");
var FinalResult= document.getElementById("result");

var InitialEl = document.getElementById("initial");
var SaveBtn = document.getElementById("Save_Score");
var scoreEl = document.getElementById("score");



function startQuiz(){
startBtn.style.display ="none";
document.getElementById("quiz-container").style.display="block";
displayQuestion();
Timer();


}
function displayQuestion() {
    if (currentQue < questions.length) {
      var Que_list = questions[currentQue];
      QuestionEl.textContent = Que_list.Que_list;

      var AnswerEl = AnswerEl.children;
      for ( let i = 0; i < AnswerEl.length; i++) {

        AnswerEl[i].textContent = Que_list.Ans_list[i];
      } }
      
      else {
        endQuiz();
      }
    
    }



    function displayAnswer(userAnswer) {
        var Que_list = questions[currentQue];
        if (userAnswer == Que_list.correctAnswer) {
          score++;
        } else {
          TotalTime = Math.max(TotalTime - 10, 0);
        }
        currentQue++;
        displayQuestion();
      }
      

      
function Timer () {

    TimeEl.textContent = TotalTime;
    var  TimeInterval = setInterval( function() {

        TotalTime--;
        if(TotalTime >= 0) {

            TimeEl.textContent  = TotalTime;
        } else {
            clearInterval(TimeInterval);
            endQuiz();
        }
    }, 1000);
}


function endQuiz (){
    document.getElementById("quiz-container").style.display = "none";

    FinalResult.style.display = "block";
    scoreEl.textContent = score;
}





    