import { IterX, AsyncIterX, iterx, utils } from "iterator-utils";

export type CONDITION<T> = string | RegExp | ((astr: T)=>boolean)

declare global {
    interface Array<T> {

        // KEY
        iterx: () => IterX.Type<T>

        // Important
        mapToAsyncIterX: <O>(f: (e: T) => Promise<O> ) => AsyncIterX.Type<T>

        /*/ Good to have
        min(): T
        max(): T
        

        // optional
        chain(...iteratorList: Array<Iterable<T>>): Array<T>
        */
    }
}

export function iter<T>(arr: Array<T>){
    return iterx(arr[Symbol.iterator]())
}

export function inject(){

    Array.prototype.iterx = function(){
        return iter(this)
    }

    Array.prototype.mapToAsyncIterX = function <I, O>(f: (e: I) => Promise<O>) {
        return utils.asyncIterator.mapToAsync<I, O>(this, f)
    }

    /*
    Array.prototype.min = function <T>() {
        return utils.iterator.min(this)
    }

    Array.prototype.max = function <T>() {
        return utils.iterator.max(this)
    }

    Array.prototype.chain = function <T>(...iteratorList: Array<Iterable<T>>) {
        return utils.array.chain(this, ...iteratorList)
    }
    */

}

inject()
