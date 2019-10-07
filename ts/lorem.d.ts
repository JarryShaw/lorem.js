/**
 * Lorem ipsum generator.
 *
 * @module lorem
 */

type StringFunction = (s: string, ...args: any[]) => string;
type StringIterator = InfiniteIterator<string>;
type NumberTuple = [number, number];

type Args_gen_word = {
    pool: StringIterator,
    func?: string | StringFunction,
    args?: any[],
};
type Args_gen_sentence = {
    pool: StringIterator,
    comma: NumberTuple,
    word_range: NumberTuple
};
type Args_gen_paragraph = {
    pool: StringIterator,
    comma: NumberTuple,
    word_range: NumberTuple,
    sentence_range: NumberTuple
}

type Args_word = {
    count: number,
    func?: string | StringFunction,
    args?: any[]
}
type Args_sentence = {
    count: number,
    comma?: NumberTuple,
    word_range?: NumberTuple
}
type Args_paragraph = {
    count: number,
    comma?: NumberTuple,
    word_range?: NumberTuple,
    sentence_range?: NumberTuple
}

type Args_get_word = {
    count?: number,
    sep?: string,
    func?: string | StringFunction,
    args?: any[]
}
type Args_get_sentence = {
    count?: number,
    sep?: string,
    comma?: NumberTuple,
    word_range?: NumberTuple
}
type Args_get_paragraph = {
    count?: number,
    sep?: string,
    comma?: NumberTuple,
    word_range?: NumberTuple,
    sentence_range?: NumberTuple
}

/** Original lorem ipsum text pool. */
declare let _TEXT: string[];

/**
 * Generate word pool.
 *
 * @param {number} [dupe]
 * @returns {StringIterator}
 */
declare function _gen_pool(dupe: number): StringIterator;
/**
 * Generate random word.
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
 * Generate random word.
 *
 * @template T
 * @param {{
 *         pool: StringIterator,
 *         func?: T extends string ? string : StringFunction,
 *         args?: any[]
 *     }} { pool, func, args }
 * @returns {string}
 */
declare function _gen_word<T extends string | StringFunction>(
    { pool, func, args }: {
        pool: StringIterator,
        func?: T extends string ? string : StringFunction,
        args?: any[]
    }
): string;
/**
 * Generate random sentence.
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
 * Generate random sentence.
 *
 * @param {{
 *         pool: StringIterator,
 *         comma: NumberTuple,
 *         word_range: NumberTuple
 *     }} { pool, comma, word_range }
 * @returns {string}
 */
declare function _gen_sentence(
    { pool, comma, word_range }: {
        pool: StringIterator,
        comma: NumberTuple,
        word_range: NumberTuple
    }
): string;
/**
 * Generate random paragraph.
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
 * Generate random paragraph.
 *
 * @param {{
 *         pool: StringIterator,
 *         comma: NumberTuple,
 *         word_range: NumberTuple,
 *         sentence_range: NumberTuple
 *     }} { pool, comma, word_range, sentence_range }
 * @returns {string}
 */
declare function _gen_paragraph(
    { pool, comma, word_range, sentence_range }: {
        pool: StringIterator,
        comma: NumberTuple,
        word_range: NumberTuple,
        sentence_range: NumberTuple
    }
): string;

/**
 * Generate a list of random words.
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
 * Generate a list of random words.
 *
 * @template T
 * @param {{
 *         count?: number,
 *         func?: T extends string ? string : StringFunction,
 *         args?: any[]
 *     }} { count, func, args }
 * @returns {StringIterator}
 */
declare function word<T extends string | StringFunction>(
    { count, func, args }: {
        count?: number,
        func?: T extends string ? string : StringFunction,
        args?: any[]
    }
): StringIterator;
/**
 * Generate a list of random sentences.
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
 * Generate a list of random sentences.
 *
 * @param {{
 *         count?: number,
 *         comma?: NumberTuple,
 *         word_range?: NumberTuple
 *     }} { count, comma, word_range }
 * @returns {StringIterator}
 */
declare function sentence(
    { count, comma, word_range }: {
        count?: number,
        comma?: NumberTuple,
        word_range?: NumberTuple
    }
): StringIterator;
/**
 * Generate a list of random paragraphs.
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
 * Generate a list of random paragraphs.
 *
 * @param {{
 *         count?: number,
 *         comma?: NumberTuple,
 *         word_range?: NumberTuple,
 *         sentence_range?: NumberTuple
 *     }} { count, comma, word_range, sentence_range }
 * @returns {StringIterator}
 */
declare function paragraph(
    { count, comma, word_range, sentence_range }: {
        count?: number,
        comma?: NumberTuple,
        word_range?: NumberTuple,
        sentence_range?: NumberTuple
    }
): StringIterator;

/**
 * Return random words.
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
 * Return random words.
 *
 * @template K
 * @template T
 * @param {{
 *         count?: K extends number ? number : NumberTuple,
 *         sep?: string,
 *         func?: T extends string ? string : StringFunction,
 *         args?: any[]
 *     }} { count, sep, func, args }
 * @returns {string}
 */
declare function get_word<K extends number | NumberTuple,
                          T extends string | StringFunction>(
    { count, sep, func, args }: {
        count?: K extends number ? number : NumberTuple,
        sep?: string,
        func?: T extends string ? string : StringFunction,
        args?: any[]
    }
): string;
/**
 * Return random sentences.
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
 * Return random sentences.
 *
 * @template K
 * @param {{
 *         count?: K extends number ? number : NumberTuple,
 *         sep?: string,
 *         comma?: NumberTuple,
 *         word_range?: NumberTuple
 *     }} { count, sep, comma, word_range }
 * @returns {string}
 */
declare function get_sentence<K extends number | NumberTuple>(
    { count, sep, comma, word_range }: {
        count?: K extends number ? number : NumberTuple,
        sep?: string,
        comma?: NumberTuple,
        word_range?: NumberTuple
    }
): string;
/**
 * Return random paragraphs.
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
 * Return random paragraphs.
 *
 * @template K
 * @param {{
 *         count?: K extends number ? number : NumberTuple,
 *         sep?: string,
 *         comma?: NumberTuple,
 *         word_range?: NumberTuple,
 *         sentence_range?: NumberTuple
 *     }} { count, sep, comma, word_range, sentence_range }
 * @returns {string}
 */
declare function get_paragraph<K extends number | NumberTuple>(
    { count, sep, comma, word_range, sentence_range }: {
        count?: K extends number ? number : NumberTuple,
        sep?: string,
        comma?: NumberTuple,
        word_range?: NumberTuple,
        sentence_range?: NumberTuple
    }
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
