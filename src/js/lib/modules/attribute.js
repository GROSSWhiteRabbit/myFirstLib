import $ from '../core';


$.prototype.setAttributes = function(name, value, ...numbersElemets) {
    if(typeof(name) == 'string' && (typeof(value) == 'string' || typeof(value) == 'number') && numbersElemets.length > 0 ){ 
        for(let number of numbersElemets) {
            if(!isFinite(number) ) {
                console.error(`Invalid parameter of the "setAttributes" function. Parameter: "${number}" not number or infinite`);
                continue;
            }

            if(!this[Math.round(+number)]) {
                console.error(`Element with index "${number}" not found of the "setAttributes" function`);
                continue;
            }

            this[Math.round(+number)].setAttribute(name, value);


        }


    } else if (typeof(name) == 'string' && (typeof(value) == 'string' || typeof(value) == 'number')) {
        for(let i = 0; i < this.length; i++) {
            this[i].setAttribute(name, value);
        }



    } else {
        if(typeof(value) != 'string' && typeof(value) != 'number') {
            console.error(`Invalid value  of the "setAttributes" function`);
        }

        if(typeof(name) != 'string' ) {
            console.error(`Invalid name of the "setAttributes" function`);
        }
    }
    return this;
    
};


$.prototype.getAttributes = function(name, ...numbersElemets) {
    if(typeof(name) == 'string' && numbersElemets.length > 0 ){ 
        const values =[];
        for(let number of numbersElemets) {
            if(!isFinite(number) ) {
                console.error(`Invalid parameter of the "getAttributes" function. Parameter: "${number}" not number or infinite`);
                continue;
            }

            if(!this[Math.round(+number)]) {
                console.error(`Element with index "${number}" not found of the "getAttributes" function`);
                continue;
            }

            values.push(this[Math.round(+number)].getAttribute(name));


        }
        return values;


    } else if (typeof(name) == 'string' ) {
        const values =[];
        for(let i = 0; i < this.length; i++) {
           values.push(this[i].getAttribute(name));
        }
        return values;


    } else {

        if(typeof(name) != 'string' ) {
            console.error(`Invalid name of the "getAttributes" function`);
        }
    }
    return this;
    
};



$.prototype.removeAttributes = function(name, ...numbersElemets) {
    if(typeof(name) == 'string' && numbersElemets.length > 0 ){ 
        for(let number of numbersElemets) {
            if(!isFinite(number) ) {
                console.error(`Invalid parameter of the "removeAttributes" function. Parameter: "${number}" not number or infinite`);
                continue;
            }

            if(!this[Math.round(+number)]) {
                console.error(`Element with index "${number}" not found of the "removeAttributes" function`);
                continue;
            }

            this[Math.round(+number)].removeAttribute(name);


        }


    } else if (typeof(name) == 'string' ) {
        for(let i = 0; i < this.length; i++) {
           this[i].removeAttribute(name);
        }


    } else {

        if(typeof(name) != 'string' ) {
            console.error(`Invalid name of the "removeAttributes" function`);
        }
    }
    return this;
    
};






$.prototype.someAttributes = function(...attributeNames) {

    if(typeof(attributeNames[attributeNames.length - 1]) == 'string') {

        for(let i = 0; i <this.length; i++ ) {
            if(!this[i].tagName){
                continue;
            }
            for(let att of attributeNames) {
                if(!this[i].hasAttribute(att)) {
                    return true;
                }
            }
        
        }



    } else if(isFinite(attributeNames[attributeNames.length - 1])){
        
        let digits = [];
        let attributes = [];
        let prev = 'string';
        for(let value of attributeNames) {
            if (isFinite(value)){

                digits.push(+value);
                prev = value;


            } else if (typeof(value) === 'string' && typeof(prev) === 'string') {

                attributes.push(value);
                prev = value;


            } else if (isFinite(prev) && typeof(value) === 'string') {
                for(let digit of digits) {
                    if(!this[digit].tagName){
                        continue;
                    }
                    for(let att of attributes) {
                        if(!this[digit].hasAttribute(att)) {
                            return true;
                        }
                    }
                
                }
                digits = [];
                attributes = [value];
                prev = value;


            } else{
                console.error(`Invalid parameter of the "someAttributes" function. Parameter: "${value}" not number or string`);
            }

        }

        if(digits.length > 0 && attributes.length > 0) {
            for(let digit of digits) {
                if(!this[digit].tagName){
                    continue;
                }
                for(let att of attributes) {
                    if(!this[digit].hasAttribute(att)) {
                        return true;
                    }
                }
            
            }
            
        }
        
    } else {
        console.error('Invalid parameters of the "someAttributes" function');
    }
   
    return false;


};








$.prototype.everyAttributes = function(...attributeNames) {

    if(typeof(attributeNames[attributeNames.length - 1]) == 'string') {

        for(let i = 0; i <this.length; i++ ) {
            if(!this[i].tagName){
                continue;
            }
            for(let att of attributeNames) {
                if(!this[i].hasAttribute(att)) {
                    return false;
                }
            }
        
        }



    } else if(isFinite(attributeNames[attributeNames.length - 1])){
        
        let digits = [];
        let attributes = [];
        let prev = 'string';
        for(let value of attributeNames) {
            if (isFinite(value)){

                digits.push(+value);
                prev = value;




            } else if (typeof(value) === 'string' && typeof(prev) === 'string') {

                attributes.push(value);
                prev = value;


            } else if (isFinite(prev) && typeof(value) === 'string') {
                for(let digit of digits) {
                    if(!this[digit].tagName){
                        continue;
                    }
                    for(let att of attributes) {
                        if(!this[digit].hasAttribute(att)) {
                            return false;
                        }
                    }
                
                }
                digits = [];
                attributes = [value];
                prev = value;


            } else{
                console.error(`Invalid parameter of the "everyAttributes" function. Parameter: "${value}" not number or string`);
            }

        }

        if(digits.length > 0 && attributes.length > 0) {
            for(let digit of digits) {
                if(!this[digit].tagName){
                    continue;
                }

                for(let att of attributes) {
                    if(!this[digit].hasAttribute(att)) {
                        return false;
                    }
                }

            
            }
            
        }
        
    } else {
        console.error('Invalid parameters of the "everyAttributes" function');
    }
   
    return true;


};