import {MyPromise} from "./promise/MyPromise.js";

const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('MyPromise returned value')
    }, 1500)
})

promise
    .then(value => {
        console.log('then received: ', value)
        return value.toUpperCase()
    })
    .then(value => {
        console.log('second then received: ', value)
    })
    .catch(err => console.log('Error: ', err))
    .finally(() => console.log('Finally'))


console.log(promise)

