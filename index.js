const {
  englishNumbers,
  persianNumbers,
  arabicNumbers,
  englishNumbersFinder,
  persianNumbersFinder,
  arabicNumbersFinder,
} = require("./constants/constants");

/**
 * Converts Persian/Arabic digits to English
 * @param {String|Number} value 
 * @returns {String}
 */
const toEnDigit = (value) => {
  let result = value.toString();
  for (let i = 0; i < 10; i += 1) {
    result = result
      .replace(persianNumbersFinder[i], englishNumbers[i])
      .replace(arabicNumbersFinder[i], englishNumbers[i]);
  }
  return result;
};

/**
 * Converts English/Arabic digits to Persian
 * @param {String|Number} value 
 * @returns {String}
 */
const toFaDigit = (value) => {
  let result = value.toString();
  for (let i = 0; i < 10; i += 1) {
    result = result
      .replace(englishNumbersFinder[i], persianNumbers[i])
      .replace(arabicNumbersFinder[i], persianNumbers[i]);
  }
  return result;
};

/**
 * Converts English/Persian digits to Arabic
 * @param {String|Number} value 
 * @returns {String}
 */
const toArDigit = (value) => {
  let result = value.toString();
  for (let i = 0; i < 10; i += 1) {
    result = result
      .replace(englishNumbersFinder[i], arabicNumbers[i])
      .replace(persianNumbersFinder[i], arabicNumbers[i]);
  }
  return result;
};

module.exports = {
  toEnDigit,
  toFaDigit,
  toArDigit,
};
