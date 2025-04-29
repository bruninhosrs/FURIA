// Seleciona elementos da página
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Funções
const appendMessage = (text, className) =>{
    const message = document.createElement("div");
    message.className = `message ${className}`;
    message.innerText = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Mensagem automática de boas-vindas
const sendWelcomeMessage = () => {
    appendMessage("👋 Olá, torcedor da FURIA!", "bot-message");
    appendMessage("Você pode perguntar sobre:", "bot-message");
    appendMessage("- Jogadores 🧑‍💻", "bot-message");
    appendMessage("- Conquistas 🏆", "bot-message");
    appendMessage("- Time de CS em geral 🎯", "bot-message");
}

sendWelcomeMessage();

const getBotResponse = (input) => {
    input = input.toLowerCase();
    if (input.includes("fallen")) {
        return "FalleN é o capitão da equipe! Uma verdadeira lenda do CS! 🐺🔥";

    } else if (input.includes("yuurih")) {
        return "Yuurih é um dos riflers mais consistentes da FURIA! 💥";

    } else if (input.includes("furia")) {
        return "A FURIA é paixão, garra e excelência nos eSports! 🖤🐺";

    } else if (input.includes("campeonatos") || input.includes("conquistas")) {
        return "A FURIA já conquistou torneios como ESL Pro League e DreamHack Open! 🏆";

    } else if (input.includes("kscerato")) {
        return "KSCERATO é conhecido por sua mira precisa e clutchs decisivos! 🎯";
        
    } else {
        return "Desculpe, não entendi muito bem... Pergunte sobre jogadores, conquistas ou o time! 👊";
    }
}

// Eventos
sendButton.addEventListener("click", () => {
    const userText = userInput.value.trim();
    if (userText !== "") {
        appendMessage(userText, "user-message");

        setTimeout(() => {
            appendMessage(getBotResponse(userText), "bot-message");
        }, 500);
    }
    userInput.value = "";
});

// Permitir envio pressionando "Enter"
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
