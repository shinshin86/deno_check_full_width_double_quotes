# deno_check_full_width_double_quotes

This is a module written in Deno to check for the presence of double quotes
double-byte characters.

## Usage

```typescript
import { check } from "./mod.ts"; // (This module)

console.log(check("abc”def"));
// => true

console.log(check("abcdef"));
// => false
```

## Licence

[MIT](https://github.com/shinshin86/deno_check_full_width_double_quotes/blob/main/LICENSE)

## Author

[Yuki Shindo](https://shinshin86.com)
