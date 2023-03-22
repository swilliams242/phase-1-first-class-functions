function callBack (name) {
    console.log(`Hello ${name}`);
}

function receivesAFunction (callBack) {
    callBack();
}

function returnsANamedFunction () {
    return callBack;
}

function returnsAnAnonymousFunction () {
    let name;
    return function () {
        console.log(`Hello ${name}`);
    }
}