const questions = [
  {
    question: "(BB) Qual foi a principal motivação para a criação do Banco do Brasil em 1808?",
    answers: [
      { id: 1, text: "Facilitar o crédito à população rural.", correct: false },
      { id: 2, text: "Fomentar o comércio externo com os Estados Unidos.", correct: false },
      { id: 3, text: "Suprir a ausência de um banco emissor durante a chegada da família real portuguesa.", correct: true },
      { id: 4, text: "Controlar a inflação do Império.", correct: false },
      { id: 5, text: "Investir em mineração e infraestrutura.", correct: false },
    ],
  },
  {
    question: "(BB) No contexto de governança corporativa, o Banco do Brasil adota qual dos modelos?",
    answers: [
      { id: 1, text: "Monista com presidência vitalícia.", correct: false },
      { id: 2, text: "Dualista com conselho deliberativo separado da diretoria executiva.", correct: true },
      { id: 3, text: "Cooperativo com assembleias públicas.", correct: false },
      { id: 4, text: "Sindical com eleições diretas.", correct: false },
      { id: 5, text: "Parlamentar com votos proporcionais.", correct: false },
    ],
  },
  {
    question: "(BB) Em termos de compliance, qual é a principal função da Auditoria Interna no Banco do Brasil?",
    answers: [
      { id: 1, text: "Aprovar projetos estratégicos.", correct: false },
      { id: 2, text: "Gerenciar recursos humanos.", correct: false },
      { id: 3, text: "Avaliar controles internos e assegurar conformidade regulatória.", correct: true },
      { id: 4, text: "Conceder crédito a grandes empresas.", correct: false },
      { id: 5, text: "Emitir pareceres sobre política monetária.", correct: false },
    ],
  },
  {
    question: "(BB) O que significa dizer que o Banco do Brasil é uma sociedade de economia mista?",
    answers: [
      { id: 1, text: "É um banco privado com isenção fiscal total.", correct: false },
      { id: 2, text: "É controlado exclusivamente por acionistas estrangeiros.", correct: false },
      { id: 3, text: "Possui capital público e privado, sendo o governo federal o acionista majoritário.", correct: true },
      { id: 4, text: "É uma fundação privada financiada por impostos.", correct: false },
      { id: 5, text: "É subordinado ao Banco Central e sem autonomia jurídica.", correct: false },
    ],
  },
  {
    question: "(BB) Qual é o impacto das políticas de Basel III na atuação do Banco do Brasil?",
    answers: [
      { id: 1, text: "Eliminam a necessidade de capital regulatório.", correct: false },
      { id: 2, text: "Aumentam os riscos de inadimplência para grandes bancos.", correct: false },
      { id: 3, text: "Exigem maior robustez de capital e gestão de risco mais rigorosa.", correct: true },
      { id: 4, text: "Permitem maior alavancagem em investimentos de risco.", correct: false },
      { id: 5, text: "Reduzem a transparência das demonstrações financeiras.", correct: false },
    ],
  },
  {
    question: "(BB) Qual das seguintes operações se enquadra como política anticíclica utilizada pelo Banco do Brasil?",
    answers: [
      { id: 1, text: "Aumento da taxa Selic.", correct: false },
      { id: 2, text: "Elevação do compulsório bancário.", correct: false },
      { id: 3, text: "Ampliação de crédito rural em períodos de recessão.", correct: true },
      { id: 4, text: "Restrição de crédito habitacional durante a crise.", correct: false },
      { id: 5, text: "Redução de investimentos públicos.", correct: false },
    ],
  },
  {
    question: "(BB) Em termos de funding, o que caracteriza uma LCA emitida pelo Banco do Brasil?",
    answers: [
      { id: 1, text: "Investimento em câmbio internacional.", correct: false },
      { id: 2, text: "Aplicação com isenção de IR para pessoa física e lastro no agronegócio.", correct: true },
      { id: 3, text: "Investimento com rentabilidade vinculada ao dólar.", correct: false },
      { id: 4, text: "Fundo de capital de risco para startups.", correct: false },
      { id: 5, text: "Operação exclusiva para investidores estrangeiros.", correct: false },
    ],
  },
  {
    question: "(BB) Qual das alternativas expressa uma atribuição típica da Diretoria de Controles Internos e Gestão de Riscos do BB?",
    answers: [
      { id: 1, text: "Realizar auditorias externas.", correct: false },
      { id: 2, text: "Gerenciar o relacionamento com clientes.", correct: false },
      { id: 3, text: "Supervisionar as atividades de prevenção à lavagem de dinheiro.", correct: true },
      { id: 4, text: "Emitir políticas fiscais para o Tesouro Nacional.", correct: false },
      { id: 5, text: "Conceder empréstimos subsidiados a multinacionais.", correct: false },
    ],
  },
  {
    question: "(BB) Como o Banco do Brasil atua no apoio às exportações brasileiras?",
    answers: [
      { id: 1, text: "Por meio do Finame Exportação, com foco em microempreendedores.", correct: false },
      { id: 2, text: "Oferecendo garantia cambial obrigatória pelo Banco Central.", correct: false },
      { id: 3, text: "Através de linhas de crédito, câmbio e seguro via BB Exporta.", correct: true },
      { id: 4, text: "Operando apenas com empresas de grande porte.", correct: false },
      { id: 5, text: "Vendendo títulos internacionais a juros fixos.", correct: false },
    ],
  },
  {
    question: "(BB) Qual é o papel do Banco do Brasil no Sistema Financeiro Nacional (SFN)?",
    answers: [
      { id: 1, text: "Controlar as políticas monetárias do Banco Central.", correct: false },
      { id: 2, text: "Servir como agente financeiro da União e apoiar políticas públicas.", correct: true },
      { id: 3, text: "Emitir moeda fiduciária em nome do Tesouro.", correct: false },
      { id: 4, text: "Regular as bolsas de valores nacionais.", correct: false },
      { id: 5, text: "Fiscalizar as cooperativas de crédito.", correct: false },
    ],
  }
];

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