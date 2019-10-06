/// <reference path="./typings/index.d.ts" />

///////////////////////////////////////////////////////////////////////////////
// random.ts
///////////////////////////////////////////////////////////////////////////////

declare function choice<T>(seq: T[]): T;
declare function shuffle<T>(x: T[]): void;
declare function randint(a: number, b: number): number;

///////////////////////////////////////////////////////////////////////////////
// types.ts
///////////////////////////////////////////////////////////////////////////////

declare function capitalize(s: string): string;

interface String {
    capitalize(): string;
}

declare class InfiniteIterator<T> implements Iterator<T> {
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

declare let _TEXT: string[];

declare function _gen_pool(dupe: number): StringIterator;
declare function _gen_text<T extends string | StringFunction>(
    pool: StringIterator,
    func?: T extends string ? string : StringFunction,
    args?: any[]
): string;
declare function _gen_sentence(
    pool: StringIterator,
    comma: NumberTuple,
    word_range: NumberTuple
): string;
declare function _gen_paragraph(
    pool: StringIterator,
    comma: NumberTuple,
    word_range: NumberTuple,
    sentence_range: NumberTuple
): string;

declare function word<T extends string | StringFunction>(
    count?: number,
    func?: T extends string ? string : StringFunction,
    args?: any[]
): StringIterator;
declare function sentence(
    count?: number,
    comma?: NumberTuple,
    word_range?: NumberTuple
): StringIterator;
declare function paragraph(
    count?: number,
    comma?: NumberTuple,
    word_range?: NumberTuple,
    sentence_range?: NumberTuple
): StringIterator;

declare function get_word<K extends number | NumberTuple,
    T extends string | StringFunction>(
        count?: K extends number ? number : NumberTuple,
        sep?: string,
        func?: T extends string ? string : StringFunction,
        args?: any[]
    ): string;
declare function get_sentence<K extends number | NumberTuple>(
    count?: K extends number ? number : NumberTuple,
    sep?: string,
    comma?: NumberTuple,
    word_range?: NumberTuple
): string;
declare function get_paragraph<K extends number | NumberTuple>(
    count?: K extends number ? number : NumberTuple,
    sep?: string,
    comma?: NumberTuple,
    word_range?: NumberTuple,
    sentence_range?: NumberTuple
): string;

declare function set_pool(pool: string[]): void;
