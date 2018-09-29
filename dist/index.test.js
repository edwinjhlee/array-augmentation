"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iterator_utils_1 = require("iterator-utils");
require("./index");
console.log("============");
console.log([1, 2, 3].ifilter);
console.log([1, 2, 3, 4, 5]
    .ifilter((e) => e % 2 === 0)
    .imap(e => e * 100)
    .toList());
function* w() {
    for (let i = 0; i < 10; ++i)
        yield i;
}
iterator_utils_1.iteratorX(w()).toList();
console.log([1, 2, 1, 3, 1].max());
console.log([1, 2, 1, 3, 1].min());
console.log([1, 2, 1, 3, 1]);
console.log(iterator_utils_1.iteratorX([1, 2, 3]).imap(e => e * 38).toList());
