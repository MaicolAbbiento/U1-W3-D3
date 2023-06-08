let form = document.getElementById("form")
document.addEventListener("submit", function (e) {
  e.preventDefault()
  const taskArea = document.getElementById("name")
  const valueArea = taskArea.value
  let newTasK = document.createElement("div")
  newTasK.classList.add("divTask")
  newTasK.innerHTML = `<p class="taskP" > ${valueArea} </p>
  <button class="buttonT"> elimina </button>`
  const elementAdd = document.getElementById("taskContainer")
  elementAdd.appendChild(newTasK)
  const deleteButton = document.querySelectorAll(".buttonT")

  deleteButton.forEach((button) => {
    button.addEventListener("click", function (e) {
      let buttonClick = e.target
      let buttonR = buttonClick.parentElement
      buttonR.remove()
    })
  })

  let allTasks = document.querySelectorAll(".taskP")
  for (let i = 0; i < allTasks.length; i++) {
    allTasks[i].addEventListener("click", function () {
      this.classList.toggle("pOnClick")
    })
  }
  taskArea.value = ""
})

const changeColorWithRandom = function () {
  let elementToChange = document.querySelector("h1")
  elementToChange.onclick = function () {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const randomColor = `rgb(${red},${green},${blue})`
    elementToChange.style.userSelect = "none"
    elementToChange.style.cursor = "pointer"
    elementToChange.style.color = randomColor
  }
}

changeColorWithRandom()
let randomColor
const changeColorWithRandoms = function () {
  let elementToChange = document.querySelector("html")
  elementToChange.onclick = function () {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    randomColor = `rgb(${red},${green},${blue})`
    elementToChange.style.userSelect = "none"
    elementToChange.style.backgroundColor = randomColor
  }
}
let beCrazy = document.getElementById("beCrazy")
beCrazy.addEventListener("click", changeColorWithRandoms)

const NochangeColorWithRandom = function () {
  let elementToChange = document.querySelector("html")
  elementToChange.onclick = function () {
    elementToChange.style.backgroundColor = randomColor
  }
}
let no = document.getElementById("no")
no.addEventListener("click", NochangeColorWithRandom)
