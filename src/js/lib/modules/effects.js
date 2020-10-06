import $ from '../core';

$.prototype.animationOverTime = function(dur, cb, fin) {
    let startTime;
    const _animationOverTime = (time)=> {

        if(!startTime) {
            startTime = time;
        }

        const  timeElapsed = time-startTime,
                progress = Math.min(timeElapsed/dur, 1);

        cb(progress);
        if(timeElapsed < dur) {
            requestAnimationFrame(_animationOverTime); 
        } else {
            if(typeof fin == 'function') {
                fin();
            }
        }
    };

    return _animationOverTime;
};


$.prototype.fadeIn = function(dur = 1000, display = 'block', fin) {
    if(!isFinite(dur) ) {
        console.error(`Invalid parameter of the "fadeIn" function. Parameter duration: "${dur}" not number or infinite`);
        return this;
    }
    if(typeof display != 'string' ) {
        console.error(`Invalid parameter of the "fadeIn" function. Parameter display: "${display}" is not a string `);
        return this;
    }
    if(fin && typeof(fin) != 'function') {
        console.error(`Invalid parameter of the "fadeIn" function. Parameter fin: "${fin}" is not a function `);
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display;
        const _fadeIn = (progress)=>{
            this[i].style.opacity = progress;
        };
        const ani =  this.animationOverTime(dur, _fadeIn, fin);

         requestAnimationFrame(ani);
        
    }
    return this;
    
};

$.prototype.fadeOut = function(dur = 1000, display = 'block', fin) {
    if(!isFinite(dur) ) {
        console.error(`Invalid parameter of the "fadeIn" function. Parameter duration: "${dur}" not number or infinite`);
        return this;
    }
    if(typeof display != 'string' ) {
        console.error(`Invalid parameter of the "fadeIn" function. Parameter display: "${display}" is not a string `);
        return this;
    }
    if(fin && typeof(fin) != 'function') {
        console.error(`Invalid parameter of the "fadeIn" function. Parameter fin: "${fin}" is not a function `);
        return this;
    }
    
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display;
        const fadeOut = (progress)=>{

            this[i].style.opacity = 1 - progress;

            if(progress== 1) {

                this[i].style.display = 'none';
            }
        };
        const ani =  this.animationOverTime(dur, fadeOut, fin);

        requestAnimationFrame(ani);
        
    }
    return this;

};