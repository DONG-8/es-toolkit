import { toString } from '../util/toString';

/**
 * Converts `string`, as a whole, to lower case just like
 * [String#toLowerCase](https://mdn.io/toLowerCase).
 *
 * @param {unknown} [value=''] The value to convert.
 * @returns {string} Returns the lower cased string.
 * @example
 *
 * toLower('--FOO-BAR--');
 * // => '--foo-bar--'
 *
 * toLower(null);
 * // => ''
 *
 * toLower([1, 2, 3]);
 * // => '1,2,3'
 */
export function toLower(value?: unknown): string {
  return toString(value).toLowerCase();
}
