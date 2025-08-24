document.addEventListener("DOMContentLoaded", function () {
    let prompt = document.querySelector("#prompt");
    let chatContainer = document.querySelector("#chat-output");
    let submitButton = document.querySelector("#submit");

    // Function to create a chat box with custom HTML and classes
    function createChatBox(html, classes) {
        let div = document.createElement("div");
        div.innerHTML = html;
        div.classList.add(classes);
        return div;
    }

    // Function to handle chat response, either from the user or AI
    function handleChatResponse(message, isUser = true) {
        let html = `<img src="${isUser ? 'user4.png' : 'ai.png'}" alt="${isUser ? 'User Image' : 'AI Image'}" width="${isUser ? 50 : 90}">
        <div class="${isUser ? 'user-chat-area' : 'ai-chat-area'}">
        ${message}
        </div>`;
        let chatBox = createChatBox(html, isUser ? "user-chat-box" : "ai-chat-box");
        chatContainer.appendChild(chatBox);
        prompt.value = ""; // Clear the input field after sending the message
        chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom of the chat
    }

    // Enhanced AI response logic with many possible questions and answers
    function getBotResponse(userMessage) {
        // Convert the user's message to lowercase for case-insensitive matching
        let userMessageLower = userMessage.toLowerCase();

        // Basic responses based on common queries
        if (userMessageLower.includes("hello") || userMessageLower.includes("hi")) {
            return "Hello! How can I assist you today?";
        } else if (userMessageLower.includes("how are you")) {
            return "I'm doing well, thank you for asking! How about you?";
        } else if (userMessageLower.includes("your name")) {
            return "I'm an AI bot. I don't have a personal name, but you can call me AI!";
        } else if (userMessageLower.includes("what is your purpose") || userMessageLower.includes("what do you do")) {
            return "My purpose is to assist you with any questions you might have and help you with various tasks!";
        } else if (userMessageLower.includes("help")) {
            return "Sure! What do you need help with? Feel free to ask me anything.";
        } else if (userMessageLower.includes("who created you")) {
            return "I was created by a team of developers to assist with conversations and provide information.";
        } else if (userMessageLower.includes("thanks") || userMessageLower.includes("thank you")) {
            return "You're welcome! Let me know if you need anything else.";
        } else if (userMessageLower.includes("what is your favorite color")) {
            return "I don't have a favorite color, but I think blue is quite calming!";
        } else if (userMessageLower.includes("what time is it")) {
            let currentTime = new Date();
            return `The current time is ${currentTime.toLocaleTimeString()}.`;
        } else if (userMessageLower.includes("tell me a joke")) {
            return "Why don't scientists trust atoms? Because they make up everything!";
        } else if (userMessageLower.includes("what is 2 plus 2")) {
            return "2 plus 2 is 4.";
        } else if (userMessageLower.includes("who won the world series")) {
            return "The most recent winner of the World Series was the Houston Astros in 2023.";
        } else if (userMessageLower.includes("what is the weather")) {
            return "I'm sorry, I cannot fetch live weather data at the moment. But you can check your local weather app for up-to-date information!";
        } else {
            return "I'm not sure how to respond to that. Can you please ask something else?";
        }
    }

    // Function to handle message submission
    function handleSubmit() {
        let userMessage = prompt.value.trim();
        if (userMessage) {
            handleChatResponse(userMessage); // User sends a message
            let botMessage = getBotResponse(userMessage); // Bot responds
            setTimeout(() => handleChatResponse(botMessage, false), 1000); // Simulate bot response delay
        }
    }

    // Event listener for pressing Enter key
    prompt.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            handleSubmit();
        }
    });

    // Event listener for clicking the submit button
    submitButton.addEventListener("click", function () {
        handleSubmit();
    });
});
