'use strict';

import { expect } from 'chai';
import * as lorem from '../ts/lorem';

lorem.set_pool(['lorem']);

// Math.random = function () {
//     return 0;
// }

describe('Lorem', () => {
    it('should return a word', () => {
        var word = lorem.get_word();
        expect(word).to.equal('lorem');
    });

    // it('should return a sentence', () => {
    //     var word = lorem.get_sentence();
    //     expect(word).to.equal('lorem');
    // })
});
