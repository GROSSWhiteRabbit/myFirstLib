import $ from '../core';

$.prototype.slider= function() {
    for(let i = 0; i<this.length; i++) {
       const slides = this[i].querySelectorAll('.carusel__item'),
             field = this[i].querySelector('.carusel__field'),
             width = window.getComputedStyle(this[i]).width,
             prev = this[i].querySelector('.carusel__prev'),
             next = this[i].querySelector('.carusel__next');
        let index = 0;

        field.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            console.log(width);
            slide.style.width = width ;
        });
        const _toSlide = (j) =>  {
            if (j >= slides.length) {
                j = 0;
            }
            if (j < 0) {
                j = slides.length - 1;
            }

            field.style.transform = `translateX(${-width.replace(/\D/ig, '')*(j)}px)`;
            index = j;
            $(this[i]).find('[data-slide-to]').addClass('active').eq(j).siblings().removeClass('active');
        };
        prev.addEventListener('click', (e)=>{
            e.preventDefault();
            _toSlide(index-1);
        });
        next.addEventListener('click', (e)=>{
            e.preventDefault();
            _toSlide(index+1);
        });
        $(this[i]).find('[data-slide-to]').click((e)=> {

            const slideTo = e.target.getAttribute('data-slide-to');
            _toSlide(slideTo);
        });
    }
};