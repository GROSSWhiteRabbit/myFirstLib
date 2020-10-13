
import $ from '../core';

$.prototype.modal = function( created ) {
    for(let i = 0; i<this.length; i++) {
        const modal = this[i].getAttribute('data-target');

        this.click(()=> {

            $(modal).fadeIn(200);
            document.body.style.overflow = 'hidden';

            
            $(modal).click((e)=>{

                if(e.target.classList.contains('modal')) {
                    $(modal).fadeOut(200);  
                }
            });
         },i);

         $(`${modal} [data-close]`).click(()=>{
    
            $(modal).fadeOut(200);  
            document.body.style.overflow = '';
            if(created){
                setTimeout(()=>{
                    document.querySelector(modal).remove();
                },200);
            }
            
        });

        $(modal).click((e)=>{

            if(e.target.classList.contains('modal')) {
                $(modal).fadeOut(200);  
                document.body.style.overflow = '';

            }
        });
    }
};

$.prototype.createModal = function({title, body}, {count , setting}) {

    for(let i = 0; i<this.length; i++) {
       const id = this[i].getAttribute('data-target');

       const modal = document.createElement('div');
       modal.classList.add('modal');
       
       modal.setAttribute('id', id.slice(1));

       const buttons = [];
    //    setting = [[text, [classNames], close, cb]]
       for (let j = 0; j < count; j++) {

           const btn = document.createElement('button');

           btn.classList.add('btn', ...setting[j][1]);

           btn.textContent = setting[j][0];

           if(setting[j][2]) {
               btn.setAttribute('data-close', true);
           }

           if(typeof(setting[j][3]) == 'function') {
               btn.addEventListener('click', setting[j][3]);
           }

           buttons.push(btn);
           
       }
       modal.innerHTML = `
       <div class="modal__dialog">
                <div class="modal__content">
                    
                    <div class="modal__header">
                        <span class="close" data-close>&times;</span>
                        <div class="modal__title">${title}</div>
                    </div>
                    <div class="modal__body">
                        ${body}
                    </div>
                    <div class="modal__footer">
                    </div>
                </div>
            </div>
       `;

       modal.querySelector(`${id} .modal__footer`).append(...buttons);

       document.body.append(modal);
       $(modal).fadeIn(200);
    }
    this.modal(true);
};