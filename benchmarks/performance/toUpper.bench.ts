import { bench, describe } from 'vitest';
import { toUpper as toUpperToolkitCompat_ } from 'es-toolkit/compat';
import { toUpper as toUpperLodash_ } from 'lodash';

const toUpperToolkitCompat = toUpperToolkitCompat_;
const toUpperLodash = toUpperLodash_;

describe('toUpper', () => {
  describe('short string', () => {
    bench('es-toolkit/compat/toUpper', () => {
      const str = 'camelCase';
      toUpperToolkitCompat(str);
    });

    bench('lodash/toUpper', () => {
      const str = 'camelCase';
      toUpperLodash(str);
    });
  });

  describe('long string', () => {
    const LONG_STR = 'camelCaseLongString'.repeat(1000);
    bench('es-toolkit/compat/toUpper', () => {
      toUpperToolkitCompat(LONG_STR);
    });

    bench('lodash/toUpper', () => {
      toUpperLodash(LONG_STR);
    });
  });

  describe('special characters', () => {
    const SPECIAL_STR = '!@#$hello-world__test123';
    bench('es-toolkit/compat/toUpper', () => {
      toUpperToolkitCompat(SPECIAL_STR);
    });

    bench('lodash/toUpper', () => {
      toUpperLodash(SPECIAL_STR);
    });
  });

  describe('non-string input', () => {
    bench('es-toolkit/compat/toUpper', () => {
      toUpperToolkitCompat(null);
      toUpperToolkitCompat(123);
    });

    bench('lodash/toUpper', () => {
      toUpperLodash(null);
      toUpperLodash(123);
    });
  });
});
