import * as i from "iterator-utils"

declare global {
    interface Array<T> {
        ifilter: (f: (e: T) => boolean) => i.IterableIteratorX<T>
        imap: <I, O>(f: (e: I) => O) => i.IterableIteratorX<O>
        mapToAsync: <I, O>(f: (e: I) => Promise<O> ) => i.AsyncIterableIteratorX<O>
        foreach: (f: (e: T) => void) => void
        min(): T
        max(): T
    }
}

export function inject(){

    Array.prototype.ifilter = function <T>(f: (e: T) => boolean) {
        return i.ui.filter<T>(f, this)
    }

    Array.prototype.imap = function <I, O>(f: (e: I) => O) {
        return i.ui.map<I, O>(f, this)
    }

    Array.prototype.foreach = function <T>(f: (e: T) => void = e => {}) {
        return i.ua.foreach(f, this)
    }

    Array.prototype.min = function <T>() {
        const i = this[Symbol.iterator]()

        const r = i.next()
        if (r.done) {
            return null
        }
        let ret = r.value

        while (true) {
            const r = i.next()
            if (r.done === true) return ret
            ret = ret > r.value ? r.value : ret
        }
    }

    Array.prototype.max = function <T>() {
        const i = this[Symbol.iterator]()

        const r = i.next()
        if (r.done) {
            return null
        }
        let ret = r.value

        while (true) {
            const r = i.next()
            if (r.done === true) return ret
            ret = ret < r.value ? r.value : ret
        }
    }

    Array.prototype.foreach = function <T>(f: (e: T) => void = e => {}) {
        return i.ua.foreach(f, this)
    }

    Array.prototype.mapToAsync = function <I, O>(f: (e: I) => Promise<O>) {
        return i.uai.mapToAsync(f, this)
    }

}

inject()

// console.log([1,2,3].ifilter)

// export default Array
// export let a = 3

