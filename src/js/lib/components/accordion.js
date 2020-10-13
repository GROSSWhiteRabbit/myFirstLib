const { default: $ } = require("../core");

$.prototype.accordion = function(headActive = 'accordion__head_active', contentActive = 'accordion__content_active' ) {

    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(()=>{
            const next = this[i].nextElementSibling;
             
            if(this[i].classList.contains(headActive)){

                next.style.maxHeight = '0px';
                
            } else {

                next.style.maxHeight =  window.getComputedStyle(next.querySelector('.accordion__inner')).height ;

            }
            $(this[i]).toggleClass(headActive);
             $(next).toggleClass(contentActive);
        });
        
    }

};