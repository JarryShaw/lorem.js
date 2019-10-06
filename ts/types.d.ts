/**
 * Customised utility types.
 *
 * @module types
 * @see module:lorem
 */

/**
 * Return a capitalized version of the string.
 *
 * More specifically, make the first character have upper case and the rest lower
 * case.
 *
 * @param {string} s
 * @returns {string}
 */
declare function capitalize(s: string): string;

interface String {
    /**
     * Return a capitalized version of the string.
     *
     * More specifically, make the first character have upper case and the rest lower
     * case.
     *
     * @returns {string}
     * @memberof String
     */
    capitalize(): string;
}

/**
 * Infinite iterator.
 *
 * @class InfiniteIterator
 * @implements {Iterator<T>}
 * @template T
 */
declare class InfiniteIterator<T> implements Iterator<T> {
    /**
     * Iterating items.
     *
     * @type {T[]}
     * @memberof InfiniteIterator
     */
    items: T[];

    constructor(items: T[]);
    next(): IteratorResult<T>;
    [Symbol.iterator](): Iterator<T>;
}
