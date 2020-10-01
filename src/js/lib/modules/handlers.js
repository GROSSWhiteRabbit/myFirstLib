
import $ from '../core';

$.prototype.on = function(eventName, callBack, ...numbersElemets) {
    if(typeof(eventName) == 'string' && typeof(callBack) == 'function' && numbersElemets.length > 0 ){ 
        for(let value of numbersElemets) {
            if(!isFinite(value) ) {
                console.error(`Invalid parameter of the "on" function. Parameter: "${value}" not number or infinite`);
                continue;
            }

            if(!this[Math.round(+value)]) {
                console.error(`Element with index "${value}" not found of the "on" function`);
                continue;
            }

            this[value].addEventListener(eventName, callBack, false);


        }


    } else if (typeof(eventName) == 'string' && typeof(callBack) == 'function') {
        for(let i = 0; i < this.length; i++) {
            this[i].addEventListener(eventName, callBack, false);
        }



    } else if(Array.isArray(eventName) && typeof(callBack) == 'function' && numbersElemets.length > 0) {
        for(let value of numbersElemets) {
            if(!isFinite(value) ) {
                console.error(`Invalid parameter of the "on" function. Parameter: "${value}" not number or infinite`);
                continue;
            }

            if(!this[Math.round(+value)]) {
                console.error(`Element with index "${value}" not found of the "on" function`);
                continue;
            }
            for(let event of eventName ) {
                if(typeof(event) != 'string') {

                    console.error(`Event:"${event}" is not a string of the "on" function`);
                    continue;
                }
                this[value].addEventListener(event, callBack, false);
            }
            


        }
    } else if(Array.isArray(eventName) && typeof(callBack) == 'function') {
        for(let i = 0; i < this.length; i++) {

            for(let event of eventName ) {
                if(typeof(event) != 'string') {

                    console.error(`Event:"${event}" is not a string of the "on" function`);
                    continue;
                }
                this[i].addEventListener(event, callBack, false);
            }
            


        }
    } else {
        if(typeof(callBack) != 'function') {
            console.error(`Invalid callBack function of the "on" function`);
        }

        if(typeof(eventName) != 'string' && !Array.isArray(eventName)) {
            console.error(`Invalid eventNames of the "on" function`);
        }
    }
    return this;
    
};


$.prototype.off = function(eventName, callBack, ...numbersElemets) {
    if(typeof(eventName) == 'string' && typeof(callBack) == 'function' && numbersElemets.length > 0 ){ 
        for(let value of numbersElemets) {
            if(!isFinite(value) ) {
                console.error(`Invalid parameter of the "off" function. Parameter: "${value}" not number or infinite`);
                continue;
            }

            if(!this[Math.round(+value)]) {
                console.error(`Element with index "${value}" not found of the "off" function`);
                continue;
            }

            this[value].removeEventListener(eventName, callBack, false);


        }


    } else if (typeof(eventName) == 'string' && typeof(callBack) == 'function') {
        for(let i = 0; i < this.length; i++) {
            this[i].removeEventListener(eventName, callBack, false);
        }



    } else if(Array.isArray(eventName) && typeof(callBack) == 'function' && numbersElemets.length > 0) {
        for(let value of numbersElemets) {
            if(!isFinite(value) ) {
                console.error(`Invalid parameter of the "off" function. Parameter: "${value}" not number or infinite`);
                continue;
            }

            if(!this[Math.round(+value)]) {
                console.error(`Element with index "${value}" not found of the "off" function`);
                continue;
            }
            for(let event of eventName ) {
                if(typeof(event) != 'string') {

                    console.error(`Event:"${event}" is not a string of the "off" function`);
                    continue;
                }
                this[value].removeEventListener(event, callBack, false);
            }
            


        }
    } else if(Array.isArray(eventName) && typeof(callBack) == 'function') {
        for(let i = 0; i < this.length; i++) {

            for(let event of eventName ) {
                if(typeof(event) != 'string') {

                    console.error(`Event:"${event}" is not a string of the "off" function`);
                    continue;
                }
                this[i].removeEventListener(event, callBack, false);
            }
            


        }
    } else {
        if(typeof(callBack) != 'function') {
            console.error(`Invalid callBack function of the "off" function`);
        }

        if(typeof(eventName) != 'string' && !Array.isArray(eventName)) {
            console.error(`Invalid eventNames of the "off" function`);
        }
    }
    return this;
    
};




$.prototype.click = function(callBack, ...numbersElemets) {
    if(typeof(callBack) == 'function' && numbersElemets.length > 0 ){ 

        for(let value of numbersElemets) {
            if(!isFinite(value) ) {
                console.error(`Invalid parameter of the "click" function. Parameter: "${value}" not number or infinite`);
                continue;
            }

            if(!this[Math.round(+value)]) {
                console.error(`Element with index "${value}" not found of the "click" function`);
                continue;
            }

            this[Math.round(+value)].addEventListener('click', callBack, false);


        }


    } else if (typeof(callBack) == 'function') {
        for(let i = 0; i < this.length; i++) {
            this[i].addEventListener('click', callBack, false);
        }



    } else if(typeof(callBack) == 'number') {

        numbersElemets.push(callBack);
        
        for(let value of numbersElemets) {
            if(!isFinite(value) ) {
                console.error(`Invalid parameter of the "click" function. Parameter: "${value}" not number or infinite`);
                continue;
            }

            if(!this[Math.round(+value)]) {
                console.error(`Element with index "${value}" not found of the "click" function`);
                continue;
            }

            this[Math.round(+value)].click();


        }



    } else if(callBack == undefined && numbersElemets.length <= 0) {
        for(let i = 0; i < this.length; i++) {
            this[i].click();
        }


    } else  {

        if(typeof(callBack) != 'function' && typeof(callBack) != 'number' ) {
            console.error(`Invalid parameters  of the "click" function`);
        }


    }

    return this;
    
};









