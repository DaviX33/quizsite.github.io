// Definição das perguntas para cada nível
const questions = {
    easy: [
        {
            question: "O que é analfabetismo digital?",
            options: ["Incapacidade de ler textos longos", "Falta de habilidade para utilizar tecnologias digitais", "Rejeição à leitura em telas", "Desconhecimento sobre a história da informática"],
            correctAnswer: "Falta de habilidade para utilizar tecnologias digitais"
        },
        {
            question: "Qual fator contribui para o analfabetismo digital?",
            options: ["Alto nível de escolaridade", "Acesso à internet de alta velocidade", "Falta de acesso a dispositivos e internet", "Conhecimento avançado de informática"],
            correctAnswer: "Falta de acesso a dispositivos e internet"
        },
        {
            question: "O analfabetismo digital pode dificultar:",
            options: ["A leitura de livros físicos", "O acesso a serviços públicos online", "O uso de redes sociais", "A escrita de cartas manuscritas"],
            correctAnswer: "O acesso a serviços públicos online"
        },
        {
            question: "Qual grupo social é mais vulnerável ao analfabetismo digital?",
            options: ["Estudantes universitários", "Profissionais da área de TI", "Adolescentes conectados à internet", "Moradores de áreas rurais com pouco acesso à tecnologia"],
            correctAnswer: "Moradores de áreas rurais com pouco acesso à tecnologia"
        },
        {
            question: "O analfabetismo digital impacta negativamente?",
            options: ["O uso da linguagem coloquial", "A leitura de jornais impressos", "A inclusão social e o acesso à informação", "O interesse por livros"],
            correctAnswer: "A inclusão social e o acesso à informação"
        }
    ],
    medium: [
        {
            question: "Uma forma de combater o analfabetismo digital é:",
            options: ["Oferecer cursos de informática básica para todas as idades", "", "Incentivar o uso exclusivo de livros físicos", "Criar barreiras ao uso da internet", "Substituir tecnologias por métodos tradicionais"],
            correctAnswer: "Oferecer cursos de informática básica para todas as idades"
        },
        {
            question: "O termo “inclusão digital” está relacionado a:",
            options: ["Manter as pessoas afastadas da tecnologia", "Proibir o uso de redes sociais em escolas", "Oferecer condições para que todos possam acessar e usar a tecnologia", "Reduzir a quantidade de dispositivos nas escolas"],
            correctAnswer: "Oferecer condições para que todos possam acessar e usar a tecnologia"
        },
        {
            question: "O analfabetismo digital pode afetar o desempenho de uma pessoa em?",
            options: ["Esportes coletivos", "Provas físicas", "Atividades que exigem o uso de tecnologias", "Leitura de revistas"],
            correctAnswer: "Atividades que exigem o uso de tecnologias"
        },
        {
            question: "O uso crítico da tecnologia digital exige:",
            options: ["Habilidades básicas de leitura e interpretação de informações digitais", "Apenas saber ligar e desligar o aparelho", "Um conhecimento profundo de programação", "Uso de papel ao invés de telas"],
            correctAnswer: "Habilidades básicas de leitura e interpretação de informações digitais"
        },
        {
            question: "Qual das opções é um reflexo do analfabetismo digital?",
            options: ["Uso frequente de redes sociais", "Incapacidade de preencher um formulário online", "Assistir a vídeos no celular", "Assistir a vídeos no celular"],
            correctAnswer: "Incapacidade de preencher um formulário online"
        }
    ],
    hard: [
        {
            question: "A falta de alfabetização digital pode agravar:",
            options: ["O gosto pela leitura", "A desigualdade social", "A comunicação verbal", "O aprendizado de caligrafia"],
            correctAnswer: "A desigualdade social"
        },
        {
            question: "Qual dos seguintes é um exemplo de inclusão digital?",
            options: ["Proibir celulares em escolas", "Criar bibliotecas apenas com livros físicos", "Implantar laboratórios de informática com acesso à internet em comunidades carentes", "Substituir computadores por cadernos"],
            correctAnswer: "Implantar laboratórios de informática com acesso à internet em comunidades carentes"
        },
        {
            question: "Analfabetismo digital é um problema?",
            options: ["Exclusivo de países desenvolvidos", "Que afeta apenas jovens", "Que pode ser resolvido apenas com acesso à internet", "Educacional e social que exige políticas públicas"],
            correctAnswer: "Educacional e social que exige políticas públicas"
        },
        {
            question: "Qual profissão pode ser prejudicada pelo analfabetismo digital?",
            options: ["Agricultor que vende seus produtos online", "Pintor que trabalha apenas com tinta acrílica", "Chef que cozinha sem usar tecnologia", "Cantor que não usa redes sociais"],
            correctAnswer: "Agricultor que vende seus produtos online"
        },
        {
            question: "As escolas podem contribuir para reduzir o analfabetismo digital ao:",
            options: ["Impedir o uso de qualquer tecnologia", "Ensinar somente com livros didáticos", "Estimular o uso de redes sociais sem orientação", "Promover aulas de informática e uso consciente das tecnologias"],
            correctAnswer: "Promover aulas de informática e uso consciente das tecnologias"
        }
    ]
};

// Referências aos elementos do DOM
const levelSelectionScreen = document.getElementById('level-selection-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const restartButton = document.getElementById('restart-button');
const scoreText = document.getElementById('score-text');

let currentLevelQuestions = []; // Array para as perguntas do nível atual
let currentQuestionIndex = 0;   // Índice da pergunta atual
let score = 0;                  // Pontuação do jogador

// Função para iniciar o quiz com um nível selecionado
function startQuiz(level) {
    currentLevelQuestions = questions[level];
    currentQuestionIndex = 0;
    score = 0;
    
    // Altera a visibilidade das telas
    levelSelectionScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    resultsScreen.classList.add('hidden');

    displayQuestion(); // Exibe a primeira pergunta
}

// Função para exibir a pergunta atual
function displayQuestion() {
    nextButton.classList.add('hidden'); // Oculta o botão "Próxima Pergunta" inicialmente
    optionsContainer.innerHTML = ''; // Limpa as opções anteriores

    const currentQuestion = currentLevelQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    // Cria os botões de opção para a pergunta atual
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option-button');
        button.textContent = option;
        button.addEventListener('click', () => selectOption(button, option, currentQuestion.correctAnswer));
        optionsContainer.appendChild(button);
    });
}

// Função para lidar com a seleção de uma opção
function selectOption(selectedButton, selectedAnswer, correctAnswer) {
    // Desabilita todos os botões de opção após uma seleção
    Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
    });

    // Adiciona classes para feedback visual (correto/incorreto)
    if (selectedAnswer === correctAnswer) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('incorrect');
        // Opcional: mostrar qual era a resposta correta
        Array.from(optionsContainer.children).forEach(button => {
            if (button.textContent === correctAnswer) {
                button.classList.add('correct');
            }
        });
    }

    // Se houver mais perguntas ou se for a última
    if (currentQuestionIndex < currentLevelQuestions.length - 1) {
        nextButton.classList.remove('hidden'); // Mostra o botão "Próxima Pergunta"
    } else {
        // Se for a última pergunta, finalize o quiz após um pequeno atraso para mostrar o feedback
        setTimeout(endQuiz, 1000); 
    }
}

// Função para avançar para a próxima pergunta
function goToNextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

// Função para finalizar o quiz e mostrar os resultados
function endQuiz() {
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    scoreText.textContent = `Você acertou ${score} de ${currentLevelQuestions.length} perguntas!`;
}

// Função para reiniciar o quiz
function restartQuiz() {
    resultsScreen.classList.add('hidden');
    levelSelectionScreen.classList.remove('hidden'); // Volta para a tela de seleção de nível
}

// Adiciona event listeners para os botões de nível
document.querySelectorAll('.level-button').forEach(button => {
    button.addEventListener('click', () => startQuiz(button.dataset.level));
});

// Adiciona event listener para o botão "Próxima Pergunta"
nextButton.addEventListener('click', goToNextQuestion);

// Adiciona event listener para o botão "Reiniciar Quiz"
restartButton.addEventListener('click', restartQuiz);

