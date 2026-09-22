// Search games
const searchInput = document.getElementById("search");
const gameCards = document.querySelectorAll(".game-card");

searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();

    gameCards.forEach(function (card) {
        const gameName = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        const description = card
            .querySelector("p")
            .textContent
            .toLowerCase();

        if (
            gameName.includes(searchTerm) ||
            description.includes(searchTerm)
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});


// Category filtering
function filterGames(category) {
    gameCards.forEach(function (card) {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


// Game buttons
function playGame(game) {

    if (game === "snake") {
        alert("Snake will be added here!");
    }

    else if (game === "pong") {
        alert("Pong will be added here!");
    }

    else if (game === "memory") {
        alert("Memory will be added here!");
    }

}
