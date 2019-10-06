/// <reference path="../ts/lorem.d.ts" />
/**
 * JavaScript port of some useful functions from Python's
 * builtin `random` module.
 *
 * @module random
 * @see module:lorem
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shuffle list x in place, and return None.
 *
 * @template T
 * @param {T[]} x
 */
function shuffle(x) {
    var temp;
    var j;
    for (var i = x.length - 1; i > 0; i--) {
        j = Math.floor((Math.random() * (i + 1)));
        temp = x[i];
        x[i] = x[j];
        x[j] = temp;
    }
}
exports.shuffle = shuffle;
/**
 * Return random integer in range [a, b], including both end points.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function randint(a, b) {
    return Math.floor(Math.random() * (b - a)) + a;
}
exports.randint = randint;
/**
 * Choose a random element from a non-empty sequence.
 *
 * @template T
 * @param {T[]} seq
 * @returns {T}
 */
function choice(seq) {
    var i = Math.floor((Math.random() * seq.length));
    return seq[i];
}
exports.choice = choice;
//# sourceMappingURL=random.js.map