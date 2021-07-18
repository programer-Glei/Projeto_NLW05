

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".action a.check")

const deleteButons = document.querySelectorAll(".action a.delete")

const modalTitle = document.querySelector(".modal h2")

const modalSubtitle = document.querySelector(".modal p")

const modalButton = document.querySelector(".modal button")

checkButtons.forEach(botoes =>{
    botoes.addEventListener("click", handleClick)
})

deleteButons.forEach(botoes =>{
    botoes.addEventListener("click",(Event) => handleClick(Event, false))
})


function abrir(){
    document.querySelector('.modal-wrapper').classList.add("active")
}

function fechar(){
    document.querySelector('.modal-wrapper').classList.remove("active")
}

function handleClick(Event, check = true){
    Event.preventDefault()
    const text = check ? "marcar como lida" : "excluir"

    modalTitle.innerHTML = check ? "Marcar como lida" : "Excluir esta pergunta"
    modalSubtitle.innerHTML = check ? "Tem certeza que deseja marcar como lida esta pergunta?" : "Tem certeza que deseja excluir esta pergunta"
    modalButton.innerHTML = `Sim, ${text}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    //abrir modal
    abrir()
}
