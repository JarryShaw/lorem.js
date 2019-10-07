/// <reference path="../ts/lorem.d.ts" />

/**
 * Lorem ipsum generator.
 *
 * In publishing and graphic design, lorem ipsum is a placeholder text commonly
 * used to demonstrate the visual form of a document or a typeface without
 * relying on meaningful content.
 *
 * The `lorem` module provides a generic access to generating the lorem ipsum text
 * from its very original text:
 *
 *     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
 *     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
 *     veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
 *     commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
 *     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
 *     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
 *     est laborum.
 *
 * Usage of the `lorem` module is rather simple. Depending on your needs, the
 * `lorem` module provides generation of **word**s, **sentence**s, and
 * **paragraph**s.
 *
 * Get Random Words
 * ----------------
 *
 * The `lorem` module provides two different ways for getting random words.
 *
 * 1. `word` -- generate a list of random words
 *
 *    ```typescript
 *    function word<T extends string | StringFunction>(
 *        count?: number | undefined,
 *        func?: (T extends string ? string : StringFunction) | undefined,
 *        args?: any[] | undefined
 *    ): InfiniteIterator<string>;
 *    function word<T extends string | StringFunction>({ count, func, args }: {
 *        count?: number | undefined;
 *        func?: (T extends string ? string : StringFunction) | undefined;
 *        args?: any[] | undefined;
 *    }): InfiniteIterator<string>;
 *    ```
 *
 * 2. `get_word` -- return random words
 *
 *    ```typescript
 *    function get_word<K extends number | NumberTuple,
 *                      T extends string | StringFunction>(
 *        count?: (K extends number ? number : NumberTuple) | undefined,
 *        sep?: string | undefined,
 *        func?: (T extends string ? string : StringFunction) | undefined,
 *        args?: any[] | undefined
 *    ): string;
 *    function get_word<K extends number | [number, number], T extends string | StringFunction>({ count, sep, func, args }: {
 *        count?: (K extends number ? number : [number, number]) | undefined;
 *        sep?: string | undefined;
 *        func?: (T extends string ? string : StringFunction) | undefined;
 *        args?: any[] | undefined;
 *    }): string;
 *    ```
 *
 * Get Random Sentences
 * --------------------
 *
 * The `lorem` module provides two different ways for getting random sentences.
 *
 * 1. `sentence` -- generate a list of random sentences
 *
 *    ```typescript
 *    function sentence(
 *        count?: number | undefined,
 *        comma?: NumberTuple | undefined,
 *        word_range?: NumberTuple | undefined
 *    ): InfiniteIterator<string>;
 *    function sentence({ count, comma, word_range }: {
 *        count?: number | undefined;
 *        comma?: [number, number] | undefined;
 *        word_range?: [number, number] | undefined;
 *    }): InfiniteIterator<string>
 *    ```
 *
 * 2. `get_sentence` -- return random sentences
 *
 *    ```typescript
 *    function get_sentence<K extends number | NumberTuple>(
 *        count?: (K extends number ? number : NumberTuple) | undefined,
 *        sep?: string | undefined,
 *        comma?: NumberTuple | undefined,
 *        word_range?: NumberTuple | undefined
 *    ): string;
 *    function get_sentence<K extends number | [number, number]>({ count, sep, comma, word_range }: {
 *        count?: (K extends number ? number : [number, number]) | undefined;
 *        sep?: string | undefined;
 *        comma?: [number, number] | undefined;
 *        word_range?: [...] | undefined;
 *    }): string;
 *    ```
 *
 * Get Random Paragraphs
 * ---------------------
 *
 * The `lorem` module provides two different ways for getting random paragraphs.
 *
 * 1. `paragraph` -- generate a list of random paragraphs
 *
 *    ```typescript
 *    function paragraph(
 *        count?: number | undefined,
 *        comma?: NumberTuple | undefined,
 *        word_range?: NumberTuple | undefined,
 *        sentence_range?: NumberTuple | undefined
 *    ): InfiniteIterator<string>;
 *    function paragraph({ count, comma, word_range, sentence_range }: {
 *        count?: number | undefined;
 *        comma?: [number, number] | undefined;
 *        word_range?: [number, number] | undefined;
 *        sentence_range?: [number, number] | undefined;
 *    }): InfiniteIterator<string>;
 *    ```
 *
 * 2. `get_paragraph` -- return random paragraphs
 *
 *    ```typescript
 *    function get_paragraph<K extends number | NumberTuple>(
 *        count?: (K extends number ? number : NumberTuple) | undefined,
 *        sep?: string | undefined,
 *        comma?: NumberTuple | undefined,
 *        word_range?: NumberTuple | undefined,
 *        sentence_range?: [...] | undefined
 *    ): string;
 *    function get_paragraph<K extends number | [number, number]>({ count, sep, comma, word_range, sentence_range }: {
 *        count?: (K extends number ? number : [number, number]) | undefined;
 *        sep?: string | undefined;
 *        comma?: [number, number] | undefined;
 *        word_range?: [...] | undefined;
 *        sentence_range?: [...] | undefined;
 *    }): string;
 *    ```
 *
 * Customise Word Pool
 * -------------------
 *
 * If wanted, the `lorem` module also provides an interface to customise the word
 * pool as you wish.
 *
 * 1. `set_pool` -- customise random word pool
 *
 *    ```javascript
 *    function set_pool(pool: string[]): void
 *    ```
 *
 * @module lorem
 */

'use strict';

import { EOL } from 'os';
import * as random from './random';
import { InfiniteIterator } from "./types";

/** Original lorem ipsum text pool. */
let _TEXT: string[] = [
    'ad', 'adipiscing', 'aliqua', 'aliquip', 'amet', 'anim', 'aute', 'cillum', 'commodo',
    'consectetur', 'consequat', 'culpa', 'cupidatat', 'deserunt', 'do', 'dolor', 'dolore',
    'duis', 'ea', 'eiusmod', 'elit', 'enim', 'esse', 'est', 'et', 'eu', 'ex', 'excepteur',
    'exercitation', 'fugiat', 'id', 'in', 'incididunt', 'ipsum', 'irure', 'labore', 'laboris',
    'laborum', 'lorem', 'magna', 'minim', 'mollit', 'nisi', 'non', 'nostrud', 'nulla',
    'occaecat', 'officia', 'pariatur', 'proident', 'qui', 'quis', 'reprehenderit', 'sed',
    'sint', 'sit', 'sunt', 'tempor', 'ullamco', 'ut', 'velit', 'veniam', 'voluptate'
]

/**
 * Generate word pool.
 *
 * - Args:
 *
 *   * `dupe` -- `number`
 *
 *     Duplication to generate the word pool.
 *
 *     *default*: `1`
 *
 * - Returns
 *
 *   * `StringIterator` -- an infinite loop word pool
 *
 * @param {number} [dupe=1]
 * @returns {StringIterator}
 */
function _gen_pool(dupe: number = 1): StringIterator {
    var pool: string[] = [];

    for (var i = 0; i < dupe; i++) {
        pool.push(..._TEXT);
    }
    random.shuffle(pool);

    return new InfiniteIterator(pool, true);
}

/**
 * Generate random word.
 *
 * - Args:
 *
 *   * `pool` -- `StringIterator`
 *
 *     Word pool, returned by `_gen_pool`.
 *
 *   * `func` -- `string | StringFunction`
 *
 *     Filter function. It can be an attribute name of `String`, or a customised
 *     function that takes the original `String` and returns the modified `String`.
 *
 *     *default*: `undefined`
 *
 *   * `args` -- `any[]`
 *
 *     Additional arguments for `func`.
 *
 *     *default*: `[]`
 *
 * - Returns:
 *
 *   * `string` -- random word
 *
 * @template T
 * @param {StringIterator | Args_gen_word} pool
 * @param {string | StringFunction} [func]
 * @param {any[]} [args]
 * @returns {string}
 */
function _gen_word(
    func_args: StringIterator | Args_gen_word,
    func?: string | StringFunction,
    args: any[] = []
): string {
    if ('pool' in func_args) {
        var pool = func_args.pool;
        var func = func_args.func;
        var args = func_args.args === undefined ? [] : func_args.args;
    } else
        var pool = func_args;

    var text = pool.next().value;
    if (func !== undefined)
        if (typeof func === "string")
            text = text[func](...args);
        else
            text = func(text, ...args);
    return text;
}

/**
 * Generate random sentence.
 *
 * - Args:
 *
 *   * `pool` -- `StringIterator`
 *
 *     Word pool, returned by `_gen_pool`.
 *
 *   * `comma` -- `NumberTuple`
 *
 *     Random range for number of commas. The function will use
 *     `random.randint` to choose a random integer as the number of commas.
 *
 *     *default*: `[0, 2]`
 *
 *   * `word_range` -- `NumberTuple`
 *
 *     Random range for number of words in each sentence. The function will
 *     use `random.randint` to choose a random integer as the number of words.
 *
 *     *default*: `[4, 8]`
 *
 * - Returns:
 *
 *   * `string` -- random sentence
 *
 * @param {StringIterator | Args_gen_sentence} pool
 * @param {NumberTuple} comma
 * @param {NumberTuple} word_range
 * @returns {string}
 */
function _gen_sentence(
    func_args: StringIterator | Args_gen_sentence,
    comma: NumberTuple,
    word_range: NumberTuple
): string {
    if ('pool' in func_args) {
        var pool = func_args.pool;
        var comma = func_args.comma;
        var word_range = func_args.word_range;
    } else
        var pool = func_args;

    var text = _gen_word(pool, 'capitalize');
    for (var i = 0; i < random.randint(...word_range) - 1; i++)
        text += ' ' + _gen_word(pool);

    var include_comma: boolean;
    for (var i = 0; i < random.randint(...comma); i++) {
        include_comma = random.choice([true, false]);
        if (include_comma) {
            text += ','
            for (var i = 0; i < random.randint(...word_range) - 1; i++)
                text += ' ' + _gen_word(pool);
            continue
        }
        break
    }
    return text + '.';
}

/**
 * Generate random paragraph.
 *
 * - Args:
 *
 *   * `pool` -- `StringIterator`
 *
 *     Word pool, returned by `_gen_pool`.
 *
 *   * `comma` -- `NumberTuple`
 *
 *     Random range for number of commas. The function will use
 *     `random.randint` to choose a random integer as the number of commas.
 *
 *     *default*: `[0, 2]`
 *
 *   * `word_range` -- `NumberTuple`
 *
 *     Random range for number of words in each sentence. The function will
 *     use `random.randint` to choose a random integer as the number of words.
 *
 *     *default*: `[4, 8]`
 *
 *   * `sentence_range` -- `NumberTuple`
 *
 *     Random range for number of sentences in each paragraph. The function
 *     will use `random.randint` to choose a random integer as the number of
 *     sentences.
 *
 *     *default*: `[5, 1])`
 *
 * - Returns:
 *
 *   * `str` -- random paragraph
 *
 * @param {(StringIterator | Args_gen_paragraph)} func_args
 * @param {NumberTuple} comma
 * @param {NumberTuple} word_range
 * @param {NumberTuple} sentence_range
 * @returns {string}
 */
function _gen_paragraph(
    func_args: StringIterator | Args_gen_paragraph,
    comma: NumberTuple,
    word_range: NumberTuple,
    sentence_range: NumberTuple
): string {
    if ('pool' in func_args) {
        var pool = func_args.pool;
        var comma = func_args.comma;
        var word_range = func_args.word_range;
        var sentence_range = func_args.sentence_range;
    } else
        var pool = func_args;

    var text = _gen_sentence(pool, comma, word_range);
    for (var i = 0; i < random.randint(...sentence_range) - 1; i++)
        text += ' ' + _gen_sentence(pool, comma, word_range);
    return text;
}

/**
 * Generate a list of random words.
 *
 * ```javascript
 * > word(3)
 * InfiniteIterator {
 *   items: [ 'dolore', 'esse', 'duis' ],
 *   pointer: 0,
 *   length: 3
 * }
 * > word(3, 'capitalize')
 * InfiniteIterator {
 *   items: [ 'Ullamco', 'Adipiscing', 'Consectetur' ],
 *   pointer: 0,
 *   length: 3
 * }
 * > word(3, (s) => s.toUpperCase())
 * InfiniteIterator {
 *   items: [ 'QUIS', 'ALIQUA', 'CILLUM' ],
 *   pointer: 0,
 *   length: 3
 * }
 * ```
 *
 * - Args:
 *
 *   * `count` -- `number`
 *
 *     Number of non-repeated random words.
 *
 *     *default*: `1`
 *
 *   * `func` -- `string | StringFunction`
 *
 *     Filter function. It can be an attribute name of `string`, or a customised
 *     function that takes the original `string` and returns the modified `string`.
 *
 *     *default*: `undefined`
 *
 *   * `args` -- `any[]`
 *
 *     Additional positional arguments for `func`.
 *
 *     *default*: `[]`
 *
 * - Returns:
 *
 *   * `StringIterator` -- indefinite random words generator
 *
 * @export
 * @param {(number | Args_word)} [func_args=1]
 * @param {(string | StringFunction)} [func]
 * @param {any[]} [args=[]]
 * @returns {StringIterator}
 */
export function word(
    func_args: number | Args_word = 1,
    func?: string | StringFunction,
    args: any[] = []
): StringIterator {
    if (typeof func_args === 'number') {
        var count = func_args;
    } else {
        var count = func_args.count;
        var func = func_args.func;
        var args = func_args.args === undefined ? [] : func_args.args;
    }

    var pool = _gen_pool(count);
    var list: string[] = [];

    for (var i = 0; i < count; i++)
        list.push(_gen_word(pool, func, args));
    return new InfiniteIterator(list);
}

/**
 * Generate a list of random sentences.
 *
 * ```javascript
 * > sentence()
 * InfiniteIterator {
 *   items: [ 'Anim quis id et adipiscing nulla.' ],
 *   pointer: 0,
 *   length: 1
 * }
 * ```
 *
 * - Args:
 *
 *   * `count` -- `number`
 *
 *     Number of non-repeated random sentences.
 *
 *     *default*: `1`
 *
 *   * `comma` -- `NumberTuple`
 *
 *     Random range for number of commas. The function will use
 *     `random.randint` to choose a random integer as the number of commas.
 *
 *     *default*: `[0, 2]`
 *
 *   * `word_range` -- `NumberTuple`
 *
 *     Random range for number of words in each sentence. The function will
 *     use `random.randint` to choose a random integer as the number of words.
 *
 *     *default*: `[4, 8]`
 *
 * - Returns:
 *
 *   * `StringIterator` -- indefinite random sentence generator
 *
 * @export
 * @param {(number | Args_sentence)} [func_args=1]
 * @param {NumberTuple} [comma=[0, 2]]
 * @param {NumberTuple} [word_range=[4, 8]]
 * @returns {StringIterator}
 */
export function sentence(
    func_args: number | Args_sentence = 1,
    comma: NumberTuple = [0, 2],
    word_range: NumberTuple = [4, 8]
): StringIterator {
    if (typeof func_args === 'number') {
        var count = func_args;
    } else {
        var count = func_args.count;
        var comma = func_args.comma === undefined ? [0, 2] as NumberTuple : func_args.comma;
        var word_range = func_args.word_range === undefined ? [4, 8] as NumberTuple : func_args.word_range;
    }

    var pool = _gen_pool(count);
    var list: string[] = [];

    for (var i = 0; i < count; i++)
        list.push(_gen_sentence(pool, comma, word_range));
    return new InfiniteIterator(list);
}

/**
 * Generate a list of random paragraphs.
 *
 * ```javascript
 * > paragraph()
 * InfiniteIterator {
 *   items: [
 *     'Tempor minim mollit deserunt do. Eu exercitation et reprehenderit, veniam ad proident. Quis lorem cupidatat sit fugiat. Sed cillum pariatur aute irure magna ea. Commodo voluptate ullamco sint aliqua in, consequat qui officia esse duis.'
 *   ],
 *   pointer: 0,
 *   length: 1
 * }
 * ```
 *
 * - Args:
 *
 *   * `count` -- `int`
 *
 *     Number of non-repeated random paragraphs.
 *
 *     *default*: `1`
 *
 *   * `comma` -- `NumberTuple`
 *
 *     Random range for number of commas. The function will use
 *     `random.randint` to choose a random integer as the number of commas.
 *
 *     *default*: `[0, 2]`
 *
 *   * `word_range` -- `NumberTuple`
 *
 *     Random range for number of words in each sentence. The function will
 *     use `random.randint` to choose a random integer as the number of words.
 *
 *     *default*: `[4, 8]`
 *
 *   * `sentence_range` -- `NumberTuple`
 *
 *     Random range for number of sentences in each paragraph. The function
 *     will use `random.randint` to choose a random integer as the number of
 *     sentences.
 *
 *     *default*: `[5, 10]`
 *
 * - Returns:
 *
 *   * `StringIterator` -- random paragraph generator
 *
 * @export
 * @param {(number | Args_paragraph)} [func_args=1]
 * @param {NumberTuple} [comma=[0, 2]]
 * @param {NumberTuple} [word_range=[4, 8]]
 * @param {NumberTuple} [sentence_range=[5, 10]]
 * @returns {StringIterator}
 */
export function paragraph(
    func_args: number | Args_paragraph = 1,
    comma: NumberTuple = [0, 2],
    word_range: NumberTuple = [4, 8],
    sentence_range: NumberTuple = [5, 10]
): StringIterator {
    if (typeof func_args === 'number') {
        var count = func_args;
    } else {
        var count = func_args.count;
        var comma = func_args.comma === undefined ? [0, 2] as NumberTuple : func_args.comma;
        var word_range = func_args.word_range === undefined ? [4, 8] as NumberTuple : func_args.word_range;
        var sentence_range = func_args.sentence_range === undefined ? [4, 8] as NumberTuple : func_args.sentence_range;
    }

    var pool = _gen_pool(count);
    var list: string[] = [];

    for (var i = 0; i < count; i++)
        list.push(_gen_paragraph(pool, comma, word_range, sentence_range));
    return new InfiniteIterator(list);
}

/**
 * Return random words.
 *
 * ```javascript
 * > lorem.get_word(3)
 * 'veniam minim sit'
 * > lorem.get_word(3, ' ', 'capitalize')
 * 'In Nulla Enim'
 * > lorem.get_word(3, '-', (s) => s.toUpperCase())
 * 'OCCAECAT-DOLOR-SINT'
 * ```
 *
 * - Args:
 *
 *   * `count` -- `number | NumberTuple`
 *
 *     Number of random words. To generate random number of words, supply a
 *     2-element tuple of `number`, the function will use `random.randint` to choose
 *     a random integer as the number of random words.
 *
 *     *default*: `1`
 *
 *   * `sep` -- `string`
 *
 *     Seperator between each word.
 *
 *     *default*: `' '`
 *
 *   * `func` -- `string | StringFunction`
 *
 *     Filter function. It can be a function name of `string`, or a customised
 *     function that takes the original `string` and returns the modified `string`.
 *
 *     *default*: `undefined`
 *
 *   * `args` -- `any[]`
 *
 *     Additional arguments for `func`.
 *
 *     *default*: `[]`
 *
 * - Returns:
 *
 *   * `string` -- random words
 *
 * @export
 * @param {(number | NumberTuple | Args_get_word)} [func_args=1]
 * @param {string} [sep=' ']
 * @param {(string | StringFunction)} [func]
 * @param {any[]} [args=[]]
 * @returns {string}
 */
export function get_word(
    func_args: number | NumberTuple | Args_get_word = 1,
    sep: string = ' ',
    func?: string | StringFunction,
    args: any[] = []
): string {
    if (typeof func_args === 'number')
        var count = func_args;
    else if ('count' in func_args) {
        var count = func_args.count === undefined ? 1 : func_args.count;
        var sep = func_args.sep === undefined ? ' ' : func_args.sep;
        var func = func_args.func;
        var args = func_args.args === undefined ? [] : func_args.args;
    } else
        var count = random.randint(...func_args as NumberTuple);
    var iter_list = word(count, func, args);

    var list: string[] = [];
    for (var i = 0; i < count; i++)
        list.push(iter_list.next().value);
    return list.join(sep);
}

/**
 * Return random sentences.
 *
 * ```javascript
 * > get_sentence()
 * 'Irure adipiscing reprehenderit cupidatat sint.'
 * ```
 *
 * - Args:
 *
 *   * `count` -- `number | NumberTuple`
 *
 *     Number of random sentences. To generate random number of sentences,
 *     supply a 2-element tuple of `number`, the function will use
 *     `random.randint` to choose a random integer as the number of random
 *     sentences.
 *
 *     *default*: `1`
 *
 *   * `sep` -- `string`
 *
 *     Seperator between each sentence.
 *
 *     *default*: `' '`
 *
 *   * `comma` -- `NumberTuple`
 *
 *     Random range for number of commas. The function will use
 *     `random.randint` to choose a random integer as the number of commas.
 *
 *     *default*: `[0, 2]`
 *
 *   * `word_range` -- `NumberTuple`
 *
 *     Random range for number of words in each sentence. The function will
 *     use `random.randint` to choose a random integer as the number of words.
 *
 *     *default*: `[4, 8]`
 *
 * - Returns:
 *
 *   * `string` -- random sentences
 *
 * @export
 * @param {(number | NumberTuple | Args_get_sentence)} [func_args=1]
 * @param {string} [sep=' ']
 * @param {NumberTuple} [comma=[0, 2]]
 * @param {NumberTuple} [word_range=[4, 8]]
 * @returns {string}
 */
export function get_sentence(
    func_args: number | NumberTuple | Args_get_sentence = 1,
    sep: string = ' ',
    comma: NumberTuple = [0, 2],
    word_range: NumberTuple = [4, 8]
): string {
    if (typeof func_args === 'number')
        var count = func_args;
    else if ('count' in func_args) {
        var count = func_args.count === undefined ? 1 : func_args.count;
        var sep = func_args.sep === undefined ? ' ' : func_args.sep;
        var comma = func_args.comma === undefined ? [0, 2] as NumberTuple : func_args.comma;
        var word_range = func_args.word_range === undefined ? [4, 8] as NumberTuple : func_args.word_range;
    } else
        var count = random.randint(...func_args as NumberTuple);
    var iter_list = sentence(count, comma, word_range);

    var list: string[] = [];
    for (var i = 0; i < count; i++)
        list.push(iter_list.next().value);
    return list.join(sep);
}

/**
 * Return random paragraphs.
 *
 * ```javascript
 * > get_paragraph()
 * 'Est ut nisi consequat reprehenderit elit. Aliquip sed sint excepteur sunt. Cupidatat officia labore lorem ullamco. Minim aute proident quis laborum esse anim, in sit incididunt. Aliqua culpa dolor magna, qui ex eu laboris et. Do id ea cillum veniam. Velit exercitation dolore voluptate tempor.'
 * ```
 *
 * - Args:
 *
 *   * `count` -- `number | NumberTuple`
 *
 *     Number of random paragraphs. To generate random number of paragraphs,
 *     supply a 2-element tuple of `number`, the function will use
 *     `random.randint` to choose a random integer as the number of random
 *     paragraphs.
 *
 *     *default*: `1`
 *
 *   * `sep` -- `string`
 *
 *     Seperator between each paragraph.
 *
 *     *default*: `os.EOL` (`\r\n` on Windows, `\n` on POSIX)
 *
 *   * `comma` -- `NumberTuple`
 *
 *     Random range for number of commas. The function will use
 *     `random.randint` to choose a random integer as the number of commas.
 *
 *     *default*: `[0, 2]`
 *
 *   * `word_range` -- `NumberTuple`
 *
 *     Random range for number of words in each sentence. The function will
 *     use `random.randint` to choose a random integer as the number of words.
 *
 *     *default*: `[4, 8]`
 *
 *   * `sentence_range` -- `NumberTuple`
 *
 *     Random range for number of sentences in each paragraph. The function
 *     will use `random.randint` to choose a random integer as the number of
 *     sentences.
 *
 *     *default*: `[5, 10]`
 *
 * - Returns:
 *
 *   * `string` -- random paragraphs
 *
 * @export
 * @param {(number | NumberTuple | Args_get_paragraph)} [func_args=1]
 * @param {string} [sep=EOL]
 * @param {NumberTuple} [comma=[0, 2]]
 * @param {NumberTuple} [word_range=[4, 8]]
 * @param {NumberTuple} [sentence_range=[5, 10]]
 * @returns {string}
 */
export function get_paragraph(
    func_args: number | NumberTuple | Args_get_paragraph = 1,
    sep: string = EOL,
    comma: NumberTuple = [0, 2],
    word_range: NumberTuple = [4, 8],
    sentence_range: NumberTuple = [5, 10]
): string {
    if (typeof func_args === 'number')
        var count = func_args;
    else if ('count' in func_args) {
        var count = func_args.count === undefined ? 1 : func_args.count;
        var sep = func_args.sep === undefined ? ' ' : func_args.sep;
        var comma = func_args.comma === undefined ? [0, 2] as NumberTuple : func_args.comma;
        var word_range = func_args.word_range === undefined ? [4, 8] as NumberTuple : func_args.word_range;
        var sentence_range = func_args.sentence_range === undefined ? [5, 10] as NumberTuple : func_args.sentence_range;
    } else
        var count = random.randint(...func_args as NumberTuple);
    var iter_list = paragraph(count, comma, word_range, sentence_range);

    var list: string[] = [];
    for (var i = 0; i < count; i++)
        list.push(iter_list.next().value);
    return list.join(sep);
}

/**
 * Customise random word pool.
 *
 * - Args:
 *
 *   * `pool` -- `string[]`
 *
 *     List of words to be used as random word pool.
 *
 * @param {string[]} pool
 */
export function set_pool(pool: string[]) {
    _TEXT = pool;
}
