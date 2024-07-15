import grammarRules from './grammarRules.js';

const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const scoreContainer = document.getElementById('score');
const explanationsContainer = document.getElementById('explanations');

let currentQuestionIndex = 0;
let score = 0;
let selectedRules = [];

function startQuiz() {
    selectedRules = grammarRules.sort(() => 0.5 - Math.random()).slice(0, 15);
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.innerHTML = '';
    showQuestion();
}

function showQuestion() {
    const rule = selectedRules[currentQuestionIndex];
    const questionHtml = `
        <div class="question">
            <h2>${rule.rule}</h2>
            <p>${rule.explanation}</p>
            <p>${rule.example}</p>
            ${rule.options.map((option, index) => `
                <button onclick="checkAnswer(${index})">${option.text}</button>
            `).join('')}
        </div>
    `;
    quizContainer.innerHTML = questionHtml;
}

function checkAnswer(selectedIndex) {
    const rule = selectedRules[currentQuestionIndex];
    const isCorrect = rule.options[selectedIndex].correct;

    if (isCorrect) {
        score++;
        document.querySelectorAll('button')[selectedIndex].classList.add('correct');
    } else {
        document.querySelectorAll('button')[selectedIndex].classList.add('incorrect');
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedRules.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

function showResults() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreContainer.textContent = score;

    const explanationsHtml = selectedRules.map(rule => `
        <h3>${rule.rule}</h3>
        <p>${rule.explanation}</p>
        <p>Example: ${rule.example}</p>
    `).join('');
    explanationsContainer.innerHTML = explanationsHtml;
}

function restartQuiz() {
    resultContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    startQuiz();
}

startQuiz();
