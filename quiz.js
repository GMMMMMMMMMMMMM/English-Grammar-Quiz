document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    
    function loadQuiz() {
        const randomRules = grammarRules.sort(() => 0.5 - Math.random()).slice(0, 15);
        let currentQuestionIndex = 0;
        let score = 0;

        function showQuestion() {
            const rule = randomRules[currentQuestionIndex];
            quizContainer.innerHTML = `
                <h2>${rule.rule}</h2>
                <p>${rule.explanation}</p>
                <p>${rule.example}</p>
                ${rule.options.map((option, index) => `
                    <button class="option" data-correct="${option.correct}">${option.text}</button>
                `).join('')}
            `;
            document.querySelectorAll('.option').forEach(button => {
                button.addEventListener('click', selectOption);
            });
        }

        function selectOption(e) {
            const selectedButton = e.target;
            const correct = selectedButton.dataset.correct === 'true';
            if (correct) {
                selectedButton.classList.add('correct');
                score++;
            } else {
                selectedButton.classList.add('incorrect');
            }
            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < randomRules.length) {
                    showQuestion();
                } else {
                    showResults();
                }
            }, 1000);
        }

        function showResults() {
            quizContainer.innerHTML = `
                <h2>Your Score: ${score}/${randomRules.length}</h2>
                <button id="restart">Restart Quiz</button>
            `;
            document.getElementById('restart').addEventListener('click', loadQuiz);
        }

        showQuestion();
    }

    loadQuiz();
});
