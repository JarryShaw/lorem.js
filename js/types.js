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