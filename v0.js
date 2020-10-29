import { wordList } from './v0/word-list.js';
import { hex2numArray } from './utils/hex2numArray.js';
import { numArray2hex } from './utils/numArray2hex.js';

export function test1(n) {
  return wordList[n];
}

function number2bits(num, len) {
  let max = Math.pow(2, len) - 1;
  if (!(num >= 0 && num <= max)) throw new Error(`Each element has to be between 0 and ${max}`);
  let bits = [];
  for (let i = len - 1; i >= 0; i--) {
    bits.push(num & 1);
    num = num >> 1;
  }
  bits.reverse();
  return bits;
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

function bits2number(bits, start, len) {
  let num = 0;
  for (let i = 0; i < len; i++) {
    let bit = bits[start + i];
    if (bit !== 0 && bit !== 1) throw new Error('bit has to be either 0 or 1');
    num *= 2;
    num += bit;
  }
  return num;
}

export function bits2bytes(bits) {
  if (bits.length % 8 !== 0) throw new Error('The length of bits array needs to be a multiple of 8');
  let bytes = [];
  for (let n = 0; n < bits.length; n += 8) {
    let byte = bits2number(bits, n, 8);
    bytes.push(byte);
  }
  return bytes;
}

export function bytes2dogPhrase(bytes) {
  let lengthbit = bytes.length % 2;
  let bits = [ lengthbit, ...bytes2bits(bytes) ];
  while (bits.length % 11 !== 0) {
    bits.push(0);
  }
  let phrase = [];
  for (let n = 0; n < bits.length; n += 11) {
    let indexer = bits2number(bits, n, 11);
    phrase.push(wordList[indexer]);
  }
  return phrase;
}

export function dogPhrase2bytes(phrase) {
  let bits = [];
  for (let n = 0; n < phrase.length; n++) {
    let word = phrase[n];
    let num = wordList.indexOf(word);
    let localbits = number2bits(num, 11);
    for (let bit of localbits) bits.push(bit);
  }
  let lengthbit = bits[0];
  let numBytes = Math.floor((bits.length - 1) / 8);
  if (numBytes % 2 !== lengthbit) numBytes -= 1;
  let effectivebits = bits.slice(1, numBytes * 8 + 1);
  return bits2bytes(effectivebits);
}

export function hex2dogPhrase(hex) {
  let bytes = hex2numArray(hex);
  return bytes2dogPhrase(bytes);
}

export function dogPhrase2hex(phrase) {
  let bytes = dogPhrase2bytes(phrase);
  return numArray2hex(bytes);
}
