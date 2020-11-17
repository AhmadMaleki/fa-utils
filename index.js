const {
  englishNumbers,
  persianNumbers,
  arabicNumbers,
  englishNumbersFinder,
  persianNumbersFinder,
  arabicNumbersFinder,
} = require("./constants/constants");

const toEnDigit = (value) => {
  let result = value.toString();
  for (let i = 0; i < 10; i += 1) {
    result = result
      .replace(persianNumbersFinder[i], englishNumbers[i])
      .replace(arabicNumbersFinder[i], englishNumbers[i]);
  }
  return result;
};

const toFaDigit = (value) => {
  let result = value.toString();
  for (let i = 0; i < 10; i += 1) {
    result = result
      .replace(englishNumbersFinder[i], persianNumbers[i])
      .replace(arabicNumbersFinder[i], persianNumbers[i]);
  }
  return result;
};

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
