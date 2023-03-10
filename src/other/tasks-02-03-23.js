const testArr = [1, 2, 3, 4, 4, 2, 8, 17, 9, 10, 10, 10, 8];

// return sum of odd numbers of array
function getOdd(arr) {
    return arr.reduce(
        (acc, val) => (val % 2 !==0) ? acc + val : acc,
        0
    );
}

// return array that contains only unique elements from arr
function getUnique(arr) {
    let map = new Map();
    arr.forEach(val => {
        let cur = map.get(val);
        map.set(val, cur ? cur + 1 : 1);
    })
    let result = [];
    map.forEach((val, key) => {
        if (val === 1) {
            result.push(key);
        }
    })
    return result;
//    return [1, 3, 17, 9];
}

// random greeting with corresponding random weight
function randomHello() {
    const greeting = {
        'Guten Tag': '10%',
        'Hello': '30%',
        'Bonjour' : '30%',
        'Salve' : '9%',
        'Hola' : '1%',
        'wtf' : '%',
    }
    let values = new Map();
    let hellos = new Map();
    let counter = 0;
    let greetCount = 0;
    for (let greetingKey in greeting) {
        let percent = parseInt(greeting[greetingKey]);
        if (!isNaN(percent) && percent > 0) {
            hellos.set(greetCount, greetingKey);
            for (let i = 0; i < percent; i++) {
                values.set(counter++, greetCount);
            }
            greetCount++;
        }
    }
    let randomGreet = Math.floor(Math.random() * values.size);
    return hellos.get(values.get(randomGreet));
}

export {getOdd, getUnique, randomHello, testArr}
