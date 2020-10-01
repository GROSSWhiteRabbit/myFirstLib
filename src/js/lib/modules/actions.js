import $ from '../core';



$.prototype.html = function(...elemets) {

    if(typeof(elemets[0]) == 'string' && elemets.length == 1) {

        for(let i = 0; i < this.length; i++ ) {
            if(!this[i].tagName){
                continue;
            }
            this[i].innerHTML = elemets[0];
        
        }



    } else if(elemets.length > 1 && 
        typeof(elemets[0]) == 'string') {
        
        if(typeof(elemets[elemets.length - 1])=='string') {
            for(let i = 0; i < this.length; i++ ) {
                if(!this[i].tagName){
                    continue;
                }
                this[i].innerHTML = elemets[elemets.length - 1];
            
            }
        }



        let digits = [];
        let contents = [];
        let prev = 'string';
        for(let value of elemets) {
            
        if(contents.length >1) {
            console.error(`incorrect input of parameters in the "html" function`);
        }


        if (isFinite(value)){

            digits.push(+value);
            prev = value;


        } else if (typeof(value) === 'string' && typeof(prev) === 'string') {

            contents.push(value);
            prev = value;


        } else if (isFinite(prev) && typeof(value) === 'string') {
            
            for(let digit of digits) {
                if(!this[digit].tagName){
                    continue;
                }
                this[digit].innerHTML = contents[0];
            
            }
            digits = [];
            contents = [value];
            prev = value;


        } else{
                console.error(`Invalid parameter of the "html" function. Parameter: "${value}" not number or string`);
        }

        }

        if(digits.length > 0 && contents.length > 0) {
            for(let digit of digits) {
                if(!this[digit].tagName){
                    continue;
                }
                this[digit].innerHTML = contents[0];
            
            }
            
        }
        
    }else  if(elemets.every((elem)=>{return typeof(elem)=='number';}) && elemets.length > 0 ){ 

        const contents =[];
        for(let number of elemets) {
            if(!isFinite(number) ) {
                console.error(`Invalid parameter of the "html" function. Parameter: "${number}" not number or infinite`);
                continue;
            }

            if(!this[Math.round(+number)]) {
                console.error(`Element with index "${number}" not found of the "html" function`);
                continue;
            }

            contents.push(this[Math.round(+number)].innerHTML);


        }
        return contents;


    } else if (elemets.length == 0 ) {
        const contents =[];
        for(let i = 0; i < this.length; i++) {
            contents.push(this[i].innerHTML);
        }
        return contents;


    } else {

        console.error(`incorrect input of parameters in the "html" function`);

    }
    return this;
    
};

$.prototype.eq = function(i) {
    if(!isFinite(i)) {
        return this;
    }

    const indexElement = this[i],
          objLength = Object.keys(this).length;
    for (let j = 0; j < objLength; j++) {
        delete this[j];
        
    }
    this[0] = indexElement;
    this.length = 1;
    return this;
};