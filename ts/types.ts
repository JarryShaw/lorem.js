/// <reference path="../ts/lorem.d.ts" />

/**
 * Customised utility types.
 *
 * @module types
 * @see module:lorem
 */

'use strict';

import * as random from "./random";

/**
 * Return a capitalized version of the string.
 *
 * More specifically, make the first character have upper case and the rest lower
 * case.
 *
 * @param {string} s
 * @returns {string}
 */
function capitalize(s: string): string {
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
export class InfiniteIterator<T> implements Iterator<T> {
    private pointer = 0;
    private length: number;

    /**
     * Creates an instance of `InfiniteIterator`.
     *
     * @param {T[]} items
     * @memberof InfiniteIterator
     */
    constructor(public items: T[]) {
        this.length = items.length;
    }

    public next(): IteratorResult<T> {
        if (this.pointer >= this.length) {
            this.pointer = 0;
            random.shuffle(this.items);
        }

        return {
            done: false,
            value: this.items[this.pointer++]
        };
    }

    [Symbol.iterator](): Iterator<T> {
        return this;
    }
}
