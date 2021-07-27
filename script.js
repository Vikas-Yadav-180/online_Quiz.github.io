var timeleft = 10;
var downloadTimer;

const qus = [{
        question: "Q1: What is the capital of India?",
        a: "Delhi",
        b: "Haryana",
        c: "AP",
        d: "Punjab",
        ans: "ans1"
    },
    {
        question: "Q2: Full Form Of PM?",
        a: "Minister",
        b: "President",
        c: "Prime Minister",
        d: "President of Minister",
        ans: "ans3"
    },
    {
        question: "Q3: Best State in India?",
        a: "Delhi",
        b: "Uttar Pradesh",
        c: "Punjab",
        d: "Bihar",
        ans: "ans2"
    },
    {
        question: "Q4: Is Joining Newton School Good?",
        a: "No",
        b: "Yes",
        c: "Newton Wale Jane",
        d: "None of these",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let count = 0;
let score = 0;
const load = () => {
    const qustions = qus[count];
    question.innerText = qustions.question;
    option1.innerText = qustions.a;
    option2.innerText = qustions.b;
    option3.innerText = qustions.c;
    option4.innerText = qustions.d;
}

load();

const getAnswer = () => {
    let answer1;
    answers.forEach(currAnsElem => {
        if (currAnsElem.checked) {
            answer1 = currAnsElem.id;
        }
    });
    return answer1;
};

const deselect = () => {
    answers.forEach((currAnsElem) => currAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const answer2 = getAnswer();
    //console.log(answer2);

    if (answer2 === qus[count].ans) {
        score++;
    };
    count++;

    deselect();

    if (count < qus.length) {
        load();
        var timeleft = 10;
        downloadTimer = setInterval(function() {
            if (timeleft <= 0) {
                clearInterval(downloadTimer);
                document.getElementById("countdown").innerHTML = "Time Finished";
                document.getElementById("submit").click();
            } else {
                document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
            }
            timeleft -= 1;
        }, 1000);
    } else {
        showScore.innerHTML = `
        <h3>Score Obtained!! ${score}/${qus.length}</h3>
        <button class="btn" onclick="location.reload();">Start Again</button>
        `;
         swal("Message!!!", "...Test Over!!!");
        showScore.classList.remove('scoreArea');
        document.getElementById("countdown").innerHTML = "";
    }
});


downloadTimer = setInterval(function() {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Finished";
        document.getElementById("submit").click();
    } else {
        document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    }
    timeleft -= 1;
}, 1000);

function myStopFunction() {
    clearTimeout(downloadTimer);
}
