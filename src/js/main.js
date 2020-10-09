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
$('[data-toggle="modal"]').modal();
$('[data-toggle="modal"]').click();
function consol () {
    console.log("event");
}