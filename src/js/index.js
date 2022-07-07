const todoItem = document.querySelectorAll('.items')
const botaoEnviar = document.querySelector('.botao')

botaoEnviar.addEventListener('click', 
        function (event){
        event.preventDefault()
})


function enviarDados() {
    for (const items of todoItem) {
        const item = items.querySelector('.item')
        const error = items.querySelector('.campo')

        if (item.value === "") {
            item.classList.add('errado')
            item.classList.remove('correto')
            error.classList.add('msg-errado')
        } else {
            item.classList.remove('errado')
            item.classList.add('correto')
            error.classList.remove('msg-errado')
        }
    }
}

