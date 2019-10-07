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
     * Creates an instance of `InfiniteIterator`.
     *
     * @param {T[]} elements -- elements to iterate
     * @param {boolean} [shuffle] -- shuffle after each turn
     * @memberof InfiniteIterator
     */
    constructor(elements: T[], shuffle?: boolean);

    /**
     * Interator protocol `next`.
     *
     * @returns {IteratorResult<T>}
     * @memberof InfiniteIterator
     */
    next(): IteratorResult<T>;

    /**
     * Iterator protocol registration.
     *
     * @returns {Iterator<T>}
     * @memberof InfiniteIterator
     */
    [Symbol.iterator](): Iterator<T>;
}
