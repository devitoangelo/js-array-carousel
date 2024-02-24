//Lista immagini
const slides = [
    `01.webp`,
    `02.webp`,
    `03.webp`,
    `04.webp`,
    `05.webp`,
];

let activeImage = 0;

const slidesElement = document.querySelector(`.slides`)

console.log(slides, activeImage, slidesElement);



// Genera l'immagine all'interno della dom

for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    console.log(slide);

    const slideMarkup = `<img class="${i === activeImage ? `attiva` : ``}" src="./assets/img/${slide}" alt="">`
    console.log(slideMarkup);

    slidesElement.insertAdjacentHTML("beforeend", slideMarkup)
}



// Bottoni
const prevElement = document.querySelector(`.prima`)

const nextElement = document.querySelector(`.dopo`)

console.log(prevElement, nextElement);


// click prev

prevElement.addEventListener(`click`, function () {
    console.log("img prima");





})


// click next

nextElement.addEventListener(`click`, function () {
    console.log("img dopo");

    activeImage++
    console.log(activeImage)
    if(activeImage > slides.length - 1)
    activeImage = 0

    // cambio della classe attiva
    let cambioimmagine = document.querySelector(`img.attiva`)
    console.log(cambioimmagine);

    cambioimmagine.classList.remove(`attiva`)

    //seleziona la nuoca classe
    const allslides = document.querySelectorAll(`.slides img`)

    console.log(allslides[activeImage]);
    allslides[activeImage].classList.add(`attiva`)

})
