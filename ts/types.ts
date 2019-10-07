/// <reference path="../ts/types.d.ts" />

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
String.prototype.capitalize = function (): string {
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
    /**
     * Elements to iterate.
     *
     * @private
     * @type {T[]}
     * @memberof InfiniteIterator
     */
    private _elements: T[];
    /**
     * Shuffle after each turn.
     *
     * @private
     * @type {boolean}
     * @memberof InfiniteIterator
     */
    private _shuffle: boolean;

    /**
     * Length of elements.
     *
     * @private
     * @type {number}
     * @memberof InfiniteIterator
     */
    private _length: number;
    /**
     * Iterating index pointer.
     *
     * @private
     * @memberof InfiniteIterator
     */
    private pointer = 0;

    /**
     * Creates an instance of `InfiniteIterator`.
     *
     * @param {T[]} elements -- elements to iterate
     * @param {boolean} [shuffle] -- shuffle after each turn
     * @memberof InfiniteIterator
     */
    constructor(elements: T[], shuffle: boolean = false) {
        this._length = elements.length;
        this._elements = elements;
        this._shuffle = shuffle;
    }

    /**
     * Interator protocol `next`.
     *
     * @returns {IteratorResult<T>}
     * @memberof InfiniteIterator
     */
    public next(): IteratorResult<T> {
        if (this.pointer >= this._length) {
            this.pointer = 0;
            if (this._shuffle)
                random.shuffle(this._elements);
        }

        return {
            done: false,
            value: this._elements[this.pointer++]
        };
    }

    /**
     * Iterator protocol registration.
     *
     * @returns {Iterator<T>}
     * @memberof InfiniteIterator
     */
    [Symbol.iterator](): Iterator<T> {
        return this;
    }
}
