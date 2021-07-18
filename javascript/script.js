

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".action a.check")

const deleteButons = document.querySelectorAll(".action a.delete")

const modalTitle = document.querySelector(".modal h2")

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
    modalTitle.innerHTML = check ? "Marcar como lida" : "Excluir essa pergunta"

    //abrir modal
    abrir()
}
