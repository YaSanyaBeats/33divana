class Lookbook{
    constructor(root) {
        this.root = root;
        this.pointers = this.root.querySelectorAll('.lookbook__pointer');
        this.bindListeners();
    }
    disactivePointers() {
        this.pointers.forEach(pointer => {
            pointer.classList.remove('lookbook__pointer_active');
        });
    }
    bindListeners() {
        this.root.addEventListener('mousemove', (event) => {
            if (event.target.classList.contains('lookbook__pointer')) {
                event.target.classList.add('lookbook__pointer_active');
            }
        })
        this.root.addEventListener('mouseout', (event) => {
            if (!this.root.contains(event.toElement)){
                this.disactivePointers();
            }
        })
    }
}

window.onload = () => {
    let lookbooks = document.querySelectorAll('.lookbook');
    lookbooks.forEach((lookbook) => {
        new Lookbook(lookbook);
    })
    
    const heroSelect = document.querySelector('.hero-select');
    if (heroSelect !== null) {
        heroSelect.addEventListener('click', (event) => {
            heroSelect.classList.toggle('hero-select_active');
        })
    }
    

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: true,
      
        scrollbar: {
          el: '.swiper-scrollbar',
        },

        breakpoints: {
            768: {
                slidesPerView: 3
            },
            1100: {
                slidesPerView: 4
            }
        },
    });

    const burgerMenuButton = document.querySelector('.header__burger-button');
    burgerMenuButton.addEventListener('click', (event) => {
        document.querySelector('.header-menu').classList.toggle('header-menu_open');
    })
}
