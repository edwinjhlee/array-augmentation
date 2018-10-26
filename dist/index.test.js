"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iterator_utils_1 = require("iterator-utils");
require("./index");
console.log("============");
console.log([1, 2, 3].ifilter);
console.log([1, 2, 3, 4, 5]
    .iterx()
    .filter((e) => e % 2 === 0)
    .map(e => e * 100)
    .toArray());
function calPrime(n) {
    const primes = [2];
    iterator_utils_1.t.seq(3, 2, n)
        .iterx()
        .take((num) => primes.iterx()
        .take(e => e * e <= num)
        .map(e => num % e !== 0).allTrue())
        .forEach(e => primes.push(e));
    return primes;
}
const tt = calPrime(100).iterx().groupBy(e => e % 10);
console.log(tt);
