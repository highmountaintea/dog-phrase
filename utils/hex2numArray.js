export function hex2numArray(hex) {
  if (!/^[\da-f]*$/i.test(hex)) throw new Error('Invalid hex number');
  if (hex.length % 2 !== 0) throw new Error('Invalid hex number');
  if (hex.length === 0) return [];
  return hex.match(/[\da-f]{2}/gi).map((h) => parseInt(h, 16));
}
