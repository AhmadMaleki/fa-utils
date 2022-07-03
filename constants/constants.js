const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

const englishNumbersFinder = [
  /0/g,
  /1/g,
  /2/g,
  /3/g,
  /4/g,
  /5/g,
  /6/g,
  /7/g,
  /8/g,
  /9/g,
];

const persianNumbersFinder = [
  /۰/g,
  /۱/g,
  /۲/g,
  /۳/g,
  /۴/g,
  /۵/g,
  /۶/g,
  /۷/g,
  /۸/g,
  /۹/g,
];

const arabicNumbersFinder = [
  /٠/g,
  /١/g,
  /٢/g,
  /٣/g,
  /٤/g,
  /٥/g,
  /٦/g,
  /٧/g,
  /٨/g,
  /٩/g,
];

const numberSymbols = ["", "K", "M", "B", "T"];

module.exports = {
  englishNumbers,
  persianNumbers,
  arabicNumbers,
  englishNumbersFinder,
  persianNumbersFinder,
  arabicNumbersFinder,
  numberSymbols,
};
