'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var random = require("./random");
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
String.prototype.capitalize = function () {
    return capitalize(this.toString());
};
var InfiniteIterator = (function () {
    function InfiniteIterator(elements, shuffle) {
        if (shuffle === void 0) { shuffle = false; }
        this.pointer = 0;
        this._length = elements.length;
        this._elements = elements;
        this._shuffle = shuffle;
    }
    InfiniteIterator.prototype.next = function () {
        if (this.pointer >= this._length) {
            this.pointer = 0;
            if (this._shuffle)
                random.shuffle(this._elements);
        }
        return {
            done: false,
            value: this._elements[this.pointer++]
        };
    };
    InfiniteIterator.prototype[Symbol.iterator] = function () {
        return this;
    };
    return InfiniteIterator;
}());
exports.InfiniteIterator = InfiniteIterator;
//# sourceMappingURL=types.js.map