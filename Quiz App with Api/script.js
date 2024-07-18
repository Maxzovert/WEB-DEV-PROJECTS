let quesNum = document.getElementById("q-num");
let quesText = document.getElementById("q-txt");
let opt1 = document.getElementById("option1");
let opt2 = document.getElementById("option2");
let opt3 = document.getElementById("option3");
let opt4 = document.getElementById("option4");
let nxtbtn = document.getElementById("next-button");
let quesTime = document.getElementById("timer");


let currentQues = 0;
let score = 0;
let time;
const totalTime = 10;
let sec = totalTime;


function timer() {
    quesTime.innerHTML = sec;
    sec--;
    if (sec == 0) {
        sec = totalTime;
        clearInterval(time);
        checkIfScore();
        currentQues++;
        showQues();
    }
}

function checkIfScore(){
    let optSelcted = document.querySelector('input[name=opt]:checked')

    let correctOpt = quizQues[currentQues].correct;
    if(optSelcted!=null){
        if(optSelcted.id==correctOpt){
            score++;
        }
    }
}

function showQues() {

    sec = totalTime;
    clearInterval(time)
    timer();
    time = setInterval(timer, 1000);

    document.querySelectorAll("input[name=opt]").forEach(option => option.checked = false)

    if (currentQues >= quizQues.length) {
        gotoResultPage();
    }

    quesNum.innerHTML = (currentQues + 1) + ". ";
    quesText.innerHTML = quizQues[currentQues].question;
    opt1.innerHTML = quizQues[currentQues].opt1;
    opt2.innerHTML = quizQues[currentQues].opt2;
    opt3.innerHTML = quizQues[currentQues].opt3;
    opt4.innerHTML = quizQues[currentQues].opt4;
}

nxtbtn.addEventListener('click', () => {
    checkIfScore();
    currentQues++;
    if(currentQues>=quizQues.length){
        gotoResultPage();
    }
    else {
            showQues();
        }
    });

function gotoResultPage() {
    currentQues = 0;
    localStorage.setItem("score", score);
    location.href = "./result.html"
}

let quizQues = [];
const URL = 'question.json'
async function getData(){
    const response = await fetch(URL);
    const data = await response.json();
    quizQues = data;
    console.log(quizQues);
    showQues();
}
getData();