

const $ = function(selector, ...numbers) {
    return new $.prototype.init(selector, numbers);
};

$.prototype.init = function(selector, numbers) {
    if(!selector) {
        return this;
    }

    if(selector.tagName) {
        this[0]= selector;
        this.length = 1;
        return this;
    }

    if(selector && typeof(selector)!= 'string') {
        console.error(`Invalid parameter of the "init" function. Parameter selector: "${selector}" not string or DOM element`);
        return;
    }
    
    if(numbers.length == 0) {
        Object.assign(this, document.querySelectorAll(selector));    

        this.length = document.querySelectorAll(selector).length;

    } else if (numbers.length > 0) {
        const arr = [];

        for(let value of numbers) {
            if(!isFinite(value) ) {
                console.error(`Invalid parameter of the "init" function. Parameter: "${value}" not number or infinite`);
                continue;
            }
            if(!document.querySelectorAll(selector)[value]) {
                console.error(`Element with selector "${selector}" and index "${value}" not found of the "init" function`);
                continue;
            }
            arr.push(document.querySelectorAll(selector)[value]);
        }

        Object.assign(this, arr);    

        this.length = arr.length;

    } else {
        console.error('Invalid parameters of the "init" function');
    }

    
    return this;

};

window.$ = $;

$.prototype.init.prototype = $.prototype;




export default $;