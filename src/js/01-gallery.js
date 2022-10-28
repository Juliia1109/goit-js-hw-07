import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const paletteContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryItemsCardMarkup(galleryItems);
paletteContainer.insertAdjacentHTML('afterbegin', cardsMarkup);
paletteContainer.addEventListener('click', onPaletteContainerClick);

function createGalleryItemsCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <div class="gallery__item">
                <a class="gallery__link" "${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>
           `;
    })
    .join('');
}

function onPaletteContainerClick(evt) {
  evt.preventDefault();
  const iceGalleryEl = evt.target.classList.contains('gallery__image');
  if (!iceGalleryEl) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
    
`);

  console.log(evt.target.dataset.source);
  instance.show();

  document.addEventListener('keydown', onEscapeGallery);

  function onEscapeGallery(event) {
    if (event.key === 'Escape') {
      instance.close();
    }
  }
}
