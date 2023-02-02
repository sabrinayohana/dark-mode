let main = document.querySelector("main")


function toDarkSide(){
  main.classList.add("dark")
  main.classList.remove("light")
}

function toLightSide(){
  main.classList.add("light")
  main.classList.remove("dark")
}

const button = document.getElementById('button')

button.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})
