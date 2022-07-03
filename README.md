# fa-utils
> Useful Persian utilities

[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-blue.svg)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

This is a combination of simple but useful persian-related functions (number modifiers for now).

## Installation

npm:

```sh
npm install fa-utils
```

## Usage

### _ES6:_

```javascript
import { toEnDigit, toFaDigit, toArDigit, toAbbrNumber } from 'fa-utils'
```

### _ES5 / CommonJS:_

```javascript
var { toEnDigit, toFaDigit, toArDigit, toAbbrNumber } = require('fa-utils')
```


## Examples
> _The **Input** and **Output** of each function is shown in examples blow._

* **toEnDigit()**
 
    Convert Persian/Arabic numbers to English:

    ```javascript
    toEnDigit("۱۲۳۴۵۶۷۸۹۰")    // returns: "1234567890"
    toEnDigit("١٢٣٤٥٦٧٨٩۰")    // returns: "1234567890"
    toEnDigit("fa۱۲۳۴ ar١٢٣٤") // returns: "fa1234 ar1234"
    toEnDigit("۱۲۳.۴۵")        // returns: "123.45"
    ```

* **toFaDigit()**
 
    Convert English/Arabic numbers to Persian:

    ```javascript
    toFaDigit(1234567890)      // returns: "۱۲۳۴۵۶۷۸۹۰"
    toFaDigit("1234567890")    // returns: "۱۲۳۴۵۶۷۸۹۰"
    toFaDigit("١٢٣٤٥٦٧٨٩۰")    // returns: "۱۲۳۴۵۶۷۸۹۰"
    toFaDigit("123.45")        // returns: "۱۲۳.۴۵"
    ```

* **toArDigit()**
 
    Convert English/Persian numbers to Arabic:

    ```javascript
    toArDigit(1234567890)      // returns: "١٢٣٤٥٦٧٨٩٠"
    toArDigit("1234567890")    // returns: "١٢٣٤٥٦٧٨٩٠"
    toArDigit("۱۲۳۴۵۶۷۸۹۰")    // returns: "١٢٣٤٥٦٧٨٩٠"
    toArDigit("123.45")        // returns: "١٢٣.٤٥"
    ```

* **toAbbrNumber()**
 
    Shortens numbers by adding symbols:

    ```javascript
    toAbbrNumber(710)      // returns: "710"
    toAbbrNumber(4861)    // returns: "4.9K"
    toAbbrNumber(14211793.45)    // returns: "14.2M"
    toAbbrNumber(-356199)        // returns: "-356.2K"
    ```

## Release History

* 0.1.5
    * Add toAbbrNumber method
* 0.1.4
    * Bug fix
* 0.1.3
    * Add TypeScript type declaration (Thanks to [@geopic](https://github.com/geopic))
* 0.1.2
    * Add autocomplete for methods
* 0.1.1
    * Add Readme
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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/geopic1"><img src="https://avatars0.githubusercontent.com/u/29524044?v=4?s=100" width="100px;" alt=""/><br /><sub><b>George Pickering</b></sub></a><br /><a href="https://github.com/AhmadMaleki/fa-utils/commits?author=geopic" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!


<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/fa-utils.svg
[npm-url]: https://npmjs.org/package/fa-utils
[npm-downloads]: https://img.shields.io/npm/dm/fa-utils.svg
