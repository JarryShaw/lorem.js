/// <reference path="./index.d.ts" />

'use strict';

import * as random from "./random";

function capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

String.prototype.capitalize = function () {
    return capitalize(this);
};

export class InfiniteIterator<T> implements Iterator<T> {
    private pointer = 0;
    private length: number;

    constructor(public items: T[]) {
        this.length = items.length;
    }

    public next(): IteratorResult<T> {
        if (this.pointer >= this.length) {
            this.pointer = 0;
            random.shuffle(this.items);
        }

        return {
            done: false,
            value: this.items[this.pointer++]
        };
    }

    [Symbol.iterator](): Iterator<T> {
        return this;
    }
}
