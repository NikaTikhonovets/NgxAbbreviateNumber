# ngx-abbreviate-number

>Angular pipe for abbreviate a number and add unit letters (K, M, B, T)

[Demo](https://stackblitz.com/edit/ngx-abbreviate-number-demo)

## Installation

 ```terminal
  $ npm install ngx-abbreviate-number
  ```



## Usage

Import the `NgxAbbreviateNumberModule` in your `app.module.ts`:

```typescript
import { NgxAbbreviateNumberModule } from 'ngx-abbreviate-number';

@NgModule({
  ...
  imports: [
    ...
    NgxAbbreviateNumberModule,
    ...
  ],
  ...
})
export class AppModule {}
```

##### In HTML template
```
{{ currentNumber | abbreviateNumber : decimalPlaces }}
```

### Arguments

| Param | Type | Details |
| --- | --- | --- |
| currentNumber | `number` | Initial value of number |
| decimalPlaces  | `number` | The number of digits to appear after the decimal point. It defaults to 0. |

## Examples
| Initial value | Converted value | value of 'decimalPlaces' |
| --- | --- | --- |
| 1000 | 1K | default (0) | 
| 1000000 | 1M | default (0) |
| 5258 | 5.3K | default (0) |
| 745203 | 745.2K | default (0) |
| 5258 | 5.26K | 2 |
| 6312 | 6.312K | 3 |

## Versions
| Package version | Angular version |
|-----------------|-----------------|
| 3.x             | 19.x            |
| 2.x             | 17.x            |
| 1.x             | 15.x            |
| 0.x             | 8.x             |
