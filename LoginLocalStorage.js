//Recebendo dados do formulário, "bem vindo" e botão logout
const nameForm = document.querySelector("#name-form")
const welcomeContainer = document.querySelector("#welcome")
const logoutBtn = document.querySelector("#logout")

//Checar se usuário está logado
function checkUser() {
    const userName = localStorage.getItem("name")
    if (userName) {
        nameForm.style.display = "none";
        welcomeContainer.style.display = "block"
        const userNameElement = document.querySelector("#username")
        userNameElement.textContent = userName
    } else {
        nameForm.style.display = "block";
        welcomeContainer.style.display = "none"
    }
}

//Colocando evento no formulário e no botão submit
nameForm.addEventListener("submit", (e) => {
    e.preventDefault()

    //localStorage recebe o valor do input name
    const nameInput = document.querySelector("#name")
    localStorage.setItem("name", nameInput.value)

    //zera o valor
    nameInput.value = "";

    checkUser()
})

//botão logout
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("name")
    checkUser()
})

//Iniciando aplicação
checkUser()
