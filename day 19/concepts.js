let globalVar = "I'm global";

function myFunction() {
    let localVar = "I'm local";
    console.log(globalVar);
    console.log(localVar);
}

console.log(globalVar);

(function() {
    let message = "Hello!";
    console.log(message);
})();

console.log(hoistedVar);
var hoistedVar = "I'm hoisted";

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
