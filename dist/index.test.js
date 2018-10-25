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
const _ = ([1, 2, 3, 4]).map(e => e * 3);
function* w() {
    for (let i = 0; i < 10; ++i)
        yield i;
}
iterator_utils_1.iterx(w()).toArray();
console.log(Math.max(...[1, 2, 1, 3, 1]));
console.log(Math.min(...[1, 2, 1, 3, 1]));
console.log([1, 2, 1, 3, 1]);
console.log(iterator_utils_1.iterx([1, 2, 3]).map(e => e * 38).toArray());
