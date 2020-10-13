import $ from '../core';

$.prototype.get = async function (url, dataTypeAnswer = 'json') {
    const res = await fetch(url);
    if(!res.ok){
        throw new Error(`could not feth ${url}, status:${res.status}` );
    }
    switch (dataTypeAnswer) {
        case 'json' : 
            return await res.json();
        case 'text': 
            return await res.text();
        case 'blob': 
            return await res.blob();
    }
};

$.prototype.post = async function (url, data, dataTypeAnswer = 'json') {

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data,
    });
    switch (dataTypeAnswer) {
        case 'json' : 
            return await res.json();
        case 'text': 
            return await res.text();
        case 'blob': 
            return await res.blob();
    }
};