import {iolist_to_string} from '../src';

const res = iolist_to_string(['a', 'b', ['c', 'd']]);
if (res !== 'abcd') {
    throw new Error(`Expect 'abcd', got: ${res}`);
}
console.log('passed test.');
