const questions = [
  {
    question: "(CNU) Em uma repartição pública trabalham 12 servidores. Cada servidor trabalha em apenas um dos três setores: A, B ou C. Sabe-se que:",
    answers: [
      { id: 1, text: "2", correct: true },
      { id: 2, text: "3", correct: false },
      { id: 3, text: "4", correct: false },
      { id: 4, text: "5", correct: false },
      { id: 5, text: "6", correct: false },
    ],
  },
  {
    question: "(CNU) Em 2024, o Brasil sediou a Cúpula do G20. Sobre o G20, assinale a alternativa correta:",
    answers: [
      { id: 1, text: "É um grupo formado exclusivamente por países desenvolvidos.", correct: false },
      { id: 2, text: "É um fórum internacional que discute economia global e desenvolvimento sustentável.", correct: true },
      { id: 3, text: "Reúne as 20 maiores democracias do mundo.", correct: false },
      { id: 4, text: "Tem sede fixa em Washington, nos Estados Unidos", correct: false },
      { id: 5, text: "Tem como foco principal a segurança internacional e operações militares.", correct: false },
    ],
  },
  {
    question: "(CNU) De acordo com o Código de Ética do Servidor Público Federal (Decreto nº 1.171/1994), é vedado ao servidor público:",
    answers: [
      { id: 1, text: "Utilizar o cargo para obter vantagens pessoais.", correct: true },
      { id: 2, text: "Exercer cargo de direção na iniciativa privada.", correct: false },
      { id: 3, text: "Ser cordial com os colegas de trabalho.", correct: false },
      { id: 4, text: "Participar de movimentos sindicais.", correct: false },
      { id: 5, text: "Aceitar presentes de baixo valor sentimental.", correct: false },
    ],
  },
  {
    question: "(CNU) Segundo a Constituição Federal de 1988, é correto afirmar:",
    answers: [
      { id: 1, text: "A Constituição não reconhece os tratados internacionais de direitos humanos.", correct: false },
      { id: 2, text: "Os municípios não possuem autonomia legislativa.", correct: false },
      { id: 3, text: "A República Federativa do Brasil é formada pela união indissolúvel dos Estados, Municípios e Distrito Federal.", correct: true },
      { id: 4, text: "Os direitos sociais não fazem parte dos direitos fundamentais.", correct: false },
      { id: 5, text: "A liberdade de expressão é ilimitada pela Constituição.", correct: false },
    ],
  },
  {
    question: "(CNU) Sobre o conceito de eficiência na administração pública:",
    answers: [
      { id: 1, text: "Diz respeito exclusivamente ao corte de despesas.", correct: false },
      { id: 2, text: "Refere-se ao atendimento das necessidades dos gestores, não da população.", correct: false },
      { id: 3, text: "É um princípio explícito na Constituição Federal desde a Reforma de 1998.", correct: true },
      { id: 4, text: "Está vinculado à hierarquia militar.", correct: false },
      { id: 5, text: "Não possui relação com a qualidade dos serviços prestados.", correct: false },
    ],
  },
  {
    question: "(CNU) Se toda política é pública, e toda ação pública deve ser transparente, então:",
    answers: [
      { id: 1, text: "Toda política deve ser secreta.", correct: false },
      { id: 2, text: "Nenhuma política precisa de transparência.", correct: false },
      { id: 3, text: "Toda política deve ser transparente.", correct: true },
      { id: 4, text: "Toda política deve ser transparente.", correct: false },
      { id: 5, text: "A transparência e a política não se relacionam.", correct: false },
    ],
  },
  {
    question: "(CNU) Em 2024, a COP 29 discutiu medidas para conter o aquecimento global. Qual dos seguintes compromissos está relacionado ao Acordo de Paris?",
    answers: [
      { id: 1, text: "Redução do uso de armas nucleares.", correct: false },
      { id: 2, text: "Eliminação da pobreza extrema até 2025.", correct: false },
      { id: 3, text: "Limitar o aumento da temperatura média global a no máximo 1,5°C.", correct: true },
      { id: 4, text: "Proibição do uso de combustíveis fósseis até 2024.", correct: false },
      { id: 5, text: "Construção de muros contra enchentes em zonas urbanas.", correct: false },
    ],
  },
  {
    question: "(CNU) Assinale a alternativa em que a forma verbal está empregada corretamente:",
    answers: [
      { id: 1, text: "Se eu ver ele, aviso.", correct: false },
      { id: 2, text: "Nós vai no evento amanhã.", correct: false },
      { id: 3, text: "Haviam muitas pessoas na reunião.", correct: false },
      { id: 4, text: "Ela interviu na discussão.", correct: true },
      { id: 5, text: "Fazem dois anos que estudo para concursos.", correct: false },
    ],
  },

  {
    question: "(CNU) Sobre os direitos e garantias fundamentais previstos na Constituição Federal de 1988:",
    answers: [
      { id: 1, text: "Nenhum direito individual pode ser restringido, mesmo durante estado de sítio.", correct: false },
      { id: 2, text: "A casa é asilo inviolável do indivíduo, salvo em caso de flagrante delito ou desastre.", correct: true },
      { id: 3, text: "É permitido ao Estado impedir manifestações públicas de cunho político.", correct: false },
      { id: 4, text: "A tortura é permitida em casos extremos de guerra.", correct: false },
      { id: 5, text: "O sigilo das comunicações telefônicas pode ser quebrado por decisão administrativa.", correct: false },
    ],
  },
  {
    question: "(CNU) De acordo com a Constituição Federal de 1988, é um direito social expressamente previsto:",
    answers: [
      { id: 1, text: "O lucro como princípio da ordem econômica.", correct: false },
      { id: 2, text: "A livre circulação entre países membros do Mercosul.", correct: false },
      { id: 3, text: "É permitido ao Estado impedir manifestações públicas de cunho político.", correct: false },
      { id: 4, text: "A taxação de todas as manifestações artísticas.", correct: false },
      { id: 5, text: "O acesso à cultura, ao lazer e à segurança.", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("btn-section");

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
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  answers = questions[currentQuestionIndex].answers;
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
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
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

startQuiz();