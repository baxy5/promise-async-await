let isTrue = true;

function someFunction(resolve, reject){
    if(isTrue){
        resolve('Yeah it is totally true!');
    }else{
        reject('No it is not true!');
    }
}

function myFirstPromise(){
    return new Promise(someFunction);
}

let firstPromise = myFirstPromise();

console.log(firstPromise);