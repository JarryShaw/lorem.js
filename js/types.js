/// <reference path="../ts/lorem.d.ts" />
/**
 * Customised utility types.
 *
 * @module types
 * @see module:lorem
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var random = require("./random");
/**
 * Return a capitalized version of the string.
 *
 * More specifically, make the first character have upper case and the rest lower
 * case.
 *
 * @param {string} s
 * @returns {string}
 */
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
 * Return a capitalized version of the string.
 *
 * More specifically, make the first character have upper case and the rest lower
 * case.
 *
 * @returns {string}
 * @memberof String
 */
String.prototype.capitalize = function () {
    return capitalize(this.toString());
};
/**
 * Infinite iterator.
 *
 * @class InfiniteIterator
 * @implements {Iterator<T>}
 * @template T
 */
var InfiniteIterator = /** @class */ (function () {
    /**
     * Creates an instance of `InfiniteIterator`.
     *
     * @param {T[]} items
     * @memberof InfiniteIterator
     */
    function InfiniteIterator(items) {
        this.items = items;
        this.pointer = 0;
        this.length = items.length;
    }
    InfiniteIterator.prototype.next = function () {
        if (this.pointer >= this.length) {
            this.pointer = 0;
            random.shuffle(this.items);
        }
        return {
            done: false,
            value: this.items[this.pointer++]
        };
    };
    InfiniteIterator.prototype[Symbol.iterator] = function () {
        return this;
    };
    return InfiniteIterator;
}());
exports.InfiniteIterator = InfiniteIterator;
//# sourceMappingURL=types.js.map