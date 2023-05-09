/*
  First Answer
  49.9 MB - 21.90 %
  166 ms - 9.25 %

  Second Answer
  50.6 MB - 16.5%
  139 ms - 46.8%

  Look at others answers.
  really liked pirastrino Nice and clean TS/JS

  Three Answer - Personal best.
  47.9MB - 83.77%
  147 ms - 27.18%

  Four Answer
  49.5 MB - 32.45%
  144 ms - 33.72%

  Fifth Answer
  48.8 MB - 49.19%
  152 ms - 18.7%

  SiX Answer - Best but it's a copy
  48.9 MB - 49.19%
  131 ms - 70.69 %

*/

import { KeyObjectType } from "crypto";

type romanType = {
  value: number;
  order: number;
};

const romanConvert = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function newStringToRoman(letter: string): number {
  switch (letter) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return 0;
  }
}

function stringToRoman(letter: string): romanType {
  switch (letter) {
    case "I":
      return { value: 1, order: 0 };
    case "V":
      return { value: 5, order: 1 };
    case "X":
      return { value: 10, order: 2 };
    case "L":
      return { value: 50, order: 3 };
    case "C":
      return { value: 100, order: 4 };
    case "D":
      return { value: 500, order: 5 };
    case "M":
      return { value: 1000, order: 6 };
    default:
      return { value: 0, order: -1 };
  }
}

export function romanToIntI(s: string): number {
  let total = 0;
  const romanArray = s.split("").map((letter) => stringToRoman(letter));
  const lastIndex = romanArray.length - 1;
  let skip = false;
  romanArray.map((romanLetter, currentIndex, romanSet) => {
    let operation = false;
    if (lastIndex !== currentIndex) {
      if (!skip) {
        const nextRomanLetter = romanSet[currentIndex + 1];
        operation = romanLetter.order < nextRomanLetter.order;

        if (operation) {
          total += nextRomanLetter.value - romanLetter.value;
          skip = true;
        } else {
          total += romanLetter.value;
        }
      } else {
        skip = false;
      }
    } else {
      if (!skip) {
        total += romanLetter.value;
      }
    }
  });
  return total;
}

export const romanToIntII = (s: string): number => {
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const romanVal = stringToRoman(s[i]);
    const operation = stringToRoman(s[i + 1]).order;

    if (romanVal.order < operation) {
      total -= romanVal.value;
    } else {
      total += romanVal.value;
    }
  }

  return total;
};

export const romanToIntIII = (s: string): number => {
  let total = 0;

  const romanNumber = s.split("").map((i) => newStringToRoman(i));

  for (let i = 0; i < romanNumber.length; i++) {
    if (romanNumber[i] < romanNumber[i + 1]) {
      total -= romanNumber[i];
    } else {
      total += romanNumber[i];
    }
  }

  return total;
};

export function romanToIntIV(s: string): number {
  let total = 0;

  const romanNumber = s.split("").map((i) => newStringToRoman(i));

  for (let i = 0; i < romanNumber.length; i++) {
    if (romanNumber[i] < romanNumber[i + 1]) {
      total -= romanNumber[i];
    } else {
      total += romanNumber[i];
    }
  }

  return total;
}

export const romanToIntV = (s: string): number => {
  let total = 0;

  const romanNumber: number[] = s
    .split("")
    .map((i) => romanConvert[i as keyof typeof romanConvert]);

  for (let i = 0; i < romanNumber.length; i++) {
    if (romanNumber[i] < romanNumber[i + 1]) {
      total -= romanNumber[i];
    } else {
      total += romanNumber[i];
    }
  }

  return total;
};

export const romanToIntVI = (s: string): number => {
  const romanNumber: number[] = s
    .split("")
    .map((i) => romanConvert[i as keyof typeof romanConvert]);
  return romanNumber.reduce(
    (total, currentRoman, i, romanArray) =>
      currentRoman < romanArray[i + 1]
        ? total - currentRoman
        : total + currentRoman,
    0
  );
};

export const romanToIntVII = (s: string): number => {
  return s
    .split("")
    .map((i) => romanConvert[i as keyof typeof romanConvert])
    .reduce(
      (total, currentRoman, i, romanArray) =>
        currentRoman < romanArray[i + 1]
          ? total - currentRoman
          : total + currentRoman,
      0
    );
};

export const romanToIntVIII = (s: string): number => {
  return s
    .split("")
    .map((i) => newStringToRoman(i))
    .reduce(
      (total, currentRoman, i, romanArray) =>
        currentRoman < romanArray[i + 1]
          ? total - currentRoman
          : total + currentRoman,
      0
    );
};
