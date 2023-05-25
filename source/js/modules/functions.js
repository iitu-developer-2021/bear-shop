import Swiper, { Navigation, Pagination } from 'swiper';

export function isWebp() {
    function testWebP(callback) {
        // eslint-disable-next-line
        const webP = new Image();
        function checkHeight() {
            callback(webP.height === 2);
        }

        webP.onerror = checkHeight;
        webP.onload = checkHeight;

        webP.src =
            'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }
    // Додавання класу _webp або _no-webp для HTML
    testWebP((support) => {
        const className = support === true ? 'webp' : 'no-webp';
        // eslint-disable-next-line
        window.document.documentElement.classList.add(className);
    });
}

export function toggleMenu() {
    const menuButton =  document.querySelector('#menu-button');
    const header = document.querySelector('.header')

    function toggleMenu(){
      if(header.classList.contains('header--active')){
        header.classList.remove('header--active')
      }else{
        header.classList.add('header--active')
      }
    }

    menuButton.addEventListener('click', toggleMenu);

    function closeMenu(){
      if(header.classList.contains('header--active')){
        header.classList.remove('header--active')
      }
    }

    const mobileWidthMediaQuery = window.matchMedia('(min-width: 768px)')

    function handleMediaQuery(event){
      if(event.matches){
        closeMenu()
      }
    }

    mobileWidthMediaQuery.addEventListener('change', handleMediaQuery)
    handleMediaQuery(mobileWidthMediaQuery)
}

export const initSwiper = () => {
  const swiper = new Swiper('.review-slider', {
    modules: [Navigation, Pagination],
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoHeight: true,
    navigation: {
      nextEl: '.review-slider__arrow-right',
      prevEl: '.review-slider__arrow-left'
    }
  });
}


// Initialize and add the map
export function initMap() {
  // The location of Uluru
  const uluru = { lat: 43.264232, lng: 76.930025 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: '../img/contacts/marker.svg'
  });
}
