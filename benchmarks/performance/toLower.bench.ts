import { bench, describe } from 'vitest';
import { toLower as toLowerToolkitCompat_ } from 'es-toolkit/compat';
import { toLower as toLowerLodash_ } from 'lodash';

const toLowerToolkitCompat = toLowerToolkitCompat_;
const toLowerLodash = toLowerLodash_;

describe('toLower', () => {
  const basicStrings = ['FOO BAR', 'Foo bar', 'foo Bar', 'Foo Bar', 'FOO BAR', 'fooBar', '--FOO-BAR--', '__FOO_BAR__'];
  const spacedStr = 'HELLO  WORLD';
  const specialCharsStr = '!@#$HELLO%^&*';
  const newlineStr = 'TABS\tAND\nNEWLINES';
  const unicodeStrs = ['CAFÉ', 'ÜBER', 'SEÑOR'];
  const latinOperators = ['\xd7', '\xf7'];
  const number = 123;
  const negZero = -0;
  const posZero = 0;
  const infinite = Infinity;
  const nan = NaN;
  const nullValue = null;
  const undefinedValue = undefined;
  const arrays = [[1, 2, 3], ['A', 'B', 'C'], [1, 'B', -0], []];
  const nestedArrays = [1, [2, 3], 4];
  const symbols = [Symbol('TEST'), Symbol('')];
  const objects = [{ toString: () => 'CUSTOM' }, {}];
  const mixedArray = [1, 'B', Symbol('TEST'), null, undefined];

  bench('es-toolkit/compat/toLower', () => {
    basicStrings.forEach(str => toLowerToolkitCompat(str));
    toLowerToolkitCompat(spacedStr);
    toLowerToolkitCompat(specialCharsStr);
    toLowerToolkitCompat(newlineStr);
    unicodeStrs.forEach(str => toLowerToolkitCompat(str));
    latinOperators.forEach(op => toLowerToolkitCompat(op));
    toLowerToolkitCompat(number);
    toLowerToolkitCompat(negZero);
    toLowerToolkitCompat(posZero);
    toLowerToolkitCompat(infinite);
    toLowerToolkitCompat(nan);
    toLowerToolkitCompat(nullValue);
    toLowerToolkitCompat(undefinedValue);
    arrays.forEach(arr => toLowerToolkitCompat(arr));
    toLowerToolkitCompat(nestedArrays);
    symbols.forEach(sym => toLowerToolkitCompat(sym));
    objects.forEach(obj => toLowerToolkitCompat(obj));
    toLowerToolkitCompat(mixedArray);
  });

  bench('lodash/toLower', () => {
    basicStrings.forEach(str => toLowerLodash(str));
    toLowerLodash(spacedStr);
    toLowerLodash(specialCharsStr);
    toLowerLodash(newlineStr);
    unicodeStrs.forEach(str => toLowerLodash(str));
    latinOperators.forEach(op => toLowerLodash(op));
    toLowerLodash(number);
    toLowerLodash(negZero);
    toLowerLodash(posZero);
    toLowerLodash(infinite);
    toLowerLodash(nan);
    toLowerLodash(nullValue);
    toLowerLodash(undefinedValue);
    arrays.forEach(arr => toLowerLodash(arr));
    toLowerLodash(nestedArrays);
    symbols.forEach(sym => toLowerLodash(sym));
    objects.forEach(obj => toLowerLodash(obj));
    toLowerLodash(mixedArray);
  });
});
