# Lorem ipsum generator

[![Travis CI - Status](https://travis-ci.com/JarryShaw/lorem.js.svg)](https://travis-ci.com/JarryShaw/lorem.js)
[![Codecov - Coverage](https://codecov.io/gh/JarryShaw/lorem.js/branch/master/graph/badge.svg)](https://codecov.io/gh/JarryShaw/lorem.js)
[![License](https://img.shields.io/github/license/jarryshaw/lorem.js.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)

* [Installation](#installation)
* [Usage](#usage)
  * [Get random words](#get-random-words)
    * [`word` -- renerate a list of random words](#word)
    * [`get_word`-- return random words](#get_word)
  * [Get random sentences](#get-random-sentences)
    * [`sentence` -- renerate a list of random sentences](#sentence)
    * [`get_sentence`-- return random sentences](#get_sentence)
  * [Get random paragraphs](#get-random-paragraphs)
    * [`paragraph` -- renerate a list of random paragraphs](#paragraph)
    * [`get_paragraph`-- return random paragraphs](#get_paragraph)
  * [Customise word pool](#customise-word-pool)
    * [`set_pool` -- customise random word pool](#set_pool)
  * [Internal APIs](#internal-apis)
    * [`_TEXT` -- original *lorem ipsum* text pool](#_text)
    * [`_gen_word` -- generate random word](#_gen_word)
    * [`_gen_sentence` -- generate random sentence](#_gen_sentence)
    * [`_gen_paragraph` -- generate random paragraph](#_gen_paragraph)
* [Testing](#testing)

-------------------------------------------------------------------------------

> NB: uses [semantic versioning](https://semver.org).

In publishing and graphic design, *lorem ipsum* is a placeholder text commonly
used to demonstrate the visual form of a document or a typeface without
relying on meaningful content.

The `lorem` module provides a generic access to generating the *lorem ipsum*
text from its very original text:

> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
> esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
> cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
> est laborum.

## Installation

<!-- Simply run the following to install the current version from NPM:

```sh
npm i --save loremjs
``` -->

Install the latest version from the git repository:

```sh
git clone https://github.com/JarryShaw/lorem.js.git
cd lorem.js
npm install --only=prod
# and to update at any time
git pull
```

## Usage

Usage of the `lorem` module is rather simple. Depending on your needs, the
`lorem` module provides generation of **word**s, **sentence**s, and
**paragraph**s.

Get Random Words
----------------

The `lorem` module provides two different ways for getting random words.

<a name="word"></a>

1. `word` -- generate a list of random words

   ```javascript
   function word<T extends string | StringFunction>(
       count?: number | undefined,
       func?: (T extends string ? string : StringFunction) | undefined,
       args?: any[] | undefined
   ): InfiniteIterator<string>
   ```

   Generate a list of random words.

   ```javascript
   > word(3)
   InfiniteIterator {
     items: [ 'dolore', 'esse', 'duis' ],
     pointer: 0,
     length: 3
   }
   > word(3, 'capitalize')
   InfiniteIterator {
     items: [ 'Ullamco', 'Adipiscing', 'Consectetur' ],
     pointer: 0,
     length: 3
   }
   > word(3, (s) => s.toUpperCase())
   InfiniteIterator {
     items: [ 'QUIS', 'ALIQUA', 'CILLUM' ],
     pointer: 0,
     length: 3
   }
   ```

   - Args:

     * `count` -- `number`

       Number of non-repeated random words.

       *default*: `1`

     * `func` -- `Optional[Union[str, Callable[[str], str]]]`

       Filter function. It can be an attribute name of `str`, or a customised
       function that takes the original `str` and returns the modified `str`.

       *default*: `None`

     * `args` -- `Tuple[str]`

       Additional positional arguments for `func`.

       *default*: `()`

     * `kwargs` -- `Dict[str, Any]`

       Additional keyword arguments for `func`.

       *default*: `{}`

   - Returns:

     * `StringIterator` -- indefinite random words generator

<a name="get_word"></a>

2. `get_word` -- return random words

   ```javascript
   function get_word<K extends number | [number, number],
                     T extends string | StringFunction>(
       count?: (K extends number ? number : [number, number]) | undefined,
       sep?: string | undefined,
       func?: (T extends string ? string : StringFunction) | undefined,
       args?: any[] | undefined
   ): string
   ```

   Return random words.

   ```javascript
   > lorem.get_word(3)
   'veniam minim sit'
   > lorem.get_word(3, ' ', 'capitalize')
   'In Nulla Enim'
   > lorem.get_word(3, '-', (s) => s.toUpperCase())
   'OCCAECAT-DOLOR-SINT'
   ```

   - Args:

     * `count` -- `number | [number, number]`

       Number of random words. To generate random number of words, supply a
       2-element tuple of `number`, the function will use `random.randint` to choose
       a random integer as the number of random words.

       *default*: `1`

     * `sep` -- `string`

       Seperator between each word.

       *default*: `' '`

     * `func` -- `string | StringFunction`

       Filter function. It can be a function name of `string`, or a customised
       function that takes the original `string` and returns the modified `string`.

       *default*: `undefined`

     * `args` -- `any[]`

       Additional arguments for `func`.

       *default*: `[]`

   - Returns:

     * `string` -- random words

Get Random Sentences
--------------------

The `lorem` module provides two different ways for getting random sentences.

<a name="sentence"></a>

1. `sentence` -- generate a list of random sentences

   ```javascript
   function sentence(
       count?: number | undefined,
       comma?: [number, number] | undefined,
       word_range?: [number, number] | undefined
   ): InfiniteIterator<string>
   ```

   Generate a list of random sentences.

   ```javascript
   > sentence()
   InfiniteIterator {
     items: [ 'Anim quis id et adipiscing nulla.' ],
     pointer: 0,
     length: 1
   }
   ```

   - Args:

     * `count` -- `number`

       Number of non-repeated random sentences.

       *default*: `1`

     * `comma` -- `[number, number]`

       Random range for number of commas. The function will use
       `random.randint` to choose a random integer as the number of commas.

       *default*: `[0, 2]`

     * `word_range` -- `[number, number]`

       Random range for number of words in each sentence. The function will
       use `random.randint` to choose a random integer as the number of words.

       *default*: `[4, 8]`

   - Returns:

     * `StringIterator` -- indefinite random sentence generator

<a name="get_sentence"></a>

2. `get_sentence` -- return random sentences

   ```javascript
   function get_sentence<K extends number | [number, number]>(
       count?: (K extends number ? number : [number, number]) | undefined,
       sep?: string | undefined,
       comma?: [number, number] | undefined,
       word_range?: [number, number] | undefined
   ): string
   ```

   Return random sentences.

   ```javascript
   > get_sentence()
   'Irure adipiscing reprehenderit cupidatat sint.'
   ```

   - Args:

     * `count` -- `number | [number, number]`

       Number of random sentences. To generate random number of sentences,
       supply a 2-element tuple of `number`, the function will use
       `random.randint` to choose a random integer as the number of random
       sentences.

       *default*: `1`

     * `sep` -- `string`

       Seperator between each sentence.

       *default*: `' '`

     * `comma` -- `[number, number]`

       Random range for number of commas. The function will use
       `random.randint` to choose a random integer as the number of commas.

       *default*: `[0, 2]`

     * `word_range` -- `[number, number]`

       Random range for number of words in each sentence. The function will
       use `random.randint` to choose a random integer as the number of words.

       *default*: `[4, 8]`

   - Returns:

     * `string` -- random sentences

Get Random Paragraphs
---------------------

The `lorem` module provides two different ways for getting random paragraphs.

<a name="paragraph"></a>

1. `paragraph` -- generate a list of random paragraphs

   ```javascript
   function paragraph(
       count?: number | undefined,
       comma?: [number, number] | undefined,
       word_range?: [number, number] | undefined,
       sentence_range?: [number, number] | undefined
   ): InfiniteIterator<string>
   ```

   Generate a list of random paragraphs.

   ```javascript
   > paragraph()
   InfiniteIterator {
     items: [
       'Tempor minim mollit deserunt do. Eu exercitation et reprehenderit, veniam ad proident. Quis lorem cupidatat sit fugiat. Sed cillum pariatur aute irure magna ea. Commodo voluptate ullamco sint aliqua in, consequat qui officia esse duis.'
     ],
     pointer: 0,
     length: 1
   }
   ```

   - Args:

     * `count` -- `int`

       Number of non-repeated random paragraphs.

       *default*: `1`

     * `comma` -- `[number, number]`

       Random range for number of commas. The function will use
       `random.randint` to choose a random integer as the number of commas.

       *default*: `[0, 2]`

     * `word_range` -- `[number, number]`

       Random range for number of words in each sentence. The function will
       use `random.randint` to choose a random integer as the number of words.

       *default*: `[4, 8]`

     * `sentence_range` -- `[number, number]`

       Random range for number of sentences in each paragraph. The function
       will use `random.randint` to choose a random integer as the number of
       sentences.

       *default*: `[5, 10]`

   - Returns:

     * `StringIterator` -- random paragraph generator

<a name="get_paragraph"></a>

2. `get_paragraph` -- return random paragraphs

   ```javascript
   function get_paragraph<K extends number | [number, number]>(
       count?: (K extends number ? number : [number, number]) | undefined,
       sep?: string | undefined,
       comma?: [number, number] | undefined,
       word_range?: [number, number] | undefined,
       sentence_range?: [...] | undefined
   ): string
   ```

   Return random paragraphs.

   ```javascript
   > get_paragraph()
   'Est ut nisi consequat reprehenderit elit. Aliquip sed sint excepteur sunt. Cupidatat officia labore lorem ullamco. Minim aute proident quis laborum esse anim, in sit incididunt. Aliqua culpa dolor magna, qui ex eu laboris et. Do id ea cillum veniam. Velit exercitation dolore voluptate tempor.'
   ```

   - Args:

     * `count` -- `number | [number, number]`

       Number of random paragraphs. To generate random number of paragraphs,
       supply a 2-element tuple of `number`, the function will use
       `random.randint` to choose a random integer as the number of random
       paragraphs.

       *default*: `1`

     * `sep` -- `string`

       Seperator between each paragraph.

       *default*: `os.EOL` (`\r\n` on Windows, `\n` on POSIX)

     * `comma` -- `[number, number]`

       Random range for number of commas. The function will use
       `random.randint` to choose a random integer as the number of commas.

       *default*: `[0, 2]`

     * `word_range` -- `[number, number]`

       Random range for number of words in each sentence. The function will
       use `random.randint` to choose a random integer as the number of words.

       *default*: `[4, 8]`

     * `sentence_range` -- `[number, number]`

       Random range for number of sentences in each paragraph. The function
       will use `random.randint` to choose a random integer as the number of
       sentences.

       *default*: `[5, 10]`

   - Returns:

     * `string` -- random paragraphs

Customise Word Pool
-------------------

If wanted, the `lorem` module also provides an interface to customise the word
pool as you wish.

<a name="set_pool"></a>

1. `set_pool` -- customise random word pool

   ```javascript
   function set_pool(pool: string[]): void
   ```

   Customise random word pool.

   - Args:

     * `pool` -- `string[]`

       List of words to be used as random word pool.

### Internal APIs

Following are internal APIs for the `lorem` module.

<a name="_text"></a>

1. ```javascript
   _TEXT: string[] = ['ad', 'adipiscing', 'aliqua', 'aliquip', 'amet', 'anim', 'aute', 'cillum', 'commodo',
                      'consectetur', 'consequat', 'culpa', 'cupidatat', 'deserunt',  'do', 'dolor', 'dolore',
                      'duis', 'ea', 'eiusmod', 'elit', 'enim', 'esse', 'est', 'et',  'eu', 'ex', 'excepteur',
                      'exercitation', 'fugiat', 'id', 'in', 'incididunt', 'ipsum',  'irure', 'labore', 'laboris',
                      'laborum', 'lorem', 'magna', 'minim', 'mollit', 'nisi', 'non',  'nostrud', 'nulla',
                      'occaecat', 'officia', 'pariatur', 'proident', 'qui', 'quis',  'reprehenderit', 'sed',
                      'sint', 'sit', 'sunt', 'tempor', 'ullamco', 'ut', 'velit',  'veniam', 'voluptate']
   ```

   Original *lorem ipsum* text pool.

<a name="_gen_pool"></a>

2. ```javascript
   function _gen_pool(dupe?: number): InfiniteIterator<string>
   ```

   Generate word pool.

   - Args:

     * `dupe` -- `number`

       Duplication to generate the word pool.

       *default*: `1`

   - Returns

     * `StringIterator` -- an infinite loop word pool

<a name="_gen_word"></a>

3. ```javascript
   function _gen_word(
       pool: InfiniteIterator<string>,
       func?: string | StringFunction | undefined,
       args?: any[]
   ): string
   ```

   Generate random word.

   - Args:

     * `pool` -- `StringIterator`

       Word pool, returned by `_gen_pool`.

     * `func` -- `string | StringFunction`

       Filter function. It can be an attribute name of `string`, or a customised
       function that takes the original `string` and returns the modified `string`.

     * `args` -- `any[]`

       Additional arguments for `func`.

       *default*: `()`

   - Returns:

     * `string` -- random word

<a name="_gen_sentence"></a>

4. ```javascript
   function _gen_sentence(
       pool: InfiniteIterator<string>,
       comma: [number, number],
       word_range: [number, number]
   ): string
   ```

   Generate random sentence.

   - Args:

     * `pool` -- `StringIterator`

       Word pool, returned by `_gen_pool`.

     * `comma` -- `[number, number]`

       Random range for number of commas. The function will use
       `random.randint` to choose a random integer as the number of commas.

       *default*: `[0, 2]`

     * `word_range` -- `[number, number]`

       Random range for number of words in each sentence. The function will
       use `random.randint` to choose a random integer as the number of words.

       *default*: `[4, 8]`

   - Returns:

     * `string` -- random sentence

<a name="_gen_paragraph"></a>

5. ```javascript
   function _gen_paragraph(
       pool: InfiniteIterator<string>,
       comma: [number, number],
       word_range: [number, number],
       sentence_range: [number, number]
   ): string
   ```

   Generate random paragraph.

   - Args:

     * `pool` -- `StringIterator`

       Word pool, returned by `_gen_pool`.

     * `comma` -- `[number, number]`

       Random range for number of commas. The function will use
       `random.randint` to choose a random integer as the number of commas.

       *default*: `[0, 2]`

     * `word_range` -- `[number, number]`

       Random range for number of words in each sentence. The function will
       use `random.randint` to choose a random integer as the number of words.

       *default*: `[4, 8]`

     * `sentence_range` -- `[number, number]`

       Random range for number of sentences in each paragraph. The function
       will use `random.randint` to choose a random integer as the number of
       sentences.

       *default*: `[5, 10]`

   - Returns:

     * `str` -- random paragraph

## Testing

**Contributions are welcome.**
