const input = document.querySelector("#item-input")
const listContainer = document.querySelector(".list-content")
const container = document.querySelector(".list-container")
const form = document.querySelector("form")
const removeElementFromList = document.querySelector("button.icon")
const removedAlert = document.querySelector(".removed-item")

input.addEventListener("input", () => {
    const regexr = /[^a-zA-Záéíóúãâêîôûàèìòùäëïöü\s]/g
    input.value = input.value.replace(regexr, "")
})

form.onsubmit = (e) => {
    e.preventDefault()
    createNewItem(input.value)
}
function createNewItem (value) {
    const newElement = document.createElement("div")
    const itemContainer = document.createElement("div")
    const checkboxLabel = document.createElement("label")
    const checkboxInput = document.createElement('input')
    const spanCheckmark = document.createElement("span")
    const textSpan = document.createElement("span")
    const erase = document.createElement("span")
    const eraseIcon = document.createElement("i")

    checkboxInput.setAttribute("type", "checkbox")

    checkboxLabel.classList.add("checkbox")
    newElement.classList.add("item")
    spanCheckmark.classList.add("checkmark")
    erase.classList.add("icon")
    eraseIcon.classList.add("fa-solid", "fa-trash-can", "remove")

    textSpan.textContent = value

    checkboxLabel.append(checkboxInput, spanCheckmark)
    erase.appendChild(eraseIcon)
    itemContainer.append(checkboxLabel, textSpan)
    newElement.append(itemContainer, erase)
    listContainer.prepend(newElement)
}

container.addEventListener("click", (e) => {
    if(e.target.classList.contains('remove')) {
        const button = e.target.parentElement
        const elementToRemove = button.parentElement
        
        listContainer.removeChild(elementToRemove)
        if(removedAlert.classList.contains("hidden")){
            removedAlert.classList.remove("hidden")
        }
    }

    if(e.target.classList.contains("removed-alert-button")) {
        removedAlert.classList.add("hidden")
    }
    
})
function deleteElement () {
    listContainer.removeChild("div")
}

if (listContainer) {
    console.log("olá mundo")
}