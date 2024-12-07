# toLower

::: info
この関数は互換性のために `es-toolkit/compat` からのみインポートできます。代替可能なネイティブ JavaScript API があるか、まだ十分に最適化されていないためです。

`es-toolkit/compat` からこの関数をインポートすると、[lodash と完全に同じように動作](../../../compatibility.md)します。
:::

指定された値を文字列に変換し、その後小文字に変換します。様々なタイプの入力値に対応し、まず文字列に変換してから処理を行います。

## インターフェース

```typescript
function toLower(value?: unknown): string;
```

### パラメータ

- `value` (`unknown`): 小文字に変換する値。省略した場合は空の文字列を返します。

### 戻り値

`string`: 入力値を文字列に変換した後、小文字に変換した結果。

## 例

```typescript
import { toLower } from 'es-toolkit/compat';

toLower('--FOO-BAR--'); // '--foo-bar--' を返す
toLower('Hello World'); // 'hello world' を返す
toLower(null); // '' を返す
toLower([1, 2, 3]); // '1,2,3' を返す
toLower(123); // '123' を返す
toLower(); // '' を返す
```
