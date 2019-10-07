(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

exports.homedir = function () {
	return '/'
};

},{}],2:[function(require,module,exports){
'use strict';
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var os_1 = require("os");
var random = require("./random");
var types_1 = require("./types");
var _TEXT = [
    'ad', 'adipiscing', 'aliqua', 'aliquip', 'amet', 'anim', 'aute', 'cillum', 'commodo',
    'consectetur', 'consequat', 'culpa', 'cupidatat', 'deserunt', 'do', 'dolor', 'dolore',
    'duis', 'ea', 'eiusmod', 'elit', 'enim', 'esse', 'est', 'et', 'eu', 'ex', 'excepteur',
    'exercitation', 'fugiat', 'id', 'in', 'incididunt', 'ipsum', 'irure', 'labore', 'laboris',
    'laborum', 'lorem', 'magna', 'minim', 'mollit', 'nisi', 'non', 'nostrud', 'nulla',
    'occaecat', 'officia', 'pariatur', 'proident', 'qui', 'quis', 'reprehenderit', 'sed',
    'sint', 'sit', 'sunt', 'tempor', 'ullamco', 'ut', 'velit', 'veniam', 'voluptate'
];
function _gen_pool(dupe) {
    if (dupe === void 0) { dupe = 1; }
    var pool = [];
    for (var i = 0; i < dupe; i++) {
        pool.push.apply(pool, _TEXT);
    }
    random.shuffle(pool);
    return new types_1.InfiniteIterator(pool, true);
}
function _gen_word(func_args, func, args) {
    if (args === void 0) { args = []; }
    if ('pool' in func_args) {
        var pool = func_args.pool;
        var func = func_args.func;
        var args = func_args.args === undefined ? [] : func_args.args;
    }
    else
        var pool = func_args;
    var text = pool.next().value;
    if (func !== undefined)
        if (typeof func === "string")
            text = text[func].apply(text, args);
        else
            text = func.apply(void 0, __spreadArrays([text], args));
    return text;
}
function _gen_sentence(func_args, comma, word_range) {
    if ('pool' in func_args) {
        var pool = func_args.pool;
        var comma = func_args.comma;
        var word_range = func_args.word_range;
    }
    else
        var pool = func_args;
    var text = _gen_word(pool, 'capitalize');
    for (var i = 0; i < random.randint.apply(random, word_range) - 1; i++)
        text += ' ' + _gen_word(pool);
    var include_comma;
    for (var i = 0; i < random.randint.apply(random, comma); i++) {
        include_comma = random.choice([true, false]);
        if (include_comma) {
            text += ',';
            for (var i = 0; i < random.randint.apply(random, word_range) - 1; i++)
                text += ' ' + _gen_word(pool);
            continue;
        }
        break;
    }
    return text + '.';
}
function _gen_paragraph(func_args, comma, word_range, sentence_range) {
    if ('pool' in func_args) {
        var pool = func_args.pool;
        var comma = func_args.comma;
        var word_range = func_args.word_range;
        var sentence_range = func_args.sentence_range;
    }
    else
        var pool = func_args;
    var text = _gen_sentence(pool, comma, word_range);
    for (var i = 0; i < random.randint.apply(random, sentence_range) - 1; i++)
        text += ' ' + _gen_sentence(pool, comma, word_range);
    return text;
}
function word(func_args, func, args) {
    if (func_args === void 0) { func_args = 1; }
    if (args === void 0) { args = []; }
    if (typeof func_args === 'number') {
        var count = func_args;
    }
    else {
        var count = func_args.count;
        var func = func_args.func;
        var args = func_args.args === undefined ? [] : func_args.args;
    }
    var pool = _gen_pool(count);
    var list = [];
    for (var i = 0; i < count; i++)
        list.push(_gen_word(pool, func, args));
    return new types_1.InfiniteIterator(list);
}
exports.word = word;
function sentence(func_args, comma, word_range) {
    if (func_args === void 0) { func_args = 1; }
    if (comma === void 0) { comma = [0, 2]; }
    if (word_range === void 0) { word_range = [4, 8]; }
    if (typeof func_args === 'number') {
        var count = func_args;
    }
    else {
        var count = func_args.count;
        var comma = func_args.comma === undefined ? [0, 2] : func_args.comma;
        var word_range = func_args.word_range === undefined ? [4, 8] : func_args.word_range;
    }
    var pool = _gen_pool(count);
    var list = [];
    for (var i = 0; i < count; i++)
        list.push(_gen_sentence(pool, comma, word_range));
    return new types_1.InfiniteIterator(list);
}
exports.sentence = sentence;
function paragraph(func_args, comma, word_range, sentence_range) {
    if (func_args === void 0) { func_args = 1; }
    if (comma === void 0) { comma = [0, 2]; }
    if (word_range === void 0) { word_range = [4, 8]; }
    if (sentence_range === void 0) { sentence_range = [5, 10]; }
    if (typeof func_args === 'number') {
        var count = func_args;
    }
    else {
        var count = func_args.count;
        var comma = func_args.comma === undefined ? [0, 2] : func_args.comma;
        var word_range = func_args.word_range === undefined ? [4, 8] : func_args.word_range;
        var sentence_range = func_args.sentence_range === undefined ? [4, 8] : func_args.sentence_range;
    }
    var pool = _gen_pool(count);
    var list = [];
    for (var i = 0; i < count; i++)
        list.push(_gen_paragraph(pool, comma, word_range, sentence_range));
    return new types_1.InfiniteIterator(list);
}
exports.paragraph = paragraph;
function get_word(func_args, sep, func, args) {
    if (func_args === void 0) { func_args = 1; }
    if (sep === void 0) { sep = ' '; }
    if (args === void 0) { args = []; }
    if (typeof func_args === 'number')
        var count = func_args;
    else if ('count' in func_args) {
        var count = func_args.count === undefined ? 1 : func_args.count;
        var sep = func_args.sep === undefined ? ' ' : func_args.sep;
        var func = func_args.func;
        var args = func_args.args === undefined ? [] : func_args.args;
    }
    else
        var count = random.randint.apply(random, func_args);
    var iter_list = word(count, func, args);
    var list = [];
    for (var i = 0; i < count; i++)
        list.push(iter_list.next().value);
    return list.join(sep);
}
exports.get_word = get_word;
function get_sentence(func_args, sep, comma, word_range) {
    if (func_args === void 0) { func_args = 1; }
    if (sep === void 0) { sep = ' '; }
    if (comma === void 0) { comma = [0, 2]; }
    if (word_range === void 0) { word_range = [4, 8]; }
    if (typeof func_args === 'number')
        var count = func_args;
    else if ('count' in func_args) {
        var count = func_args.count === undefined ? 1 : func_args.count;
        var sep = func_args.sep === undefined ? ' ' : func_args.sep;
        var comma = func_args.comma === undefined ? [0, 2] : func_args.comma;
        var word_range = func_args.word_range === undefined ? [4, 8] : func_args.word_range;
    }
    else
        var count = random.randint.apply(random, func_args);
    var iter_list = sentence(count, comma, word_range);
    var list = [];
    for (var i = 0; i < count; i++)
        list.push(iter_list.next().value);
    return list.join(sep);
}
exports.get_sentence = get_sentence;
function get_paragraph(func_args, sep, comma, word_range, sentence_range) {
    if (func_args === void 0) { func_args = 1; }
    if (sep === void 0) { sep = os_1.EOL; }
    if (comma === void 0) { comma = [0, 2]; }
    if (word_range === void 0) { word_range = [4, 8]; }
    if (sentence_range === void 0) { sentence_range = [5, 10]; }
    if (typeof func_args === 'number')
        var count = func_args;
    else if ('count' in func_args) {
        var count = func_args.count === undefined ? 1 : func_args.count;
        var sep = func_args.sep === undefined ? ' ' : func_args.sep;
        var comma = func_args.comma === undefined ? [0, 2] : func_args.comma;
        var word_range = func_args.word_range === undefined ? [4, 8] : func_args.word_range;
        var sentence_range = func_args.sentence_range === undefined ? [5, 10] : func_args.sentence_range;
    }
    else
        var count = random.randint.apply(random, func_args);
    var iter_list = paragraph(count, comma, word_range, sentence_range);
    var list = [];
    for (var i = 0; i < count; i++)
        list.push(iter_list.next().value);
    return list.join(sep);
}
exports.get_paragraph = get_paragraph;
function set_pool(pool) {
    _TEXT = pool;
}
exports.set_pool = set_pool;

},{"./random":3,"./types":4,"os":1}],3:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
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
function randint(a, b) {
    return Math.floor(Math.random() * (b - a)) + a;
}
exports.randint = randint;
function choice(seq) {
    var i = Math.floor((Math.random() * seq.length));
    return seq[i];
}
exports.choice = choice;

},{}],4:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var random = require("./random");
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
String.prototype.capitalize = function () {
    return capitalize(this.toString());
};
var InfiniteIterator = (function () {
    function InfiniteIterator(elements, shuffle) {
        if (shuffle === void 0) { shuffle = false; }
        this.pointer = 0;
        this._length = elements.length;
        this._elements = elements;
        this._shuffle = shuffle;
    }
    InfiniteIterator.prototype.next = function () {
        if (this.pointer >= this._length) {
            this.pointer = 0;
            if (this._shuffle)
                random.shuffle(this._elements);
        }
        return {
            done: false,
            value: this._elements[this.pointer++]
        };
    };
    InfiniteIterator.prototype[Symbol.iterator] = function () {
        return this;
    };
    return InfiniteIterator;
}());
exports.InfiniteIterator = InfiniteIterator;

},{"./random":3}]},{},[2])

//# sourceMappingURL=lorem.js.map
