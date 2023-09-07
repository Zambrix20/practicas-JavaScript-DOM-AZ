//- Mostrar en el DOM una lista de canciones con toda la info disponible(Sean creativos de como presentan la informacion)

let songsData = [
    {
        name: "Kashmir",
        band: "Led Zeppelin",
        releaseYear: "1980",
        imgURL: "https://i.pinimg.com/originals/89/fe/e0/89fee0bb19a981ed87683592901ebe60.jpg",
        statistics: {
            likes: 20000,
            reproductions: 8000,
        },
    },
    {
        name: "Smells Like Teen Spirit",
        band: "Nirvana",
        releaseYear: "1989",
        imgURL: "https://i.pinimg.com/originals/60/b1/aa/60b1aa2677f247fef17c307bc869093a.jpg",
        statistics: {
            likes: 25000,
            reproductions: 100000,
        },
    },
    {
        name: "So What",
        band: "Metallica",
        releaseYear: "1990",
        imgURL: "https://i.discogs.com/pCc4lcgdc_8mMIg8Lbv5_XMQEQs3oIwBJDFts3qfrOM/rs:fit/g:sm/q:90/h:417/w:473/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMzQx/Njg3LTE1MzMzMDEw/NzAtMTg0NC5qcGVn.jpeg",
        statistics: {
            likes: 12000,
            reproductions: 95000,
        },
    },
    {
        name: "Nothing Else Matters",
        band: "Metallica",
        releaseYear: "1992",
        imgURL: "https://lastfm.freetls.fastly.net/i/u/770x0/17a47801a0ad43b4c3a742617a304e09.jpg#17a47801a0ad43b4c3a742617a304e09",
        statistics: {
            likes: 128000,
            reproductions: 915000,
        },
    },
    {
        name: "Daze",
        band: "Poets_of_the_Fall",
        releaseYear: "2014",
        imgURL: "https://lastfm.freetls.fastly.net/i/u/770x0/720f9390e6914dafcd29c29301c18087.jpg#720f9390e6914dafcd29c29301c18087",
        statistics: {
            likes: 3548413,
            reproductions: 87095138,
        },
    },
    {
        name: "The Sweet Scape",
        band: "Poets_of_the_Fall",
        releaseYear: "2018",
        imgURL: "https://www.azlyrics.com/images/albums/619/02087e08a11bf92868d05dc1d0460b44.jpg",
        statistics: {
            likes: 26268856,
            reproductions: 2424568,
        },
    },
];

const mostrarCanciones = (listaCanciones) => {
    // Aqui nos traemos el div con el id para usarlo
    const containerList = document.querySelector('#lista-canciones')
    console.log(containerList);

    listaCanciones.forEach((item) => {
        // Imagen de la cancion
        const img = document.createElement('img')
        img.src = item.imgURL

        // Tarjeta de la cancion
        const tarjeta = document.createElement('div')
        tarjeta.className = 'card'

        // titulo de la cancion
        const titulo = document.createElement('h2')
        titulo.textContent = item.name

        // Nombre de la banda
        const banda = document.createElement('p')
        banda.textContent = 'Banda: ' + item.band

        // Año de lanzamiento
        const lanzamiento = document.createElement('p')
        lanzamiento.textContent = 'Año lanzamiento: ' + item.releaseYear

        // Numero de likes
        const likes = document.createElement('p')
        likes.textContent = 'Numero de likes: ' + item.statistics.likes

        // Agregar a la tarjeta
        tarjeta.appendChild(img)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(banda)
        tarjeta.appendChild(lanzamiento)
        tarjeta.appendChild(likes)

        // Agregar al DOM
        containerList.appendChild(tarjeta)
    });


}

mostrarCanciones(songsData)