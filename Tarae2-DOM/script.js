const counter = document.querySelector('.counter')
const increase = document.querySelector('.increase')
const decrease = document.querySelector('.decrease')

let cont = 0

// Para actualizar el contador
const updateCounter = () => {
    counter.textContent = cont
}

// Al hacer click que aumente el contador
increase.addEventListener('click', () => {
    cont++
    updateCounter()
})

// Al hacer click que disminuye el contador
decrease.addEventListener('click', () => {
    
    if (cont > 0) { // Para que no cuente numeros negativos
        cont--
        updateCounter()
    }
})

