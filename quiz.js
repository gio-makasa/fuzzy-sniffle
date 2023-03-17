import QData from './info.json';

const q = document.getElementById("question");
const a = document.getElementById("a").nextElementSibling;
const b = document.getElementById("b").nextElementSibling;
const c = document.getElementById("c").nextElementSibling;
const d = document.getElementById("d").nextElementSibling;
const labels = document.querySelectorAll('label');
const answers = document.querySelectorAll('input[name="answers"]');
const btn = document.getElementById("submit");

let currentq = 0;
let score = 0;
let check;
loadquiz();

function start() {
    check = 0;
    answers.forEach((answer) => {
        if (answer.checked) {
            check = 1;
        }
    });
    checker();
}

function loadquiz() {
    q.innerHTML = QData[currentq].q;
    a.innerHTML = QData[currentq].a;
    b.innerHTML = QData[currentq].b;
    c.innerHTML = QData[currentq].c;
    d.innerHTML = QData[currentq].d;
}

function checker() {
    if (check == 1) {
        let x = document.querySelector('input[name="answers"]:checked').value;

        if (x == QData[currentq].correct) {
            score++;
            document.querySelector('input[name="answers"]:checked').nextElementSibling.style.color = 'green';
        } else {
            document.querySelector('input[name="answers"]:checked').nextElementSibling.style.color = 'red';
            document.getElementById(QData[currentq].correct).nextElementSibling.style.color = 'green';
        }

        if (currentq == QData.length - 1) {
            setTimeout(result, 1000);
        } else {
            setTimeout(reset, 900);
            setTimeout(loadquiz, 1000);
            currentq++;
        }
    } else {
        alert("please, choose answer");
    }
}

function result() {
    alert('RESULT: ' + score);
    btn.disabled = true;
    btn.style.backgroundColor = 'grey';
}

function reset() {
    for (let i of labels) {
        i.style.color = "black";
    }
    document.querySelector('input[name="answers"]:checked').checked = false;
}