/**
 * Union two sorted arrays by asc to one array sorted by desc.
 * Fill array from start.
 */
export function sort(a, b) {
    const length = a.length + b.length;
    const c = new Array(length);
    let i = a.length - 1;
    let j = b.length - 1;
    let k = 0;

    while (k < length) {
        c[k++] = 
            a[i] >= b[j] || j < 0 || b[j] === undefined
            ? a[i--]
            : b[j--];
    }
    
    return c;
}

/**
 * Union two sorted arrays by asc to one array sorted by desc.
 * Fill array from end.
 */
export function sortFromEnd(a, b) {
    const length = a.length + b.length;
    const c = new Array(length);
    let i = 0;
    let j = 0;

    while (i < a.length || j < b.length) {
        c[length - i - j - 1] = 
            a[i] <= b[j] || j === b.length || b[j] === undefined
            ? a[i++]
            : b[j++];
    }
    
    return c;
}