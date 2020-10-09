
import $ from '../core';

 $.prototype.modal = function(  ) {
    for(let i = 0; i<this.length; i++) {
        const modal = this[i].getAttribute('data-target');
        console.log(this[i]);
        this.click(()=> {
            $(modal).fadeIn(200);
            document.body.style.overflow = 'hidden';
            $(`${modal} [data-close]`).click(()=>{
                $(modal).fadeOut(200);  
                document.body.style.overflow = '';
            });
            $(modal).click((e)=>{

                if(e.target.classList.contains(modal.slice(1))) {
                    $(modal).fadeOut(200);  
                }
            });
         },i);
    }

         

 };