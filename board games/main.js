document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const statusText = document.getElementById("status");
    const restartButton = document.getElementById("restart");

    let currentPlayer = "X";
    let boardState = ["", "", "", "", "", "", "", "", ""];
    let gameActive = true;

    // Winning combinations
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

    // Handle cell clicks
    function handleCellClick(e) {
        const index = e.target.dataset.index;

        // Prevent overwriting moves or clicking after game ends
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

    // Check for a winner
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

    // Restart game
    function restartGame() {
        boardState = ["", "", "", "", "", "", "", "", ""];
        gameActive = true;
        currentPlayer = "X";
        statusText.textContent = "Player X's turn";
        cells.forEach(cell => cell.textContent = "");
    }

    // Attach event listeners to each cell
    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
    restartButton.addEventListener("click", restartGame);
});
