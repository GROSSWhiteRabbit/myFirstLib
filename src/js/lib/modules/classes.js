import $ from '../core';


$.prototype.addClass = function(...classNames) {

    if(typeof(classNames[classNames.length - 1]) == 'string') {

        for(let i = 0; i <this.length; i++ ) {
            if(!this[i].classList){
                continue;
            }
            this[i].classList.add(...classNames);
        
        }



    } else if(isFinite(classNames[classNames.length - 1])) {
        
        let digits = [];
        let clases = [];
        let prev = 'string';
        for(let value of classNames) {
        if (isFinite(value)){

            digits.push(+value);
            prev = value;


        } else if (typeof(value) === 'string' && typeof(prev) === 'string') {

            clases.push(value);
            prev = value;


        } else if (isFinite(prev) && typeof(value) === 'string') {

            for(let digit of digits) {
                if(!this[digit].classList){
                    continue;
                }
                this[digit].classList.add(...clases);
            
            }
            digits = [];
            clases = [value];
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

    if(typeof(classNames[classNames.length - 1]) == 'string') {

        for(let i = 0; i <this.length; i++ ) {
            if(!this[i].classList){
                continue;
            }
            this[i].classList.remove(...classNames);
        
        }



    } else if(isFinite(classNames[classNames.length - 1])) {
        
        let digits = [];
        let clases = [];
        let prev = 'string';
        for(let value of classNames) {
        if (isFinite(value)){

            digits.push(+value);
            prev = value;


        } else if (typeof(value) === 'string' && typeof(prev) === 'string') {

            clases.push(value);
            prev = value;


        } else if (isFinite(prev) && typeof(value) === 'string') {
            for(let digit of digits) {
                if(!this[digit].classList){
                    continue;
                }
                this[digit].classList.remove(...clases);
            
            }
            digits = [];
            clases = [value];
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

    if(typeof(classNames[classNames.length - 1]) == 'string') {

        for(let i = 0; i <this.length; i++ ) {
            if(!this[i].classList){
                continue;
            }
            for(let clas of classNames) {
                this[i].classList.toggle(clas);
            }

        
        }



    } else if(isFinite(classNames[classNames.length - 1])) {
        
        let digits = [];
        let clases = [];
        let prev = 'string';
        for(let value of classNames) {
        if (isFinite(value)){

            digits.push(+value);
            prev = value;


        } else if (typeof(value) === 'string' && typeof(prev) === 'string') {

            clases.push(value);
            prev = value;


        } else if (isFinite(prev) && typeof(value) === 'string') {
            for(let digit of digits) {
                if(!this[digit].classList){
                    continue;
                }
                for(let clas of clases) {
                    this[digit].classList.toggle(clas);

                }
            
            }
            digits = [];
            clases = [value];
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
                for(let clas of clases) {
                    this[digit].classList.toggle(clas);

                }            
            }
            
        }
        
    } else {
        console.error('Invalid parameters of the "toggleClass" function');
    }
   
    return this;


};






$.prototype.someClass = function(...classNames) {

    if(typeof(classNames[classNames.length - 1]) == 'string') {

        for(let i = 0; i <this.length; i++ ) {
            if(!this[i].classList){
                continue;
            }
           if(this[i].classList.contains(...classNames)) {
               return true;
           }
        
        }



    } else if(isFinite(classNames[classNames.length - 1])){
        
        let digits = [];
        let clases = [];
        let prev = 'string';
        for(let value of classNames) {
            if (isFinite(value)){

                digits.push(+value);
                prev = value;


            } else if (typeof(value) === 'string' && typeof(prev) === 'string') {

                clases.push(value);
                prev = value;


            } else if (isFinite(prev) && typeof(value) === 'string') {
                for(let digit of digits) {
                    if(!this[digit].classList){
                        continue;
                    }
                    if(this[digit].classList.contains(...clases)) {
                        return true;
                    }
                
                }
                digits = [];
                clases = [value];
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

    if(typeof(classNames[classNames.length - 1]) == 'string') {

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



    } else if(isFinite(classNames[classNames.length - 1])){
        
        let digits = [];
        let clases = [];
        let prev = 'string';
        for(let value of classNames) {
            if (isFinite(value)){

                digits.push(+value);
                prev = value;




            } else if (typeof(value) === 'string' && typeof(prev) === 'string') {

                clases.push(value);
                prev = value;


            } else if (isFinite(prev) && typeof(value) === 'string') {
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
                digits = [];
                clases = [value];
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