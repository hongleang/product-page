import { getAllElements, getElement } from "../utils/views.utils";

export function LightBox() {
  const productImgs = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",
  ];

  const self = this

  self.currentProdImgs = 1

  const allThumbnails = getAllElements("#thumbnail");
  const lightbox = getElement("#lightbox");
  const lightOpener = getElement("#mainProduct-img");
  const lightboxCloser = getElement("#close-lightbox-btn");
  const btnNext = getElement("#btnNext-lightBox", lightbox);
  const btnPrev = getElement("#btnPrev-lightBox", lightbox);

  const lightBoxMainImg = getElement("#mainProduct");
  const mainImage = getElement("#mainProduct-img"); // redeclare in case lightbox opener is changing

  let selectedThumbnail = null;

  let lightIsOpen = false;

  function openLightBox() {
    lightbox.classList.remove("hidden");
    lightIsOpen = true;
  }

  function closeLightBox() {
    lightbox.classList.add("hidden");
    lightIsOpen = false;
  }

  function changeImage() {
    lightBoxMainImg
    lightBoxMainImg.src = productImgs[self.currentProdImgs - 1];
    selectedThumbnail.classList.add("ring-2", "opacity-60");
  }

  function mount() {
    Array.from(allThumbnails).forEach((thumbnail, idx, arr) => {
      if (idx === 0) {
        selectedThumbnail = thumbnail
      }
      thumbnail.addEventListener("click", (e) => {
        arr.forEach((item) => item.classList.remove("ring-2", "opacity-60"));
        const productId = Number(e.currentTarget.dataset.product);
        self.currentProdImgs = productId;
        selectedThumbnail = thumbnail;
        changeImage();
      });
    });

    lightOpener.addEventListener("click", openLightBox);
    if (lightboxCloser) {
      lightboxCloser.addEventListener("click", closeLightBox);
    }
    btnNext.addEventListener('click', () => {
      if (self.currentProdImgs === productImgs.length) {
        self.currentProdImgs = 1
      } else {
        self.currentProdImgs++;
      }
      changeImage()
    })

    btnPrev.addEventListener('click', () => {
      if (self.currentProdImgs === 1) {
        self.currentProdImgs = productImgs.length
      } else {
        self.currentProdImgs--;
      }
      changeImage()
    })

  }

  return {
    mount
  }
}
