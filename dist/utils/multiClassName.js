/**
 * Merge multiple class names into a single string, discarding any falsy values.
 * @example
 * multiClassName('class1', 'class2', undefined, 'class3', false, 'class4') // 'class1 class2 class3 class4'
 * @param args `any[]`
 * @returns concatenated class names
 */ export default function multiClassName() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return args.filter(Boolean).join(" ");
}
