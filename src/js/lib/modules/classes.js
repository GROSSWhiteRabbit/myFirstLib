import $ from '../core';


$.prototype.addClass = function(...classNames) {

    if(typeof(classNames[0]) == 'string') {

        for(let i = 0; i <this.length; i++ ) {
            if(!this[i].classList){
                continue;
            }
            this[i].classList.add(...classNames);
        
        }



    } else if(isFinite(classNames[0])) {
        
        let digits = [];
        let clases = [];
        let prev = 0;
        for(let value of classNames) {
        if (isFinite(value) && isFinite(prev) ){

            digits.push(+value);
            prev = value;


        } else if (typeof(value) === 'string') {

            clases.push(value);
            prev = value;


        } else if (isFinite(value) && typeof(prev) === 'string') {

            for(let digit of digits) {
                if(!this[digit].classList){
                    continue;
                }
                this[digit].classList.add(...clases);
            
            }
            digits = [value];
            clases = [];
            prev = value;


        } else{
                console.error(`Invalid parameter of the "addClass" function. Parameter: "${value}" not number or string`);
        }

        }

        if(digits.length > 0 && clases.length > 0) {
            for(let digit of digits) {
                if(!this[digit].classList){
                    continue;
                }
                this[digit].classList.add(...clases);
            
            }
            
        }
        
    } else {
        console.error('Invalid parameters of the "addClass" function');
    }
   
    return this;


};







$.prototype.removeClass = function(...classNames) {

    if(typeof(classNames[0]) == 'string') {

        for(let i = 0; i <this.length; i++ ) {
            if(!this[i].classList){
                continue;
            }
            this[i].classList.remove(...classNames);
        
        }



    } else if(isFinite(classNames[0])) {
        
        let digits = [];
        let clases = [];
        let prev = 0;
        for(let value of classNames) {
        if (isFinite(value) && isFinite(prev) ){

            digits.push(+value);
            prev = value;


        } else if (typeof(value) === 'string') {

            clases.push(value);
            prev = value;


        } else if (isFinite(value) && typeof(prev) === 'string') {
            for(let digit of digits) {
                if(!this[digit].classList){
                    continue;
                }
                this[digit].classList.remove(...clases);
            
            }
            digits = [value];
            clases = [];
            prev = value;


        } else{
                console.error(`Invalid parameter of the "removeClass" function. Parameter: "${value}" not number or string`);
        }

        }

        if(digits.length > 0 && clases.length > 0) {
            for(let digit of digits) {
                if(!this[digit].classList){
                    continue;
                }
                this[digit].classList.remove(...clases);
            
            }
            
        }
        
    } else {
        console.error('Invalid parameters of the "removeClass" function');
    }
   
    return this;


};

$.prototype.toggleClass = function(...classNames) {

    if(typeof(classNames[0]) == 'string') {

        for(let i = 0; i <this.length; i++ ) {
            if(!this[i].classList){
                continue;
            }
            this[i].classList.toggle(...classNames);
        
        }



    } else if(isFinite(classNames[0])) {
        
        let digits = [];
        let clases = [];
        let prev = 0;
        for(let value of classNames) {
        if (isFinite(value) && isFinite(prev) ){

            digits.push(+value);
            prev = value;


        } else if (typeof(value) === 'string') {

            clases.push(value);
            prev = value;


        } else if (isFinite(value) && typeof(prev) === 'string') {
            for(let digit of digits) {
                if(!this[digit].classList){
                    continue;
                }
                this[digit].classList.toggle(...clases);
            
            }
            digits = [value];
            clases = [];
            prev = value;


        } else{
                console.error(`Invalid parameter of the "toggleClass" function. Parameter: "${value}" not number or string`);
        }

        }

        if(digits.length > 0 && clases.length > 0) {
            for(let digit of digits) {
                if(!this[digit].classList){
                    continue;
                }
                this[digit].classList.toggle(...clases);
            
            }
            
        }
        
    } else {
        console.error('Invalid parameters of the "toggleClass" function');
    }
   
    return this;


};






$.prototype.someClass = function(...classNames) {

    if(typeof(classNames[0]) == 'string') {

        for(let i = 0; i <this.length; i++ ) {
            if(!this[i].classList){
                continue;
            }
           if(this[i].classList.contains(...classNames)) {
               return true;
           }
        
        }



    } else if(isFinite(classNames[0])){
        
        let digits = [];
        let clases = [];
        let prev = 0;
        for(let value of classNames) {
            if (isFinite(value) && isFinite(prev) ){

                digits.push(+value);
                prev = value;


            } else if (typeof(value) === 'string') {

                clases.push(value);
                prev = value;


            } else if (isFinite(value) && typeof(prev) === 'string') {
                for(let digit of digits) {
                    if(!this[digit].classList){
                        continue;
                    }
                    if(this[digit].classList.contains(...clases)) {
                        return true;
                    }
                
                }
                digits = [value];
                clases = [];
                prev = value;


            } else{
                console.error(`Invalid parameter of the "someClass" function. Parameter: "${value}" not number or string`);
            }

        }

        if(digits.length > 0 && clases.length > 0) {
            for(let digit of digits) {
                if(!this[digit].classList){
                    continue;
                }
                if(this[digit].classList.contains(...clases)) {
                    return true;
                }
            
            }
            
        }
        
    } else {
        console.error('Invalid parameters of the "someClass" function');
    }
   
    return false;


};








$.prototype.everyClass = function(...classNames) {

    if(typeof(classNames[0]) == 'string') {

        for(let i = 0; i <this.length; i++ ) {
            if(!this[i].classList){
                continue;
            }
            for(let clas of classNames) {
                if(!this[i].classList.contains(clas)) {
                    return false;
                }
            }
        
        }



    } else if(isFinite(classNames[0])){
        
        let digits = [];
        let clases = [];
        let prev = 0;
        for(let value of classNames) {
            if (isFinite(value) && isFinite(prev) ){

                digits.push(+value);
                prev = value;


            } else if (typeof(value) === 'string') {

                clases.push(value);
                prev = value;


            } else if (isFinite(value) && typeof(prev) === 'string') {
                for(let digit of digits) {
                    if(!this[digit].classList){
                        continue;
                    }
                    for(let clas of clases) {
                        if(!this[digit].classList.contains(clas)) {
                            return false;
                        }
                    }
                
                }
                digits = [value];
                clases = [];
                prev = value;


            } else{
                console.error(`Invalid parameter of the "everyClass" function. Parameter: "${value}" not number or string`);
            }

        }

        if(digits.length > 0 && clases.length > 0) {
            for(let digit of digits) {
                if(!this[digit].classList){
                    continue;
                }

                for(let clas of clases) {
                    if(!this[digit].classList.contains(clas)) {
                        return false;
                    }
                }

            
            }
            
        }
        
    } else {
        console.error('Invalid parameters of the "everyClass" function');
    }
   
    return true;


};