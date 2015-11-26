'use strict';
import test from 'ava';
import swap from './index.js';

test(t => {
  let obj = {
    a: 'v1',
    b: 'v2',
    c: 'v3'
  };

  t.same(swap(obj), {v1: 'a', v2: 'b', v3: 'c'});
  t.throws(() => {
    swap('a', /must.*object/);
  });
  t.throws(() => {
    swap(null);
  }, /must.*object/);

  t.end();
});
