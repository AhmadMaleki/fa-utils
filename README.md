# fa-utils
> Useful Persian utilities

[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

This is a combination of simple but useful persian-related functions (number modifiers for now).

## Installation

npm:

```sh
npm install fa-utils
```

## Usage

### _ES6:_

```javascript
import { toEnDigit, toFaDigit, toArDigit } from 'fa-utils'
```

### _ES5 / CommonJS:_

```javascript
var { toEnDigit, toFaDigit, toArDigit } = require('fa-utils')
```


## Examples
> _All functions can take **String** or **Number** as argument and return a **String**._

* ### toEnDigit()
 
    Convert Persian/Arabic numbers to English:

    ```javascript
    toEnDigit("۱۲۳۴۵۶۷۸۹۰")    // returns: "1234567890"
    toEnDigit("١٢٣٤٥٦٧٨٩۰")    // returns: "1234567890"
    toEnDigit("fa۱۲۳۴ ar١٢٣٤") // returns: "fa1234 ar1234"
    toEnDigit("۱۲۳.۴۵")        // returns: "123.45"
    ```

* ### toFaDigit()
 
    Convert English/Arabic numbers to Persian:

    ```javascript
    toFaDigit(1234567890)      // returns: "۱۲۳۴۵۶۷۸۹۰"
    toFaDigit("1234567890")    // returns: "۱۲۳۴۵۶۷۸۹۰"
    toFaDigit("١٢٣٤٥٦٧٨٩۰")    // returns: "۱۲۳۴۵۶۷۸۹۰"
    toFaDigit("123.45")        // returns: "۱۲۳.۴۵"
    ```

* ### toArDigit()
 
    Convert English/Persian numbers to Arabic:

    ```javascript
    toArDigit(1234567890)      // returns: "١٢٣٤٥٦٧٨٩٠"
    toArDigit("1234567890")    // returns: "١٢٣٤٥٦٧٨٩٠"
    toArDigit("۱۲۳۴۵۶۷۸۹۰")    // returns: "١٢٣٤٥٦٧٨٩٠"
    toArDigit("123.45")        // returns: "١٢٣.٤٥"
    ```


## Release History

* 0.1.0
    * Initial Release


## License

Distributed under the ISC license. See ``LICENSE`` for more information.


## Contributing

All contributions are welcome and I appreciate them. Including adding new functionality or improve current ones. (Even fixing typos)

1. Fork it (<https://github.com/AhmadMaleki/fa-utils/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/fa-utils.svg
[npm-url]: https://npmjs.org/package/fa-utils
[npm-downloads]: https://img.shields.io/npm/dm/fa-utils.svg
