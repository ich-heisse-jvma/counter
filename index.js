const increase = document.querySelector(".increase")
const decrease = document.querySelector(".decrease")
const reset = document.querySelector(".reset")
const value = document.querySelector(".value")

let counter = 0

increase.addEventListener('click', () =>{
    counter++
    value.textContent = counter
    if (counter > 0){
        value.style.color = 'rgb(132, 253, 132)'
    }
})

decrease.addEventListener('click', () => {
    counter--
    value.textContent = counter
    if (counter < 0) {
        value.style.color = 'rgb(253, 132, 132)'
    }
})

reset.addEventListener('click', () => {
    counter = 0
    value.textContent = counter
    if (counter === 0) {
        value.style.color = ''
    }
})