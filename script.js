// Definição das perguntas e respostas
const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        answer: "Brasília"
    },
    {
        question: "Qual é o maior oceano do mundo?",
        options: ["Oceano Atlântico", "Oceano Pacífico", "Oceano Índico", "Oceano Ártico"],
        answer: "Oceano Pacífico"
    },
    {
        question: "Qual é o país mais populoso do mundo?",
        options: ["Índia", "Estados Unidos", "China", "Rússia"],
        answer: "China"
    },
    {
        question: "Qual é o ponto mais alto do mundo?",
        options: ["Monte Everest", "Monte Kilimanjaro", "Monte McKinley", "Monte Fuji"],
        answer: "Monte Everest"
    },
    {
        question: "Qual é o maior rio do mundo?",
        options: ["Rio Amazonas", "Rio Nilo", "Rio Yangtzé", "Rio Mississippi"],
        answer: "Rio Amazonas"
    }
];

// Variáveis para controle do quiz
let currentQuestion = 0;
let score = 0;
let playerName = "";

// Função para carregar próxima pergunta
function loadNextQuestion() {
    const quiz = document.getElementById("quiz");
    const questionElem = document.getElementById("question");
    const optionsElem = document.getElementById("options");
    const resultElem = document.getElementById("result");
    const nextBtn = document.getElementById("nextBtn");

    quiz.style.display = "block";
    resultElem.innerHTML = "";

    // Verifica se chegou ao fim do quiz
    if (currentQuestion === questions.length) {
        quiz.style.display = "none";
        let finalComment = '';
        // Determina o comentário final com base na pontuação
        if (score === 0) {
            finalComment = "Péssimo! Você precisa estudar mais.";
        } else if (score === 1 || score === 2) {
            finalComment = "Ruim! Você pode melhorar.";
        } else if (score === 3) {
            finalComment = "Mais ou menos! Continue praticando.";
        } else if (score === 4) {
            finalComment = "Bom! Você está no caminho certo.";
        } else if (score === 5) {
            finalComment = "Excelente! Parabéns!";
        }
        resultElem.innerHTML = `<h2>Parabéns, ${playerName}, você completou o quiz!</h2><p>Sua pontuação final é ${score} de ${questions.length}. ${finalComment}</p>`;
        return;
    }

    // Carrega a próxima pergunta
    const currentQues = questions[currentQuestion];
    questionElem.textContent = currentQues.question;

    optionsElem.innerHTML = "";
    currentQues.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("btn", "btn-light");
        btn.onclick = function () {
            checkAnswer(option);
        };
        optionsElem.appendChild(btn);
    });

    nextBtn.style.display = "none";
}

// Função para verificar a resposta selecionada
function checkAnswer(selectedAnswer) {
    const currentQues = questions[currentQuestion];
    const resultElem = document.getElementById("result");
    const nextBtn = document.getElementById("nextBtn");

    if (selectedAnswer === currentQues.answer) {
        score++;
    }

    currentQuestion++;
    loadNextQuestion();
}

// Função para iniciar o quiz após inserir o nome
document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();
    playerName = document.getElementById("name").value;
    loadNextQuestion();
});
