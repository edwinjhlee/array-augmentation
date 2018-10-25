"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iterator_utils_1 = require("iterator-utils");
function iter(arr) {
    return iterator_utils_1.iterx(arr[Symbol.iterator]());
}
exports.iter = iter;
function inject() {
    Array.prototype.iter = function () {
        return iter(this);
    };
    Array.prototype.mapToAsync = function (f) {
        return iterator_utils_1.utils.asyncIterator.mapToAsync(this, f);
    };
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
exports.inject = inject;
inject();
