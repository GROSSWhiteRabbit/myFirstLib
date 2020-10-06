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
        console.error(`Invalid parameter of the "eq" function. Parameter: "${i}" not number or infinite`)
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

$.prototype.index = function() {
    const parent = this[0].parentNode,
          child = [...parent.children];
          
    const findMyIndex  = (item)=>{
        return item == this[0];
    };
    
    return child.findIndex(findMyIndex);
};

$.prototype.find = function(selector, ...numbers) {
    const copyObj = Object.assign({}, this);
    let countElementFind = 0,
        counter = 0;

    if (typeof(selector) != 'string') {
        console.error(`Invalid parameter of the "closest" function. Parameter selector: "${selector}" not string`);
        return this;



    } else if (numbers.length == 0) {

        for(let i = 0; i <copyObj.length; i++) {
            const arr =  copyObj[i].querySelectorAll(selector);
            for(let j = 0; j < arr.length; j++) {
                this[counter] = arr[j];
                counter++;
            }
            countElementFind += arr.length;

        }
        this.length = countElementFind;
        let objLength = Object.keys(this).length;
        if(objLength > countElementFind+1) {
            for(;objLength >= countElementFind; objLength-- ) {
                delete this[objLength];
            }
        }

    } else if(numbers.length >0) {

        for(let value of numbers) {


            if(!isFinite(value) ) {
                console.error(`Invalid parameter of the "closest" function. Parameter: "${value}" not number or infinite`);
                continue;
            }

            if(!copyObj[value]) {
                continue;
            } 
            const arr =  copyObj[value].querySelectorAll(selector);
            for(let j = 0; j < arr.length; j++) {
                this[counter] = arr[j];
                counter++;
            }
            countElementFind += arr.length;

        }
        this.length = countElementFind;
        let objLength = Object.keys(this).length;
        if(objLength > countElementFind+1) {
            for(;objLength >= countElementFind; objLength-- ) {
                delete this[objLength];
            }
        }

    } else {
        console.error('Invalid parameters of the "someAttributes" function');
    }

    return this;
};

$.prototype.closest = function(selector, ...numbers) {
    let arr = [];

    if (typeof(selector) != 'string') {
        console.error(`Invalid parameter of the "closest" function. Parameter: "${selector}" not string`);
        return this;



    } else if (numbers.length == 0) {

        for(let i = 0; i < this.length; i++) {
            let repeats = false;
            if(!this[i].closest(selector)) {
                repeats = true;
            } else {
                for(let j = 0; j < arr.length; j++) {
                    if (this[i].closest(selector) === arr[j]){
                        repeats = true;
                    }                
                }
            }
        
            if(!repeats){
        
                arr.push(this[i].closest(selector));    
            }
        }
        
        for(let i = 0; i < arr.length; i++) {
            this[i] = arr[i];

        }

        let objLength = Object.keys(this).length;
        if(objLength > arr.length+1) {
            for(;objLength >= arr.length; objLength-- ) {
                delete this[objLength];
            }
        }

        this.length = arr.length;

    } else if(numbers.length >0) {

        for(let value of numbers) {
            let repeats = false;
            
            if(!isFinite(value) ) {
                console.error(`Invalid parameter of the "closest" function. Parameter: "${value}" not number or infinite`);
                continue;
            }

            if(!this[value] || !this[value].closest(selector)) {
                continue;
            } 

            for(let j = 0; j < arr.length; j++) {
                if (this[value].closest(selector) === arr[j]){
                    repeats = true;
                }                
            }
            
        
            if(!repeats){
        
                arr.push(this[value].closest(selector));    
            }
        }
        
        for(let i = 0; i < arr.length; i++) {
            this[i] = arr[i];

        }

        let objLength = Object.keys(this).length;
        if(objLength > arr.length+1) {
            for(;objLength >= arr.length; objLength-- ) {
                delete this[objLength];
            }
        }

        this.length = arr.length;
    } else {
        console.error('Invalid parameters of the "someAttributes" function');
    }


    return this;

};

$.prototype.siblings = function(...numbers) {
    const copyObj = Object.assign({}, this);
    let countElementFind = 0,
        counter = 0;

    if (numbers.length == 0) {

        for(let i = 0; i <copyObj.length; i++) {
            const arr =  copyObj[i].parentNode.children;
            for(let j = 0; j < arr.length; j++) {
               if (copyObj[i] !== arr[j] ) {
                   this[counter] = arr[j];
                    counter++;
                }
            }
            countElementFind += arr.length-1;

        }
        this.length = countElementFind;
        let objLength = Object.keys(this).length;
        if(objLength > countElementFind+1) {
            for(;objLength >= countElementFind; objLength-- ) {
                delete this[objLength];
            }
        }

    } else if(numbers.length >0) {

        for(let value of numbers) {


            if(!isFinite(value) ) {
                console.error(`Invalid parameter of the "closest" function. Parameter: "${value}" not number or infinite`);
                continue;
            }

            if(!copyObj[value]) {
                continue;
            } 
            const arr =  copyObj[value].parentNode.children;
            for(let j = 0; j < arr.length; j++) {
                if (copyObj[value] != arr[j] ) {
                    this[counter] = arr[j];
                     counter++;
                 }
            }
            countElementFind += arr.length - 1;

        }
        this.length = countElementFind;
        let objLength = Object.keys(this).length;
        if(objLength > countElementFind+1) {
            for(;objLength >= countElementFind; objLength-- ) {
                delete this[objLength];
            }
        }

    } else {
        console.error('Invalid parameters of the "someAttributes" function');
    }

   
    return this;
};

