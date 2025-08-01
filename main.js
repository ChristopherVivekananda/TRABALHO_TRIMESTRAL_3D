const questions = [
    {
        question: "(CNU) Em uma repartição pública trabalham 12 servidores. Cada servidor trabalha em apenas um dos três setores: A, B ou C. Sabe-se que: o número de servidores do setor A é o dobro do número de servidores do setor B; o setor C tem 2 servidores a mais que o setor B. Quantos servidores trabalham no setor B?",
        answers: [
            { id: 1, text: "2", correct: true },
            { id: 2, text: "3", correct: false },
            { id: 3, text: "4", correct: false },
            { id: 4, text: "5", correct: false }
        ]
    },
    {
        question: "(CNU) Em 2024, o Brasil sediou a Cúpula do G20. Sobre o G20, assinale a alternativa correta:",
        answers: [
            { id: 1, text: "É um grupo formado exclusivamente por países desenvolvidos.", correct: false },
            { id: 2, text: "É um fórum internacional que discute economia global e desenvolvimento sustentável.", correct: true },
            { id: 3, text: "Reúne as 20 maiores democracias do mundo.", correct: false },
            { id: 4, text: "Tem sede fixa em Washington, nos Estados Unidos.", correct: false }
        ]
    },
    {
        question: "(CNU) Qual é o menor país do mundo em território?",
        answers: [
            { id: 1, text: "Vaticano", correct: true },
            { id: 2, text: "Butão", correct: false },
            { id: 3, text: "Nepal", correct: false },
            { id: 4, text: "Sri Lanka", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.dataset.id = answer.id;
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    nextButton.classList.remove("show");
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const answers = questions[currentQuestionIndex].answers;
    const correctAnswer = answers.filter((answer) => answer.correct == true)[0];
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
    
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    
    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.id == correctAnswer.id) {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    
    nextButton.style.display = "block";
    nextButton.classList.add("show");
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length} questões!`;
    nextButton.innerHTML = "Reiniciar Quiz";
    nextButton.style.display = "block";
    nextButton.classList.add("show");
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

let trilho = document.getElementById('trilho');
        let body = document.body;

        trilho.addEventListener('click', () => {
            trilho.classList.toggle('dark');
            body.classList.toggle('dark');
        });

// Iniciar o quiz quando a página carregar
window.addEventListener('DOMContentLoaded', function() {
    startQuiz();
});