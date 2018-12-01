document.addEventListener('DOMContentLoaded', function (e) {
    let nextBtn = document.querySelector('.btn-next'),
        prevBtn = document.querySelector('.btn-prev'),
        sliderItems = document.querySelectorAll('.slider-item'),
        a = 0;

    function nextSlide () {
        for( let i = 0; i < sliderItems.length; i++) {
            sliderItems[i].classList.remove('slider-item__active');
        }

        a++;
        if (a == sliderItems.length) {
            a = 0;
        }
        
        sliderItems[a].classList.add('slider-item__active');
    };

    function prevSlide () {
        for( let i = 0; i < sliderItems.length; i++) {
            sliderItems[i].classList.remove('slider-item__active');
        }

        a--;
        if (a < 0) {
            a = sliderItems.length - 1;
        }
        
        sliderItems[a].classList.add('slider-item__active');
    };
    
    nextBtn.addEventListener('click', function () {
        nextSlide();
    });

    prevBtn.addEventListener('click', function (e) {
        prevSlide();
    });

    let sliderInterval = setInterval(function () {
        nextSlide();
    },4000);
});