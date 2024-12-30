const buttons = document.querySelectorAll(".btn")
const value = document.querySelector(".value")

let counter = 0

buttons.forEach((button) =>{
    button.addEventListener('click', (e) =>{
        let styles = e.currentTarget.classList
        if (styles.contains('increase')) {
            counter++
        } else if (styles.contains('decrease')){
            counter--
        } else {
            counter = 0
        }
        
        if (counter > 0) {
            value.style.color = 'rgb(132, 253, 132)'
        } else if (counter < 0) {
            value.style.color = 'rgb(253, 107, 107)'
        } else {
            value.style.color = ''
        }

        value.textContent = counter
            
    })
})