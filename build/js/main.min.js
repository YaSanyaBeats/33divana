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
    

    const blogSwiper = new Swiper('.blog__swiper', {
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

    const productSwiper = new Swiper(".product__swiper-thumb", {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
    });

    const productSwiperThumb = new Swiper(".product__swiper", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: productSwiper,
        },
    });

    const catalogSwiper = new Swiper(".catalog__swiper", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    let productButton = document.querySelector('.product__button');
    if(productButton !== null) {
        let productForm = document.querySelector('.product-form__wrapper');
        productButton.addEventListener('click', (event) => {
            if(!productForm.classList.contains('product-form__wrapper_active')) {
                productForm.classList.add('product-form__wrapper_active');
                setTimeout(() => {
                    productForm.scrollIntoView({block: "center", inline: "center"});
                }, 800);
            }
            else{
                productForm.scrollIntoView({block: "center", inline: "center"});
            }
        })
    }

    const filterButton = document.querySelector('.filters__icon-wrapper');
    if(filterButton !== null) {
        filterButton.addEventListener('click', (event) => {
            document.querySelector('.filters__form').classList.toggle('filters__form_active');
        })
    }


    var $range = $("#range-input");
    var $inputFrom = $(".range-from");
    var $inputTo = $(".range-to");
    var instance;
    var min = 0;
    var max = 200000;
    
    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs,
        hide_min_max: true,
        hide_from_to: true
    });
    instance = $range.data("ionRangeSlider");
    
    function updateInputs (data) {
        from = data.from;
        to = data.to;
    
        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }
    
    $inputFrom.on("change", function () {
        var val = $(this).prop("value");
    
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }
    
        instance.update({
            from: val
        });
    
        $(this).prop("value", val);
    
    });
    
    $inputTo.on("change", function () {
        var val = $(this).prop("value");
    
        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }
    
        instance.update({
            to: val
        });
    
        $(this).prop("value", val);
    });

}
