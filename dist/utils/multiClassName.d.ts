/**
 * Merge multiple class names into a single string, discarding any falsy values.
 * @example
 * multiClassName('class1', 'class2', undefined, 'class3', false, 'class4') // 'class1 class2 class3 class4'
 * @param args `any[]`
 * @returns concatenated class names
 */
export default function multiClassName(...args: any[]): string;
