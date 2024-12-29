// Seleciona os elementos do DOM
const input = document.querySelector('input[type="text"]');
const button = document.querySelector('button');

// Array com as frases de final de ano
const frases = [
    "Que 2025 seja repleto de conquistas e alegrias!",
    "Muita paz, amor e prosperidade para o novo ano!",
    "Que a esperança guie seus passos em 2025!",
    "Novo ano, novas oportunidades, novos sonhos!",
    "Que seus objetivos se realizem neste novo ciclo!",
    "Felicidade e sucesso em todos os seus projetos!",
    "Que a força da água renove suas energias em 2025!",
    "Saúde, paz e harmonia para o novo ano!",
    "Que 2025 traga muitas bênçãos para sua vida!",
    "Um ano novo cheio de realizações está chegando!"
];

// Configuração inicial do input
input.setAttribute('readonly', true); // Torna o input somente leitura
input.placeholder = "Clique em 'Sortear' para receber sua mensagem";

// Função para sortear uma frase aleatória
function sortearFrase() {
    // Efeito de "sorteando..."
    input.value = "Sorteando...";
    button.disabled = true; // Desabilita o botão durante o sorteio
    
    // Simula um tempo de sorteio com setTimeout
    setTimeout(() => {
        const indiceAleatorio = Math.floor(Math.random() * frases.length);
        input.value = frases[indiceAleatorio];
        button.disabled = false; // Reabilita o botão após o sorteio
    }, 1000); // Aguarda 1 segundo antes de mostrar a frase
}

// Adiciona o evento de clique ao botão
button.addEventListener('click', sortearFrase);