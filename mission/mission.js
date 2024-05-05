const themeSelector = document.querySelector('#theme-select');
const lightLogo = document.querySelector('.light-logo');
const darkLogo = document.querySelector('.dark-logo');

function changeTheme() {
    const selectedTheme = themeSelector.value;
  
    if (selectedTheme === "dark") {
        document.body.classList.add('dark');
        lightLogo.style.display = "none";
        darkLogo.style.display = "inline-block";
    } else {
        document.body.classList.remove('dark');
        darkLogo.style.display = "none";
        lightLogo.style.display = "inline-block";
    }
}

themeSelector.addEventListener('change', changeTheme);
changeTheme(); // Initial call to set the initial visibility of the logos
