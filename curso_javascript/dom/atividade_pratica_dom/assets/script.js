const changeMode = () => {
    changeClasses();
    changeText();
}

const changeClasses = () => {
    button.classList.toggle("dark-mode");
    title.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
}

const changeText = () => {
    if(button.classList[0] === "dark-mode"){
        title.innerHTML = "Dark Mode ON";
    }
    else{
        title.innerHTML = "Light Mode ON"
    }
}

const button = document.getElementById(`mode-selector`);
const title = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

button.addEventListener("click", changeMode);