// Array contendo as perguntas, respostas e a resposta correta para cada pergunta
const perguntas = [
    {
        pergunta: "O que é analfabetismo digital?",
        respostas: ["Incapacidade de ler textos longos", "Falta de habilidade para utilizar tecnologias digitais", "Rejeição à leitura em telas", "Desconhecimento sobre a história da informática"],
        correta: "Falta de habilidade para utilizar tecnologias digitais"
    },
    {
        pergunta: "Qual fator contribui para o analfabetismo digital?",
        respostas: ["Alto nível de escolaridade", "Acesso à internet de alta velocidade", "Falta de acesso a dispositivos e internet", "Conhecimento avançado de informática"],
        correta: "Falta de acesso a dispositivos e internet"
    },
    {
        pergunta: "O analfabetismo digital pode dificultar?",
        respostas: ["A leitura de livros físicos", "O acesso a serviços públicos online", "O uso de redes sociais", "A escrita de cartas manuscritas"],
        correta: "O acesso a serviços públicos online"
    },
    {
         pergunta: "Qual grupo social é mais vulnerável ao analfabetismo digital?",
        respostas: ["Estudantes universitários", "Profissionais da área de TI", "Adolescentes conectados à internet", "Moradores de áreas rurais com pouco acesso à tecnologia"],
        correta: "Moradores de áreas rurais com pouco acesso à tecnologia"
    },
    {
        pergunta: "O analfabetismo digital impacta negativamente?",
        respostas: ["O uso da linguagem coloquial", "A leitura de jornais impressos", "A inclusão social e o acesso à informação", "O interesse por livros"],
        correta: "A inclusão social e o acesso à informação"
    },
    {
         pergunta: "Uma forma de combater o analfabetismo digital é?",
        respostas: ["Oferecer cursos de informática básica para todas as idades", "Incentivar o uso exclusivo de livros físicos", "Criar barreiras ao uso da internet", "Substituir tecnologias por métodos tradicionais"],
        correta: "Oferecer cursos de informática básica para todas as idades"
    },
    {
       pergunta: "O termo “inclusão digital” está relacionado a:",
        respostas: ["Manter as pessoas afastadas da tecnologia", "Proibir o uso de redes sociais em escolas", "Oferecer condições para que todos possam acessar e usar a tecnologia", "Reduzir a quantidade de dispositivos nas escolas"],
        correta: "Oferecer condições para que todos possam acessar e usar a tecnologia" 
    },
    {
        pergunta: "O analfabetismo digital pode afetar o desempenho de uma pessoa em:",
        respostas: ["Esportes coletivos", "Provas físicas", "Atividades que exigem o uso de tecnologias", "Leitura de revistas"],
        correta: "Atividades que exigem o uso de tecnologias"
    },
    {
        pergunta: "O uso crítico da tecnologia digital exige:",
        respostas: ["Habilidades básicas de leitura e interpretação de informações digitais", "Apenas saber ligar e desligar o aparelho", "Um conhecimento profundo de programação", "Uso de papel ao invés de telas"],
        correta: "Habilidades básicas de leitura e interpretação de informações digitais"
    },
    {
        pergunta: "Qual das opções é um reflexo do analfabetismo digital?",
        respostas: ["Uso frequente de redes sociais", "Incapacidade de preencher um formulário online", "Assistir a vídeos no celular", "Jogar videogame"],
        correta: "Incapacidade de preencher um formulário online"
    },
    {
        pergunta: "A falta de alfabetização digital pode agravar:",
        respostas: ["O gosto pela leitura", "A desigualdade social", "A comunicação verbal", "O aprendizado de caligrafia"],
        correta: "A desigualdade social"
    },
    {
        pergunta: "Qual dos seguintes é um exemplo de inclusão digital?",
        respostas: ["Proibir celulares em escolas", "Criar bibliotecas apenas com livros físicos", "Implantar laboratórios de informática com acesso à internet em comunidades carentes", "Substituir computadores por cadernos"],
        correta: "Implantar laboratórios de informática com acesso à internet em comunidades carentes"
    },
    {
        pergunta: "Analfabetismo digital é um problema:",
        respostas: ["Exclusivo de países desenvolvidos", "Que afeta apenas jovens", "Que pode ser resolvido apenas com acesso à internet", "Educacional e social que exige políticas públicas"],
        correta: "Educacional e social que exige políticas públicas"
    },
    {
       pergunta: "Qual profissão pode ser prejudicada pelo analfabetismo digital?",
        respostas: ["Agricultor que vende seus produtos online", "Pintor que trabalha apenas com tinta acrílica", "Chef que cozinha sem usar tecnologia", "Cantor que não usa redes sociais"],
        correta: "Agricultor que vende seus produtos online" 
    },
    {
        pergunta: "As escolas podem contribuir para reduzir o analfabetismo digital ao:",
        respostas: ["Impedir o uso de qualquer tecnologia", "Ensinar somente com livros didáticos", "Estimular o uso de redes sociais sem orientação", "Promover aulas de informática e uso consciente das tecnologias"],
        correta: "Promover aulas de informática e uso consciente das tecnologias"
    }
]
// Variáveis para armazenar o índice da pergunta atual e a pontuação
let indicePerguntaAtual = 0;
let pontuacao = 0;

// Selecionando os elementos HTML que serão manipulados pelo JavaScript
const elementoPergunta = document.getElementById("pergunta");
const botoesResposta = document.querySelectorAll(".botao-resposta");
const botaoProximo = document.getElementById("botao-proximo");
const containerResultado = document.getElementById("resultado");
const elementoPontuacao = document.getElementById("pontuacao");

// Função para iniciar o quiz, exibindo a primeira pergunta
function iniciarQuiz() {
    indicePerguntaAtual = 0;
    pontuacao = 0;
    botaoProximo.style.display = "none";
    containerResultado.style.display = "none";
    exibirPergunta();
}

// Função para exibir a pergunta atual e as respostas
function exibirPergunta() {
    resetarEstado(); // Reseta o estado dos botões a cada nova pergunta
    const perguntaAtual = perguntas[indicePerguntaAtual]; // Obtém a pergunta atual
    elementoPergunta.innerText = perguntaAtual.pergunta; // Exibe a pergunta

    // Exibe as respostas nos botões
    botoesResposta.forEach((botao, index) => {
        botao.innerText = perguntaAtual.respostas[index];
        botao.addEventListener("click", selecionarResposta); // Adiciona o evento de clique
    });
}

// Função para resetar o estado dos botões entre as perguntas
function resetarEstado() {
    botaoProximo.style.display = "none"; // Esconde o botão de próxima pergunta
    botoesResposta.forEach(botao => {
        botao.disabled = false; // Habilita os botões
        botao.classList.remove("correto", "incorreto"); // Remove as classes de estilo de resposta
    });
}

// Função para processar a resposta selecionada pelo usuário
function selecionarResposta(e) {
    const botaoSelecionado = e.target; // Identifica o botão clicado
    const respostaCorreta = botaoSelecionado.innerText === perguntas[indicePerguntaAtual].correta; // Verifica se a resposta está correta
    if (respostaCorreta) {
        botaoSelecionado.classList.add("correto"); // Aplica estilo de resposta correta
        pontuacao++; // Incrementa a pontuação
    } else {
        botaoSelecionado.classList.add("incorreto"); // Aplica estilo de resposta incorreta
    }

    // Desativa todos os botões de resposta após a seleção
    botoesResposta.forEach(botao => botao.disabled = true);

    botaoProximo.style.display = "block"; // Exibe o botão para ir para a próxima pergunta
}

// Função para exibir o resultado final do quiz
function exibirResultado() {
    containerResultado.style.display = "block"; // Exibe o resultado
    elementoPontuacao.innerText = `${pontuacao} de ${perguntas.length}`; // Exibe a pontuação
}

// Evento para avançar para a próxima pergunta
botaoProximo.addEventListener("click", () => {
    indicePerguntaAtual++; // Avança para a próxima pergunta
    if (indicePerguntaAtual < perguntas.length) {
        exibirPergunta(); // Exibe a próxima pergunta
    } else {
        exibirResultado(); // Exibe o resultado final quando as perguntas acabarem
    }
});

// Inicializa o quiz ao carregar a página
iniciarQuiz();