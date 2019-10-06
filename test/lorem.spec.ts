/// <reference path="../node_modules/@types/mocha/index.d.ts" />

'use strict';

import * as lorem from '../ts/lorem';
import { expect } from 'chai';

lorem.set_pool(['lorem']);

describe('Lorem', () => {
    it('should return a word', () => {
        var word = lorem.get_word();
        expect(word).to.equal('lorem');
    })
});
