/// <reference path="./index.d.ts" />

'use strict';

import * as random from './random';
import { InfiniteIterator } from "./types";

// original lorem ipsum text pool
let _TEXT: string[] = [
    'ad', 'adipiscing', 'aliqua', 'aliquip', 'amet', 'anim', 'aute', 'cillum', 'commodo',
    'consectetur', 'consequat', 'culpa', 'cupidatat', 'deserunt', 'do', 'dolor', 'dolore',
    'duis', 'ea', 'eiusmod', 'elit', 'enim', 'esse', 'est', 'et', 'eu', 'ex', 'excepteur',
    'exercitation', 'fugiat', 'id', 'in', 'incididunt', 'ipsum', 'irure', 'labore', 'laboris',
    'laborum', 'lorem', 'magna', 'minim', 'mollit', 'nisi', 'non', 'nostrud', 'nulla',
    'occaecat', 'officia', 'pariatur', 'proident', 'qui', 'quis', 'reprehenderit', 'sed',
    'sint', 'sit', 'sunt', 'tempor', 'ullamco', 'ut', 'velit', 'veniam', 'voluptate'
]

function _gen_pool(dupe: number = 1) {
    var pool: string[] = [];

    for (var i = 0; i < dupe; i++) {
        pool.push(..._TEXT);
    }
    random.shuffle(pool);

    return new InfiniteIterator(pool);
}

function _gen_word(
    pool: StringIterator,
    func?: string | StringFunction,
    args: any[] = []
) {
    var text = pool.next().value;
    if (func !== undefined)
        if (typeof func === "string")
            text = text[func](...args);
        else
            text = func(text, ...args);
    return text;
}

function _gen_sentence(
    pool: StringIterator,
    comma: [number, number],
    word_range: [number, number]
) {
    var text = _gen_word(pool, capitalize);
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

function _gen_paragraph(
    pool: StringIterator,
    comma: [number, number],
    word_range: [number, number],
    sentence_range: [number, number]
) {
    var text = _gen_sentence(pool, comma, word_range);
    for (var i = 0; i < random.randint(...sentence_range) - 1; i++)
        text += ' ' + _gen_sentence(pool, comma, word_range);
    return text;
}

export function word(
    count: number = 1,
    func?: string | StringFunction,
    args: any[] = []
) {
    var pool = _gen_pool(count);
    var list: string[] = [];

    for (var i = 0; i < count; i++)
        list.push(_gen_word(pool, func, args));
    return new InfiniteIterator(list);
}

export function sentence(
    count: number = 1,
    comma: [number, number] = [0, 2],
    word_range: [number, number] = [4, 8]
) {
    var pool = _gen_pool(count);
    var list: string[] = [];

    for (var i = 0; i < count; i++)
        list.push(_gen_sentence(pool, comma, word_range));
    return new InfiniteIterator(list);
}

export function paragraph(
    count: number = 1,
    comma: [number, number] = [0, 2],
    word_range: [number, number] = [4, 8],
    sentence_range: [number, number] = [5, 10]
) {
    var pool = _gen_pool(count);
    var list: string[] = [];

    for (var i = 0; i < count; i++)
        list.push(_gen_paragraph(pool, comma, word_range, sentence_range));
    return new InfiniteIterator(list);
}

export function get_word(
    count: number | [number, number] = 1,
    sep: string = ' ',
    func?: string | StringFunction,
    args: any[] = []
) {
    if (typeof count === "object")
        count = random.randint(...count);
    var iter_list = word(count, func, args);

    var list: string[] = [];
    for (var i = 0; i < count; i++)
        list.push(iter_list.next().value);
    return list.join(sep);
}

export function get_sentence(
    count: number | NumberTuple = 1,
    sep: string = ' ',
    comma: NumberTuple = [0, 2],
    word_range: NumberTuple = [4, 8]
) {
    if (typeof count === "object")
        count = random.randint(...count);
    var iter_list = sentence(count, comma, word_range);

    var list: string[] = [];
    for (var i = 0; i < count; i++)
        list.push(iter_list.next().value);
    return list.join(sep);
}

export function get_paragraph(
    count: number | NumberTuple = 1,
    sep: string = ' ',
    comma: NumberTuple = [0, 2],
    word_range: NumberTuple = [4, 8],
    sentence_range: NumberTuple = [5, 10]
) {
    if (typeof count === "object")
        count = random.randint(...count);
    var iter_list = paragraph(count, comma, word_range, sentence_range);

    var list: string[] = [];
    for (var i = 0; i < count; i++)
        list.push(iter_list.next().value);
    return list.join(sep);
}

export function set_pool(pool: string[]) {
    _TEXT = pool;
}
