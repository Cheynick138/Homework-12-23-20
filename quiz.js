//variables //
var timer = document.getElementById("timer");
var timeCounter = document.getElementById("timeCounter")
var setTimer = 75
var btnStart = document.getElementById("start-btn");
var questionBox = document.getElementById("question-box")
var startBox = document.getElementById("quizStart")




var questions = [
    {
        promptQuestion: "which Data type contains multiple data types that are separated by commas and has a simular name to a sea creature?",
        choices: ["stings", "boolance", "array", "objects"],
        correctAns: "array"
    },
    {
        promptQuestion: "which Data type contains multiple data types that are separated by commas and has a simular name to a sea creature?",
        choices: ["stings", "boolance", "arrays", "objects"],
        correctAns: "arrays"
    },
    {
        promptQuestion:"which Data type contains multiple data types that are separated by commas and has a simular name to a sea creature?",
        choices: ["stings", "boolance", "arrays", "objects"],
        correctAns: "arrays"
    },
    {
        promptQuestion: "which Data type contains multiple data types that are separated by commas and has a simular name to a sea creature?",
        choices: ["stings", "boolance", "arrays", "objects"],
        correctAns: "arrays"
    },
    {
        promptQuestion: "which Data type contains multiple data types that are separated by commas and has a simular name to a sea creature?",
        choices: ["stings", "boolance", "arrays", "objects"],
        correctAns: "arrays"
    }

]


btnStart.addEventListener("click",startQuiz);
function startQuiz(){
    questionBox.classList.remove("d-n");
    startBox.classList.add("d-n");
    timeCounter.classList.remove("d-n");
    




}
