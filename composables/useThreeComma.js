// composables/useThreeComma.js

import { ref } from 'vue';

/**
 * Converts a number to a string with commas as thousand separators (Persian format).
 * @param {number|string} value The value to be formatted.
 * @returns {string} The formatted value with commas.
 */
export const useThreeComma = () => {
    const threeComma = (value) => {
        const num = Number(String(value).replace(/,/g, ''));
        if (isNaN(num)) return value;
        return num.toLocaleString('fa-IR');
    };

    return {
        threeComma,
    };
};
