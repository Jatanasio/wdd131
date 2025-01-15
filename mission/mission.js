const modeSelector = document.getElementById("light/dark");
const img = document.querySelector("img");
const body = document.body;

function changeTheme () {
    if (modeSelector.value === "dark") {
        body.classList.add("dark-mode");
        img.setAttribute("src", "byui-logo_white.png");
    }

    else {
        body.classList.remove("dark-mode");
        img.setAttribute("src", "byui-logo_blue.webp");
    }
}

modeSelector.addEventListener("change", changeTheme);


