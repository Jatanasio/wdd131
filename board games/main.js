document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const statusText = document.getElementById("status");
    const restartButton = document.getElementById("restart");

    let currentPlayer = "X";
    let boardState = ["", "", "", "", "", "", "", "", ""];
    let gameActive = true;

    
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    
    function handleCellClick(e) {
        const index = e.target.dataset.index;

        
        if (boardState[index] !== "" || !gameActive) {
            return;
        }

        boardState[index] = currentPlayer;
        e.target.textContent = currentPlayer;

        checkWinner();
        
        if (gameActive) {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            statusText.textContent = `Player ${currentPlayer}'s turn`;
        }
    }

    
    function checkWinner() {
        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
                gameActive = false;
                statusText.textContent = `Player ${boardState[a]} wins! 🎉`;
                return;
            }
        }

        if (!boardState.includes("")) {
            gameActive = false;
            statusText.textContent = "It's a draw! 🤝";
        }
    }

    
    function restartGame() {
        boardState = ["", "", "", "", "", "", "", "", ""];
        gameActive = true;
        currentPlayer = "X";
        statusText.textContent = "Player X's turn";
        cells.forEach(cell => cell.textContent = "");
    }

    
    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
    restartButton.addEventListener("click", restartGame);
});


// Chat logic

document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const chatInput = document.getElementById("chat-box");
    const sendButton = document.getElementById("send-message");
    const chatDisplay = document.querySelector(".chat-display");

    // Function to send a message
    function sendMessage() {
        const messageText = chatInput.value.trim(); // Get text and trim spaces
        
        if (messageText === "") return; // Ignore empty messages

        // Create a new message element
        const messageElement = document.createElement("p");
        messageElement.textContent = messageText;
        messageElement.classList.add("chat-message");

        // Append message to chat display
        chatDisplay.appendChild(messageElement);

        // Scroll chat to latest message
        chatDisplay.scrollTop = chatDisplay.scrollHeight;

        // Clear the input field
        chatInput.value = "";
    }

    // Event listener for send button click
    sendButton.addEventListener("click", sendMessage);

    // Allow sending messages by pressing "Enter"
    chatInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent new lines in textarea
            sendMessage();
        }
    });
});