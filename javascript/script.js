

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".action a.check")

checkButtons.forEach(botoes =>{
    botoes.addEventListener("click", Event => {
        abrir()
    })
})


function abrir(){
    document.querySelector('.modal-wrapper').classList.add("active")
}

function fechar(){
    document.querySelector('.modal-wrapper').classList.remove("active")
}
