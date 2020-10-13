import $ from './lib/lib';
// console.log($('dropdown__toggle'));

$('button', 0).on('click',()=>{
    console.log($('.w_500', 0).fadeToggle(200));
});
$('button', 1).click(()=>{
    console.log($('.w_500', 1).fadeIn());
});
$('button', 2).click(()=>{
    console.log($('.w_500').fadeToggle(1000, 'block'));
});
$('.dropdown__toggle').dropdown();

$('[data-toggle="modal"]').click((e)=>{
    $(e.target).createModal({
        title :'Modal Title',
        body: 'zdec kakoito text. Mozhete pridumat sami. Esli est jelanie konechno.'}, {
            count : 2,
            setting: [
                [
                    'Save Change',
                    ['btn_seccess', 'mr_10'],
                    false,
                    ()=> {
                        alert( `change saved`);
                    }
                ],
                [
                    'Close',
                    ['btn_danger', 'mr_10'],
                    true
                ]
            ]
    
        });
});
$('[data-tabpanel] .tab__item').tab();
$('.accordion__head').accordion();

$('.carusel').slider();
$().post('https://jsonplaceholder.typicode.com/posts',JSON.stringify({lala:"tralala"})).then(res=> {
    console.log(res);
});