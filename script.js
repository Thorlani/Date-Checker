const heading = document.getElementById("heading")
const date = document.getElementById("date")
const button = document.getElementById("button")
const buttonEl = document.getElementById("buttonEl")



let sentence = `
Wanna know today's date?
Click on the button below
`

let restatement = "Here is your date"
let check = "Check Date"
let clear = "Clear Date"

button.textContent = check
buttonEl.textContent = clear

heading.textContent = sentence

button.addEventListener("click", function() {
    let todayDate = new Date()

    date.textContent = todayDate
    heading.textContent = restatement
})

buttonEl.addEventListener("click", function() {
    let empty = ""
    date.textContent = empty
    heading.textContent = sentence
})