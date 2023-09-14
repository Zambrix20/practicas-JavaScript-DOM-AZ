const button = document.querySelector('#enviarButton');
const mainContainer = document.querySelector('#mainContainer')
const avatares = []

// Renderizar una card del usuario
const renderPersona = (infoPersona, index) => {

    const card = document.createElement('div')
    card.className = 'card mb-3'
    card.style = 'max-width: 540px'

    const row = document.createElement('div')
    row.className = 'row g-0'

    const firstColumn = document.createElement('div')
    firstColumn.className = 'col-sm-4 d-flex align-items-center'

    const img = document.createElement('img')
    img.src = infoPersona.avatar
    img.className = 'img-fluid rounded-start card-img h-100'

    const secondColumn = document.createElement('div')
    secondColumn.className = 'col-sm-8 d-flex align-items-center'

    const cardBody = document.createElement('div')
    cardBody.className = 'card-body'

    const cardRow = document.createElement('div')
    cardRow.className = 'row align-items-start'

    const cardFirstColumn = document.createElement('div')
    cardFirstColumn.className = 'col'

    const cardNameTitle = document.createElement('h6')
    cardNameTitle.className = 'card-title'
    cardNameTitle.textContent = 'Nombre'
    const cardNameContent = document.createElement('p')
    cardNameContent.className = 'card-text'
    cardNameContent.textContent = infoPersona.nombre

    const cardDateTitle = document.createElement('h6')
    cardDateTitle.className = 'card-title'
    cardDateTitle.textContent = 'Fecha'
    const cardDateContent = document.createElement('p')
    cardDateContent.className = 'card-text'
    cardDateContent.textContent = infoPersona.birthday

    const cardCountryTitle = document.createElement('h6')
    cardCountryTitle.className = 'card-title'
    cardCountryTitle.textContent = 'Pais'
    const cardCountryContent = document.createElement('p')
    cardCountryContent.className = 'card-text'
    cardCountryContent.textContent = infoPersona.pais

    const cardSecondColumn = document.createElement('div')
    cardSecondColumn.className = 'col'

    const cardLastNameTitle = document.createElement('h6')
    cardLastNameTitle.className = 'card-title'
    cardLastNameTitle.textContent = 'Apellido'
    const cardLastNameContent = document.createElement('p')
    cardLastNameContent.className = 'card-text'
    cardLastNameContent.textContent = infoPersona.lastName

    const cardGenderTitle = document.createElement('h6')
    cardGenderTitle.className = 'card-title'
    cardGenderTitle.textContent = 'Genero'
    const cardGenderContent = document.createElement('p')
    cardGenderContent.className = 'card-text'
    cardGenderContent.textContent = infoPersona.radio

    const containerButtons = document.createElement('div')
    containerButtons.className = 'container d-flex justify-content-end'

    const buttonEdit = document.createElement('button')
    buttonEdit.type = 'button'
    buttonEdit.className = 'btn btn-outline-primary me-3 text-black'
    buttonEdit.textContent = 'Editar'
    const buttonDelete = document.createElement('button')
    buttonDelete.type = 'button'
    buttonDelete.className = 'btn btn-outline-danger text-black'
    buttonDelete.textContent = 'Eliminar'

    // Agregar funcionalidad al boton eliminar
    // hay que agregar un data set con ayuda de atributos personalizados
    // usamos el index para saber que tarjeta eliminar
    buttonDelete.dataset.person = index

    // Listener para el boton eliminar
    buttonDelete.addEventListener('click', (event) => {
        // Accedemos al indice del elemento que le hacemos click
        const elementToRemove = Number(event.target.dataset.person)

        avatares.splice(elementToRemove, 1)
        console.log(avatares);

        // Luego limpiamos la lista
        cleanList()

        // Por ultimo renderizamos con las lista ya limpiada
        renderList(avatares)
    })

    cardFirstColumn.appendChild(cardNameTitle)
    cardFirstColumn.appendChild(cardNameContent)
    cardFirstColumn.appendChild(cardDateTitle)
    cardFirstColumn.appendChild(cardDateContent)
    cardFirstColumn.appendChild(cardCountryTitle)
    cardFirstColumn.appendChild(cardCountryContent)

    cardSecondColumn.appendChild(cardLastNameTitle)
    cardSecondColumn.appendChild(cardLastNameContent)
    cardSecondColumn.appendChild(cardGenderTitle)
    cardSecondColumn.appendChild(cardGenderContent)

    containerButtons.appendChild(buttonEdit)
    containerButtons.appendChild(buttonDelete)

    cardRow.appendChild(cardFirstColumn)
    cardRow.appendChild(cardSecondColumn)
    cardRow.appendChild(containerButtons)

    cardBody.appendChild(cardRow)

    secondColumn.appendChild(cardBody)
    firstColumn.appendChild(img)

    row.appendChild(firstColumn)
    row.appendChild(secondColumn)

    card.appendChild(row)

    mainContainer.appendChild(card)
}

// Renderizar todos los usuarios, para mostrar las card de cada uno
const renderList = (listToRender) => {
    listToRender.forEach((person, index) => {
        renderPersona(person, index)
    });
}

// Eliminar el acumulado en el DOM y 
// cuando hagamos click en enviar no se vuelva a renderizar los de la lista
const cleanList = () => {

    while (mainContainer.firstChild) {
        // Seleccionamos el contenedor que tendra todas las tarjetas (contenedor padre)
        // y removemos la primera tarjeta (primer hijo)
        // Elimina de arriba hacia abajo
        mainContainer.removeChild(mainContainer.firstChild)
    }

}

button.addEventListener('click', (event) => {
    const result1 = {}
    // Saber su valor, accediendo a su value
    //console.log(checkbox.checked);
    const avatar = document.querySelector('#basic-url');
    const nombre = document.querySelector('#userNameText');
    const lastName = document.querySelector('#userLastName');
    const birthday = document.querySelector('#birthDate');
    const radio = document.querySelector('input[name="gender"]:checked');
    const pais = document.querySelector('#select');
    const description = document.querySelector('#description');

    // console.log(genderList.value);
    // console.log(select.value);

    const result = {
        avatar: avatar.value,
        nombre: nombre.value,
        lastName: lastName.value,
        birthday: birthday.value,
        radio: radio.value,
        pais: pais.value,
        description: description.value,
    }

    // console.log(avatares.push(result))
    // renderingSong(avatares[avatares.length - 1])

    avatares.push(result)

    // Primero, limpiamos la lista antes que se renderice, visto desde el DOM
    cleanList()

    // Luego, se van contruyendo las tarjetas a mostrar
    renderList(avatares)
    event.preventDefault();
})