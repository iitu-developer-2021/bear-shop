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
