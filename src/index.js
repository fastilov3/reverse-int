module.exports = function reverse (n) {
    if (n < 0) {
        n = Math.abs(n);
    }
    let result = '' + n;
    return result.split('').reverse().join('');
}


