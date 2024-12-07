# toLower

::: info
This function is only available in `es-toolkit/compat` for compatibility reasons. It either has alternative native JavaScript APIs or isn't fully optimized yet.

When imported from `es-toolkit/compat`, it behaves exactly like lodash and provides the same functionalities, as detailed [here](../../../compatibility.md).
:::

Converts the given value to a string and transforms it to lowercase. The function can handle various input types by first converting them to strings.

## Signature

```typescript
function toLower(value?: unknown): string;
```

## Parameters

- `value`(`unknown`) : The value to convert to lowercase. If omitted, returns an empty string.

## Returns

`string` : The lowercase version of the input value converted to a string.

## Examples

```typescript
import { toLower } from 'es-toolkit/compat';

toLower('--FOO-BAR--'); // returns '--foo-bar--'
toLower('Hello World'); // returns 'hello world'
toLower(null); // returns ''
toLower([1, 2, 3]); // returns '1,2,3'
toLower(123); // returns '123'
toLower(); // returns ''
```
