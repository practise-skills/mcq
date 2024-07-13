const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "Jane Austen", "Mark Twain", "Ernest Hemingway"],
        correct: 0
    },
    {
        question: "What is the largest planet in our Solar System?",
        choices: ["Earth", "Jupiter", "Mars", "Saturn"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElements = document.querySelectorAll(".choice");
    
    questionElement.textContent = questions[currentQuestion].question;
    choicesElements.forEach((choiceElement, index) => {
        choiceElement.textContent = questions[currentQuestion].choices[index];
    });
}

function selectAnswer(choice) {
    const isCorrect = choice === questions[currentQuestion].correct;
    if (isCorrect) {
        score++;
        document.getElementById("result").textContent = "Correct!";
    } else {
        document.getElementById("result").textContent = "Wrong!";
    }
    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
        document.getElementById("result").textContent = "";
        document.getElementById("next-button").style.display = "none";
    } else {
        document.getElementById("quiz-container").innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>`;
    }
}

loadQuestion();
