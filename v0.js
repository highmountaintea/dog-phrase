import { wordList } from './v0/word-list.js';

export function test1(n) {
  return wordList[n];
}

export function bytes2bits(bytes) {
  let bits = [];
  for (let n = 0; n < bytes.length; n++) {
    let byte = bytes[n];
    if (!(byte >= 0 && byte <= 255)) throw new Error('byte has to be between 0 and 255');
    let localbits = [];
    for (let i = 7; i >= 0; i--) {
      localbits.push(byte & 1);
      byte = byte >> 1;
    }
    for (let i = 7; i >= 0; i--) {
      bits.push(localbits[i]);
    }
  }
  return bits;
}

export function bits2bytes(bits) {
  if (bits.length % 8 !== 0) throw new Error('The length of bits array needs to be a multiple of 8');
  let bytes = [];
  for (let n = 0; n < bits.length; n += 8) {
    let byte = 0;
    for (let i = 0; i < 8; i++) {
      let bit = bits[n + i];
      if (bit !== 0 && bit !== 1) throw new Error('bit has to be either 0 or 1');
      byte = byte * 2;
      byte += bit;
    }
    bytes.push(byte);
  }
  return bytes;
}

export function bytes2dogPhrase(bytes) {
}

export function dogPhrase2bytes(bytes) {
}
