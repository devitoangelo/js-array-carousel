//Lista immagini
const slides = [
    `01.webp`,
    `02.webp`,
    `03.webp`,
    `04.webp`,
    `05.webp`,
];

const activeImage = 0;

const slidesElement = document.querySelector(`.slides`)

console.log(slides, activeImage, slidesElement);



// Genera l'immagine all'interno della dom

for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    console.log(slide);

    const slideMarkup = `<img class="attiva" src="./assets/img/${slide}" alt="">`
    console.log(slideMarkup);
    
}


//click button prima


//clik button dopo
