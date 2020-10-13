import $ from '../core';

$.prototype.tab = function() {
    for (let i = 0; i < this.length; i++) {
        console.log(    )
        $(this[i]).click(()=>{
            $(this[i])
            .addClass('tab__item_active')
            .siblings()
            .removeClass('tab__item_active');

            $(this[i])
            .closest('.tab')
            .find('.tab__content')
            .removeClass('tab__content_active')
            .eq(i)
            .addClass('tab__content_active');
     
            

                
                
        });
        
    }
};