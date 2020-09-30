import $ from '../core';


$.prototype.hide = function(...n) {


    if(n.length>0) {

        for(let value of n) {

            if(!isFinite(value))  {
                console.error(`Invalid parameter of the "hide" function. Parameter: "${value}" not number or infinite`);
            }

            if(!isFinite(value) || !this[Math.round(+value)] || !this[Math.round(+value)].style){
                continue;
            } else {
                this[Math.round(+value)].style.display = 'none';
            }
        }



    } else if (n.length == 0) {

        for (let i = 0; i < this.length; i++) {
            if(!this[i].style){
                continue;
            } else {
                this[i].style.display = 'none';
            }
        }


    } else {
        console.error(`Invalid parameters of the "hide" function`);
    }

    return this;
};

$.prototype.show = function(...n) { 

    if (n.length == 1 && (n[0] == 'flex' || n[0] == 'block')) {

        for (let i = 0; i < this.length; i++) {
            if(!this[i].style){
                continue;   
            } else {
                this[i].style.display = n[0];
            }
        }


    } else if (n.length > 1 && (n[n.length - 1] == 'flex' || n[n.length - 1] == 'block')) {

        for (let value of n) {
            if (!isFinite(value) && value != n[n.length - 1] ) {
                console.error(`Invalid parameter of the "show" function. Parameter: "${value}" not number or infinite`);
            }

            if(!isFinite(value) || !this[Math.round(+value)] || !this[Math.round(+value)].style){
                continue;
            } else {
                this[Math.round(+value)].style.display = n[n.length - 1];
            }
        }



    } else if (n.length > 1 && (n[0] == 'flex' || n[0] == 'block')) {

        for (let value of n) {

            if (!isFinite(value) && value != n[0] ) {
                console.error(`Invalid parameter of the "show" function. Parameter: "${value}" not number or infinite`);
            }

            if(!isFinite(value) || !this[Math.round(+value)] || !this[Math.round(+value)].style){
                continue;
            } else {
                this[Math.round(+value)].style.display = n[0];
            }
        }



    } else if(n.length>0) {

        for(let value of n) {

            if (!isFinite(value)) {
                console.error(`Invalid parameter of the "show" function. Parameter: "${value}" not number or infinite`);
            }

            if(!isFinite(value) || !this[Math.round(+value)] || !this[Math.round(+value)].style){
                continue;
            } else {
                this[Math.round(+value)].style.display = '';
            }
        }



    } else if(n.length == 0) {

        for (let i = 0; i < this.length; i++) {
            if(!this[i].style){
                continue;
            } else {
                this[i].style.display = '';
            }
        }


    } else {
        console.error(`Invalid parameters of the "show" function`);
    }

    return this;

};


$.prototype.toggle = function(...n) {

    if (n.length == 1 && (n[0] == 'flex' || n[0] == 'block')) {
        for (let i = 0; i < this.length; i++) {
            if(!this[i].style){
                continue;   
            } else {
                
                if(this[i].style.display == 'none') {
                    this[i].style.display = n[0];
                } else {
                    this[i].style.display = 'none';
                }
                
            }
        }


    } else if (n.length > 1 && (n[n.length - 1] == 'flex' || n[n.length - 1] == 'block')) {

        for (let value of n) {

            if (!isFinite(value) && value !== n[n.length - 1] ) {
                console.error(`Invalid parameter of the "toggle" function. Parameter: "${value}" not number or infinite`);
            }

            if(!isFinite(value) || !this[Math.round(+value)] || !this[Math.round(+value)].style){
                continue;
            } else {

                if(this[Math.round(+value)].style.display == 'none') {
                    this[Math.round(+value)].style.display = n[n.length - 1];
                } else {
                    this[Math.round(+value)].style.display = 'none';
                }


            }
        }



    } else if (n.length > 1 && (n[0] == 'flex' || n[0] == 'block')) {

        for (let value of n) {

            if (!isFinite(value) && value != n[0] ) {
                console.error(`Invalid parameter of the "toggle" function. Parameter: "${value}" not number or infinite`);
            }


            if(!isFinite(value) || !this[Math.round(+value)] || !this[Math.round(+value)].style){
                continue;
            } else {

                if(this[Math.round(+value)].style.display == 'none') {
                    this[Math.round(+value)].style.display = n[0];
                } else {
                    this[Math.round(+value)].style.display = 'none';
                }


            }
        }



    } else if(n.length>0) {

        for(let value of n) {

            if (!isFinite(value)) {
                console.error(`Invalid parameter of the "toggle" function. Parameter: "${value}" not number or infinite`);
            }

            if(!isFinite(value) || !this[Math.round(+value)] || !this[Math.round(+value)].style){
                continue;
            } else {

                if(this[Math.round(+value)].style.display == 'none') {
                    this[Math.round(+value)].style.display = '';
                } else {
                    this[Math.round(+value)].style.display = 'none';
                }
            }
        }



    } else if(n.length == 0) {

        for (let i = 0; i < this.length; i++) {
            if(!this[i].style){
                continue;
            } else {

                if(this[i].style.display == 'none') {
                    this[i].style.display = '';
                } else {
                    this[i].style.display = 'none';
                }
            }
        }


    } else {
        console.error(`Invalid parameters of the "toggle" function`);
    }


    return this;

};