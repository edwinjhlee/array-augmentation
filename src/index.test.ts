
import { iterx, t } from "iterator-utils";

import "./index"

console.log("============")

console.log(([1,2,3] as any).ifilter)

console.log( 
    [1, 2, 3, 4, 5]
        .iterx()
        .filter( (e: number)=>e%2===0 )
        .map( e=>e*100 )
        .toArray()
)


function calPrime(n: number){
    const primes = [2]
    t.seq(3, 2, n)
        .iterx()
        .take( (num: number) => primes.iterx()
                .take(e => e*e <= num)
                .map(e => num % e !== 0).allTrue()
        )
        .forEach(e => primes.push(e))
    return primes
}

const tt = calPrime(100).iterx().groupBy(e => e%10)
console.log(tt)


