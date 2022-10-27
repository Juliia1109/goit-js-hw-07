
import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const paletteContainer = document.querySelector('.gallery');
console.log(paletteContainer)
const cardsMarkup = createGalleryItemsCardMarkup(galleryItems);
paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);
// paletteContainer.addEventListener('click', onPaletteContainerClick);

function createGalleryItemsCardMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <a class="gallery__item" "${original}">
               <img 
                   class="gallery__image" 
                   src="${preview}" 
                   alt="${description}" 
                   />
            </a>
            ` ;
        }).join('')
   
};

// function onPaletteContainerClick(evt) {
//     evt.preventDefault()
//     const iceGalleryEl = evt.target.classList.contains('gallery__image');
//     if (!iceGalleryEl) {
//         return;
//     }

    // const instance = basicLightbox.create(`
    // <img src="${evt.target.dataset.source}" width="800" height="600">
    
// `)

 
    // console.log(iceGalleryEl)
    // instance.show()
// }



new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
