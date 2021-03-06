"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iterator_utils_1 = require("iterator-utils");
function iter(arr) {
    return iterator_utils_1.iterx(arr[Symbol.iterator]());
}
function inject() {
    Array.prototype.iterx = function () {
        return iter(this);
    };
    Array.prototype.mapToAsyncIterX = function (f) {
        return iterator_utils_1.utils.asyncIter.mapToAsync(this, f);
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
