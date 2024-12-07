# toLower

::: info
出于兼容性原因，此函数仅在 `es-toolkit/compat` 中提供。它可能具有替代的原生 JavaScript API，或者尚未完全优化。

从 `es-toolkit/compat` 导入时，它的行为与 lodash 完全一致，并提供相同的功能，详情请见 [这里](../../../compatibility.md)。
:::

将给定值转换为字符串后，再将其转换为小写。可以处理各种类型的输入值，首先将其转换为字符串，然后执行操作。

## 签名

```typescript
function toLower(value?: unknown): string;
```

### 参数

- `value` (`unknown`): 要转换为小写的值。如果省略，则返回空字符串。

### 返回值

`string`: 将输入值转换为字符串后再转换为小写的结果。

## 示例

```typescript
import { toLower } from 'es-toolkit/compat';

toLower('--FOO-BAR--'); // 返回 '--foo-bar--'
toLower('Hello World'); // 返回 'hello world'
toLower(null); // 返回 ''
toLower([1, 2, 3]); // 返回 '1,2,3'
toLower(123); // 返回 '123'
toLower(); // 返回 ''
```
