/// <reference path="./index.d.ts" />

'use strict';

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

export function randint(a: number, b: number) {
    return Math.floor(Math.random() * (b - a)) + a;
}

export function choice<T>(seq: T[]) {
    var i = Math.floor((Math.random() * seq.length));
    return seq[i];
}
