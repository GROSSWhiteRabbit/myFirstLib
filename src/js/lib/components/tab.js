import $ from '../core';

$.prototype.tab = function() {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(()=>{
            $(this[i])
            .addClass('tab__item_active')
            .siblings()
            .removeClass('tab__item_active');

            $(this[i]) // оборачиваем елемент в наш обьект 
            .closest('.tab') // находим родителя с классом tab
            .find('.tab__content')// находим детей с классом tab__content
            // удаляем всем елементам псевдамассива класс tab__content_active
            .removeClass('tab__content_active') 
            .eq(i) // получаем элеменn с индексом i 
            .addClass('tab__content_active'); // добавляем ему класс tab__content_active 
            

                
                
        });
        
    }
};