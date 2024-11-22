/*
    Este código implementa uma funcionalidade interativa de lista, permitindo ao usuário:
    1. Adicionar novos itens ao DOM digitando no campo de entrada e pressionando "enter" ou clicando no botão;
    2. Garantir que apenas caracteres pertencentes ao alfabeto (incluindo acentos e espacos) sejam aceitos;
    3. Excluir itens da lista ao clicar no botão correspondente;
    4. Exibir um alerta visual quando um item é removido, cedendo a opção de ocultá-lo. 
*/

// Seleção de DOM

const input = document.querySelector("#item-input")
const listContainer = document.querySelector(".list-content")
const container = document.querySelector(".list-container")
const form = document.querySelector("form")
const removeElementFromList = document.querySelector("button.icon")
const removedAlert = document.querySelector(".removed-item")

// Eventos
// Escrita apenas com caracteres A-Z
input.addEventListener("input", () => {
    const regexr = /[^a-zA-Záéíóúãâêîôûàèìòùäëïöü\s]/g
    input.value = input.value.replace(regexr, "")
})
// Submit e criação do item 
form.onsubmit = (e) => {
    e.preventDefault()
    if(input.value)
        createNewItem(input.value)
}

container.addEventListener("click", (e) => {
    // Remoção de um item
    if(e.target.classList.contains('remove')) {
        const button = e.target.parentElement
        const elementToRemove = button.parentElement
        
        listContainer.removeChild(elementToRemove)
        if(removedAlert.classList.contains("hidden")){
            removedAlert.classList.remove("hidden")
        }
    }
    // Remoção do alerta
    if(e.target.classList.contains("removed-alert-button")) {
        removedAlert.classList.add("hidden")
    }
    
})

// Funções 
function createNewItem (value) {
    // Criação de um item
    const newElement = document.createElement("div")
    const itemContainer = document.createElement("div")
    const checkboxLabel = document.createElement("label")
    const checkboxInput = document.createElement('input')
    const spanCheckmark = document.createElement("span")
    const textSpan = document.createElement("span")
    const erase = document.createElement("span")
    const eraseIcon = document.createElement("i")
    
    // Atribuição de classes e atributos
    checkboxInput.setAttribute("type", "checkbox")
    checkboxLabel.classList.add("checkbox")
    newElement.classList.add("item")
    spanCheckmark.classList.add("checkmark")
    erase.classList.add("icon")
    eraseIcon.classList.add("fa-solid", "fa-trash-can", "remove")
    
    // Junção dos valores
    textSpan.textContent = value
    checkboxLabel.append(checkboxInput, spanCheckmark)
    erase.appendChild(eraseIcon)
    itemContainer.append(checkboxLabel, textSpan)
    newElement.append(itemContainer, erase)
    listContainer.prepend(newElement)
}
