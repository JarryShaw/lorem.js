/// <reference path="./typings/index.d.ts" />

///////////////////////////////////////////////////////////////////////////////
// random.ts
///////////////////////////////////////////////////////////////////////////////

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
 *    ```javascript
 *    function word<T extends string | StringFunction>(
 *        count?: number | undefined,
 *        func?: (T extends string ? string : StringFunction) | undefined,
 *        args?: any[] | undefined
 *    ): InfiniteIterator<string>
 *    ```
 *
 * 2. `get_word` -- return random words
 *
 *    ```javascript
 *    function get_word<K extends number | [number, number],
 *                      T extends string | StringFunction>(
 *        count?: (K extends number ? number : [number, number]) | undefined,
 *        sep?: string | undefined,
 *        func?: (T extends string ? string : StringFunction) | undefined,
 *        args?: any[] | undefined
 *    ): string
 *    ```
 *
 * Get Random Sentences
 * --------------------
 *
 * The `lorem` module provides two different ways for getting random sentences.
 *
 * 1. `sentence` -- generate a list of random sentences
 *
 *    ```javascript
 *    function sentence(
 *        count?: number | undefined,
 *        comma?: [number, number] | undefined,
 *        word_range?: [number, number] | undefined
 *    ): InfiniteIterator<string>
 *    ```
 *
 * 2. `get_sentence` -- return random sentences
 *
 *    ```javascript
 *    function get_sentence<K extends number | [number, number]>(
 *        count?: (K extends number ? number : [number, number]) | undefined,
 *        sep?: string | undefined,
 *        comma?: [number, number] | undefined,
 *        word_range?: [number, number] | undefined
 *    ): string
 *    ```
 *
 * Get Random Paragraphs
 * ---------------------
 *
 * The `lorem` module provides two different ways for getting random paragraphs.
 *
 * 1. `paragraph` -- generate a list of random paragraphs
 *
 *    ```javascript
 *    function paragraph(
 *        count?: number | undefined,
 *        comma?: [number, number] | undefined,
 *        word_range?: [number, number] | undefined,
 *        sentence_range?: [number, number] | undefined
 *    ): InfiniteIterator<string>
 *    ```
 *
 * 2. `get_paragraph` -- return random paragraphs
 *
 *    ```javascript
 *    function get_paragraph<K extends number | [number, number]>(
 *        count?: (K extends number ? number : [number, number]) | undefined,
 *        sep?: string | undefined,
 *        comma?: [number, number] | undefined,
 *        word_range?: [number, number] | undefined,
 *        sentence_range?: [...] | undefined
 *    ): string
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

///////////////////////////////////////////////////////////////////////////////
// random.ts
///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////
// types.ts
///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////
// lorem.ts
///////////////////////////////////////////////////////////////////////////////

type StringFunction = (s: string, ...args: any[]) => string;
type StringIterator = InfiniteIterator<string>;
type NumberTuple = [number, number];

/** Original lorem ipsum text pool. */
declare let _TEXT: string[];

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
 * @param {number} [dupe]
 * @returns {StringIterator}
 */
declare function _gen_pool(dupe: number): StringIterator;
/**
 * Generate random word.
 *
 * - Args:
 *
 *   * `pool` -- `StringIterator`
 *
 *     Word pool, returned by `_gen_pool`.
 *
 *   * `func` -- `T extends string ? string : StringFunction`
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
 * @param {StringIterator} pool
 * @param {T extends string ? string : StringFunction} [func]
 * @param {any[]} [args]
 * @returns {string}
 */
declare function _gen_word<T extends string | StringFunction>(
    pool: StringIterator,
    func?: T extends string ? string : StringFunction,
    args?: any[]
): string;
/**
 * Generate random sentence.
 *
 * - Args:
 *
 *   * `pool` -- `StringIterator`
 *
 *     Word pool, returned by `_gen_pool`.
 *
 *   * `comma` -- `[number, number]`
 *
 *     Random range for number of commas. The function will use
 *     `random.randint` to choose a random integer as the number of commas.
 *
 *     *default*: `[0, 2]`
 *
 *   * `word_range` -- `[number, number]`
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
 * @param {StringIterator} pool
 * @param {NumberTuple} comma
 * @param {NumberTuple} word_range
 * @returns {string}
 */
declare function _gen_sentence(
    pool: StringIterator,
    comma: NumberTuple,
    word_range: NumberTuple
): string;
/**
 * Generate random paragraph.
 *
 * - Args:
 *
 *   * `pool` -- `StringIterator`
 *
 *     Word pool, returned by `_gen_pool`.
 *
 *   * `comma` -- `[number, number]`
 *
 *     Random range for number of commas. The function will use
 *     `random.randint` to choose a random integer as the number of commas.
 *
 *     *default*: `[0, 2]`
 *
 *   * `word_range` -- `[number, number]`
 *
 *     Random range for number of words in each sentence. The function will
 *     use `random.randint` to choose a random integer as the number of words.
 *
 *     *default*: `[4, 8]`
 *
 *   * `sentence_range` -- `[number, number]`
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
 * @param {StringIterator} pool
 * @param {NumberTuple} comma
 * @param {NumberTuple} word_range
 * @param {NumberTuple} sentence_range
 * @returns {string}
 */
declare function _gen_paragraph(
    pool: StringIterator,
    comma: NumberTuple,
    word_range: NumberTuple,
    sentence_range: NumberTuple
): string;

/**
 * Generate a list of random words.
 *
 * ```javascript
 * > lorem.word(3)
 * InfiniteIterator {
 *   items: [ 'dolore', 'esse', 'duis' ],
 *   pointer: 0,
 *   length: 3
 * }
 * > lorem.word(3, 'capitalize')
 * InfiniteIterator {
 *   items: [ 'Ullamco', 'Adipiscing', 'Consectetur' ],
 *   pointer: 0,
 *   length: 3
 * }
 * > lorem.word(3, (s) => s.toUpperCase())
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
 *   * `func` -- `Optional[Union[str, Callable[[str], str]]]`
 *
 *     Filter function. It can be an attribute name of `str`, or a customised
 *     function that takes the original `str` and returns the modified `str`.
 *
 *     *default*: `None`
 *
 *   * `args` -- `Tuple[str]`
 *
 *     Additional positional arguments for `func`.
 *
 *     *default*: `()`
 *
 *   * `kwargs` -- `Dict[str, Any]`
 *
 *     Additional keyword arguments for `func`.
 *
 *     *default*: `{}`
 *
 * - Returns:
 *
 *   * `StringIterator` -- indefinite random words generator
 *
 * @template T
 * @param {number} [count]
 * @param {T extends string ? string : StringFunction} [func]
 * @param {any[]} [args]
 * @returns {StringIterator}
 */
declare function word<T extends string | StringFunction>(
    count?: number,
    func?: T extends string ? string : StringFunction,
    args?: any[]
): StringIterator;
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
 *   * `comma` -- `[number, number]`
 *
 *     Random range for number of commas. The function will use
 *     `random.randint` to choose a random integer as the number of commas.
 *
 *     *default*: `[0, 2]`
 *
 *   * `word_range` -- `[number, number]`
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
 * @param {number} [count]
 * @param {NumberTuple} [comma]
 * @param {NumberTuple} [word_range]
 * @returns {StringIterator}
 */
declare function sentence(
    count?: number,
    comma?: NumberTuple,
    word_range?: NumberTuple
): StringIterator;
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
 *   * `comma` -- `[number, number]`
 *
 *     Random range for number of commas. The function will use
 *     `random.randint` to choose a random integer as the number of commas.
 *
 *     *default*: `[0, 2]`
 *
 *   * `word_range` -- `[number, number]`
 *
 *     Random range for number of words in each sentence. The function will
 *     use `random.randint` to choose a random integer as the number of words.
 *
 *     *default*: `[4, 8]`
 *
 *   * `sentence_range` -- `[number, number]`
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
 * @param {number} [count]
 * @param {NumberTuple} [comma]
 * @param {NumberTuple} [word_range]
 * @param {NumberTuple} [sentence_range]
 * @returns {StringIterator}
 */
declare function paragraph(
    count?: number,
    comma?: NumberTuple,
    word_range?: NumberTuple,
    sentence_range?: NumberTuple
): StringIterator;

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
 *   * `count` -- `number | [number, number]`
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
 * @template K
 * @template T
 * @param {K extends number ? number : NumberTuple} [count]
 * @param {string} [sep]
 * @param {T extends string ? string : StringFunction} [func]
 * @param {any[]} [args]
 * @returns {string}
 */
declare function get_word<K extends number | NumberTuple,
    T extends string | StringFunction>(
        count?: K extends number ? number : NumberTuple,
        sep?: string,
        func?: T extends string ? string : StringFunction,
        args?: any[]
    ): string;
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
 *   * `count` -- `number | [number, number]`
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
 *   * `comma` -- `[number, number]`
 *
 *     Random range for number of commas. The function will use
 *     `random.randint` to choose a random integer as the number of commas.
 *
 *     *default*: `[0, 2]`
 *
 *   * `word_range` -- `[number, number]`
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
 * @template K
 * @param {K extends number ? number : NumberTuple} [count]
 * @param {string} [sep]
 * @param {NumberTuple} [comma]
 * @param {NumberTuple} [word_range]
 * @returns {string}
 */
declare function get_sentence<K extends number | NumberTuple>(
    count?: K extends number ? number : NumberTuple,
    sep?: string,
    comma?: NumberTuple,
    word_range?: NumberTuple
): string;
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
 *   * `count` -- `number | [number, number]`
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
 *   * `comma` -- `[number, number]`
 *
 *     Random range for number of commas. The function will use
 *     `random.randint` to choose a random integer as the number of commas.
 *
 *     *default*: `[0, 2]`
 *
 *   * `word_range` -- `[number, number]`
 *
 *     Random range for number of words in each sentence. The function will
 *     use `random.randint` to choose a random integer as the number of words.
 *
 *     *default*: `[4, 8]`
 *
 *   * `sentence_range` -- `[number, number]`
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
 * @template K
 * @param {K extends number ? number : NumberTuple} [count]
 * @param {string} [sep]
 * @param {NumberTuple} [comma]
 * @param {NumberTuple} [word_range]
 * @param {NumberTuple} [sentence_range]
 * @returns {string}
 */
declare function get_paragraph<K extends number | NumberTuple>(
    count?: K extends number ? number : NumberTuple,
    sep?: string,
    comma?: NumberTuple,
    word_range?: NumberTuple,
    sentence_range?: NumberTuple
): string;

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
declare function set_pool(pool: string[]): void;
