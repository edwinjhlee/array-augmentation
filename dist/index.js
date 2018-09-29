"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const i = __importStar(require("iterator-utils"));
function inject() {
    Array.prototype.ifilter = function (f) {
        return i.ui.filter(f, this);
    };
    Array.prototype.imap = function (f) {
        return i.ui.map(f, this);
    };
    Array.prototype.foreach = function (f = e => { }) {
        return i.ua.foreach(f, this);
    };
    Array.prototype.min = function () {
        const i = this[Symbol.iterator]();
        const r = i.next();
        if (r.done) {
            return null;
        }
        let ret = r.value;
        while (true) {
            const r = i.next();
            if (r.done === true)
                return ret;
            ret = ret > r.value ? r.value : ret;
        }
    };
    Array.prototype.max = function () {
        const i = this[Symbol.iterator]();
        const r = i.next();
        if (r.done) {
            return null;
        }
        let ret = r.value;
        while (true) {
            const r = i.next();
            if (r.done === true)
                return ret;
            ret = ret < r.value ? r.value : ret;
        }
    };
    Array.prototype.foreach = function (f = e => { }) {
        return i.ua.foreach(f, this);
    };
    Array.prototype.mapToAsync = function (f) {
        return i.uai.mapToAsync(f, this);
    };
}
exports.inject = inject;
inject();
// console.log([1,2,3].ifilter)
// export default Array
// export let a = 3
