const quizQues = [
    {
        question: "Which language runs in web browser?",
        opt1: "Java",
        opt2: "c",
        opt3: "Python",
        opt4: "JavaScript",
        correct: "opt4",
    },

    {
        question: "What does css stands for?",
        opt1: "Central Style sheets",
        opt2: "Cascading style sheets",
        opt3: "Cascading simple sheets",
        opt4: "Cars SUV Sailboat",
        correct: "opt2",
    },

    {
        question: "What does HTML stands for?",
        opt1: "Hypertext Markup language",
        opt2: "Hypertext MArkdown language",
        opt3: "Hyperloop Machine language",
        opt4: "Helicpter Terminals Motorboats Lambo",
        correct: "opt1",
    },

    {
        question: "What year was javacript launched?",
        opt1: "1969",
        opt2: "1995",
        opt3: "2001",
        opt4: "NOB",
        correct: "opt2",
    },
];

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
        currentQues++;
        showQues();
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
    let optSelcted = document.querySelector('input[name=opt]:checked')

    if (optSelcted == null) {
        alert("Please select one option")
    } else {
        let correctOpt = quizQues[currentQues].correct
        if (optSelcted.id == correctOpt) {
            score++;
        }
        currentQues++;
        if (currentQues >= quizQues.length) {
            gotoResultPage();
        } else {
            showQues();
        }
    }
});

showQues();
function gotoResultPage() {
    currentQues = 0;
    localStorage.setItem("score", score);
    location.href = "./result.html"
}