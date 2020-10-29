export function numArray2hex(numArray) {
  let hexArray = numArray.map((num) => {
    if (!(num >= 0 && num <= 255)) throw new Error('number has to be between 0 and 255');
    let hex = num.toString(16);
    if (hex.length !== 2) hex = '0' + hex;
    return hex;
  });
  return hexArray.join('');
}
