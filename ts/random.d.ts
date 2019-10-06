/**
 * JavaScript port of some useful functions from Python's
 * builtin `random` module.
 *
 * @module random
 * @see module:lorem
 */

/**
 * Choose a random element from a non-empty sequence.
 *
 * @template T
 * @param {T[]} seq
 * @returns {T}
 */
declare function choice<T>(seq: T[]): T;

/**
 * Shuffle list x in place, and return None.
 *
 * @template T
 * @param {T[]} x
 */
declare function shuffle<T>(x: T[]): void;

/**
 * Return random integer in range [a, b], including both end points.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
declare function randint(a: number, b: number): number;
