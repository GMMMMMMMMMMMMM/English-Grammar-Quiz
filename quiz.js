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
                <p><strong>Example:</strong> ${rule.example}</p>
                <div class="options">
                    ${rule.options.map((option, index) => `
                        <button class="option" data-correct="${option.correct}">${option.text}</button>
                    `).join('')}
                </div>
                <div id="feedback" class="feedback"></div>
                <button id="next-question" class="next-button" disabled>Next Question</button>
            `;
            document.querySelectorAll('.option').forEach(button => {
                button.addEventListener('click', selectOption);
            });

            document.getElementById('next-question').addEventListener('click', () => {
                currentQuestionIndex++;
                if (currentQuestionIndex < randomRules.length) {
                    showQuestion();
                } else {
                    showResults();
                }
            });
        }

        function selectOption(e) {
            const selectedButton = e.target;
            const correct = selectedButton.dataset.correct === 'true';
            const feedback = document.getElementById('feedback');
            if (correct) {
                selectedButton.classList.add('correct');
                feedback.textContent = "Correct!";
                score++;
            } else {
                selectedButton.classList.add('incorrect');
                feedback.textContent = "Incorrect! The correct answer is: " +
                    document.querySelector('.option[data-correct="true"]').textContent;
            }
            feedback.style.display = 'block';
            document.querySelectorAll('.option').forEach(button => {
                button.disabled = true;
            });
            document.getElementById('next-question').disabled = false;
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
