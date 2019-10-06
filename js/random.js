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
//# sourceMappingURL=random.js.map