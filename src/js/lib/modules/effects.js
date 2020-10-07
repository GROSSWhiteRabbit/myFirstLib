import $ from '../core';

$.prototype._animationOverTime = function(dur, cb, fin) {
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

$.prototype._fadeIn = function(dur, display, fin, i) {
    this[i].style.display = display;
        const _fadeIn = (progress)=>{
            this[i].style.opacity = progress;
        };
        const ani =  this._animationOverTime(dur, _fadeIn, fin);

         requestAnimationFrame(ani);
};

$.prototype._fadeOut = function(dur, display, fin, i) {
    this[i].style.display = display;
    const _fadeOut = (progress)=>{

        this[i].style.opacity = 1 - progress;

        if(progress== 1) {

            this[i].style.display = 'none';
        }
    };
    const ani =  this._animationOverTime(dur, _fadeOut, fin);

    requestAnimationFrame(ani);
};

$.prototype._checkParametrsFadeFunctions =  function(nameFunctions, dur, display, fin )  {
    if(!isFinite(dur) ) {
        console.error(`Invalid parameter of the "${nameFunctions}" function. Parameter duration: "${dur}" not number or infinite`);
        return "error";
    }
    if(typeof display != 'string' ) {
        console.error(`Invalid parameter of the "${nameFunctions}" function. Parameter display: "${display}" is not a string `);
        return "error";
    }
    if(fin && typeof(fin) != 'function') {
        console.error(`Invalid parameter of the "${nameFunctions}" function. Parameter fin: "${fin}" is not a function `);
        return "error";
    }
};
$.prototype.fadeIn = function(dur = 1000, display = 'block', fin) {
    if(this._checkParametrsFadeFunctions('fadeIn',dur, display, fin) == 'error'){
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this._fadeIn(dur, display, fin, i);
    }
    return this;
    
};

$.prototype.fadeOut = function(dur = 1000, display = 'block', fin) {
    if(this._checkParametrsFadeFunctions('fadeOut',dur, display, fin) == 'error'){
        return this;
    }

    
    for (let i = 0; i < this.length; i++) {
        this._fadeOut(dur, display, fin, i);

        
    }
    return this;

};

$.prototype.fadeToggle = function(dur = 1000, display = 'block', fin) {
    if(this._checkParametrsFadeFunctions('fadeToggle',dur, display, fin) == 'error'){
        return this;
    }


    for (let i = 0; i < this.length; i++) {
        if(window.getComputedStyle(this[i]).opacity == '0') {
            this._fadeIn(dur, display, fin, i);
        }  else {

            this._fadeOut(dur, display, fin, i);

        }

        
    }
    return this;
};