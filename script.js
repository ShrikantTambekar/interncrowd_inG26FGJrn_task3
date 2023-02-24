const quizData = [
    {
        question: "What does HTML stand for?",
        ans1: "Hypertext Markup Language",
        ans2: "Hypertext Markdown Language",
        ans3: "Hyperloop Machine Language",
        ans4: "Helicopters Terminals Motorboats Lamborginis",
        correct: "ans1",
    },
    {
        question: "Correct syntax of doctype in HTML5 is",
        ans1: "</DOCTYPE HTML>",
        ans2: "<DOCTYPE HTML>",
        ans3: "<DOCTYPE HTML!",
        ans4: "<!DOCTYPE HTML>",
        correct: "ans4",
    },
    {
        question: "What does CSS stand for?",
        ans1: "Central Style Sheets",
        ans2: "Cascading Style Sheets",
        ans3: "Cascading Simple Sheets",
        ans4: "Cars SUVs Sailboats",
        correct: "ans2",
    },
    {
        question: "How can we write comments in CSS?",
        ans1: "/* */",
        ans2: "//",
        ans3: "#",
        ans4: "All of the above",
        correct: "ans1",
    },
    {
        question: "What year was JavaScript launched?",
        ans1: "1996",
        ans2: "1995",
        ans3: "1994",
        ans4: "none of the above",
        correct: "ans2",
    },
];
const quiz= document.getElementById('quiz')
const ansEls = document.querySelectorAll('.ans')
const questionEl = document.getElementById('question')
const opt1 = document.getElementById('opt1')
const opt2 = document.getElementById('opt2')
const opt3 = document.getElementById('opt3')
const opt4 = document.getElementById('opt4')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    opt1.innerText = currentQuizData.ans1
    opt2.innerText = currentQuizData.ans2
    opt3.innerText = currentQuizData.ans3
    opt4.innerText = currentQuizData.ans4
}
function deselectAnswers() {
    ansEls.forEach(ansEl => ansEl.checked = false)
}
function getSelected() {
    let ans
    ansEls.forEach(ansEl => {
        if(ansEl.checked) {
            ans = ansEl.id
        }
    })
    return ans
}
submitBtn.addEventListener('click', () => {
    const ans = getSelected()
    if(ans) {
       if(ans == quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">RELOAD</button>
           `
       }
    }
})