const questions = [
    {
        question: "Which animal is the largest?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },

    {
        question: "Which one is the monkey?",
        answers: [
            { text: "Jacky", correct: false },
            { text: "Raymond", correct: false },
            { text: "Marcus", correct: false },
            { text: "Kyle", correct: true },
        ]
    },

    {
        question: "What do you call the result of division?",
        answers: [
            { text: "Quotient", correct: true },
            { text: "Sum", correct: false },
            { text: "Product", correct: false },
            { text: "Exponent", correct: false },
        ]
    },

    {
        question: "Which artist has the most monthly listeners on Spotify?",
        answers: [
            { text: "Taylor Swift", correct: false },
            { text: "The Weeknd", correct: true },
            { text: "Kendrick Lamar", correct: false },
            { text: "Bruno Mars", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtonElements = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

const showScore = () => {
    resetState();
    questionElement.innerHTML = `Your scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

const showQuestion = () => {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNum + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtonElements.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", (e) => {
            const selectedBtn = e.target;
            const isCorrect = selectedBtn.dataset.correct === "true";
            if (isCorrect) {
                selectedBtn.classList.add("correct");
                score++;
            }
            else {
                selectedBtn.classList.add("incorrect")
            }

            Array.from(answerButtonElements.children).forEach(button => {
                if (button.dataset.correct === "true") {
                    button.classList.add("correct");
                }
                button.disabled = true;
            });
            nextButton.style.display = "block";
        })
    });
}

const resetState = () => {
    nextButton.style.display = "none";
    while(answerButtonElements.firstChild) {
        answerButtonElements.removeChild(answerButtonElements.firstChild);
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

const handleNextButton = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

startQuiz();