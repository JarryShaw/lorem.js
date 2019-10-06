/// <reference path="../ts/lorem.d.ts" />

/**
 * JavaScript port of some useful functions from Python's
 * builtin `random` module.
 *
 * @module random
 * @see module:lorem
 */

'use strict';

/**
 * Shuffle list x in place, and return None.
 *
 * @template T
 * @param {T[]} x
 */
export function shuffle<T>(x: T[]) {
    var temp: any;

    var j: number;
    for (var i = x.length - 1; i > 0; i--) {
        j = Math.floor((Math.random() * (i + 1)));

        temp = x[i];
        x[i] = x[j];
        x[j] = temp;
    }
}

/**
 * Return random integer in range [a, b], including both end points.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function randint(a: number, b: number) {
    return Math.floor(Math.random() * (b - a)) + a;
}

/**
 * Choose a random element from a non-empty sequence.
 *
 * @template T
 * @param {T[]} seq
 * @returns {T}
 */
export function choice<T>(seq: T[]) {
    var i = Math.floor((Math.random() * seq.length));
    return seq[i];
}
