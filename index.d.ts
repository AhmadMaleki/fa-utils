declare module 'fa-utils' {
  /**
   * Converts Persian/Arabic digits to English
   * @param value
   */
  export function toEnDigit(value: string | number): string;

  /**
   * Converts English/Arabic digits to Persian
   * @param value
   */
  export function toFaDigit(value: string | number): string;

  /**
   * Converts English/Persian digits to Arabic
   * @param value
   */
  export function toArDigit(value: string | number): string;
}
