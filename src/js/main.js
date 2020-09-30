import './lib/lib';

console.log($('div').hide().show( 1, 2, ).toggle().addClass( 'first',1, 2, )
.on(['click', 'mouseenter'],consol)
.off(['click', 'mouseenter'],consol, 3).click(consol, 3));  

function consol () {
console.log("event");
}