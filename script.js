const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Function to set styles
function setStyles(backgroundColorNav, backgroundColorTextBox, textContent, removeIconClass, addIconClass, image1Src, image2Src, image3Src) {
    nav.style.backgroundColor = backgroundColorNav;
    textBox.style.backgroundColor = backgroundColorTextBox;
    toggleIcon.children[0].textContent = textContent;
    toggleIcon.children[1].classList.remove(removeIconClass);
    toggleIcon.children[1].classList.add(addIconClass);
    image1.src = image1Src;
    image2.src = image2Src;
    image3.src = image3Src;
}

// Dark Mode Styles
function darkMode() {
    setStyles('rgb(0 0 0 / 50%)', 'rgb(255 255 255 / 50%)', 'Dark Mode', 'fa-sun', 'fa-moon', 'img/undraw_proud_coder_dark.svg', 'img/undraw_feeling_proud_dark.svg', 'img/undraw_conceptual_idea_dark.svg');
    localStorage.setItem('theme', 'dark');
}

// Light Mode Styles
function lightMode() {
    setStyles('rgb(255 255 255 / 50%)', 'rgb(0 0 0 / 50%)', 'Light Mode', 'fa-moon', 'fa-sun', 'img/undraw_proud_coder_light.svg', 'img/undraw_feeling_proud_light.svg', 'img/undraw_conceptual_idea_light.svg');
    localStorage.setItem('theme', 'light');
}



// Switch Theme Dynamically

function switchTheme(event) {
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', '');
        lightMode();
    }
}


// Event Listener
toggleSwitch.addEventListener('change', switchTheme);


// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

if (currentTheme === 'dark'){
    toggleSwitch.checked = true;
    darkMode();
}else {
    toggleSwitch.checked = false;
    lightMode();
}