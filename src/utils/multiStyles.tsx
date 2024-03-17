import React from "react";

type _FalsyValues = undefined | null | false | 0 | "";

/**
 * Merge multiple styles into a single object, discarding any falsy values.
 * @example
 * multiStyles({ color: 'red' }, { backgroundColor: 'yellow' }, undefined, { padding: '1rem' }, false, { margin: '1rem' }) // { color: 'red', backgroundColor: 'yellow', padding: '1rem', margin: '1rem' }
 * @param args `any[]`
 * @returns concatenated styles
 */
export default function multiStyles(
  ...args: (React.CSSProperties | _FalsyValues)[]
): React.CSSProperties {
  return Object.assign({}, ...args.filter(Boolean)) as React.CSSProperties;
}
