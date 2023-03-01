class MyPromise {
    constructor(executor) {
        this.queue = []
        this.errorHandler = () => {}
        this.finallyHandler = () => {}
        try {
            executor.call(null, this.onResolve.bind(this), this.onReject.bind(this))
        } catch (e) {
            this.errorHandler(e)
        } finally {
            this.finallyHandler()
        }
    }

    onResolve(data) {
        this.queue.forEach(callback => {
            data = callback(data)
        })
        this.finallyHandler()
    }

    onReject(error) {
        this.errorHandler(error)
        this.finallyHandler()
    }

    then(fn) {
        this.queue.push(fn)
        return this
    }
    catch(fn) {
        this.errorHandler = fn
        return this
    }
    finally(fn) {
        this.finallyHandler = fn
    }
}

// default Promise use example:
// const defPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('defPromise returned value')
//     }, 1500)
// })
//
// defPromise
//     .then(value => {
//         console.log('then received: ', value)
//         return value.toUpperCase()
//     })
//     .then(value => {
//         console.log('second then received: ', value)
//     })
//     .catch(err => console.log('Error: ', err))
//     .finally(() => console.log('Finally'))

export {MyPromise}
