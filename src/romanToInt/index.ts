import * as myRomanToInt from "./romanToInt";
import testFunction from "./../utils/testFunction";

const romanToInt = () => {
  testFunction(myRomanToInt.romanToIntI, testQuestions);
  testFunction(myRomanToInt.romanToIntII, testQuestions);
  testFunction(myRomanToInt.romanToIntIII, testQuestions);
  testFunction(myRomanToInt.romanToIntIV, testQuestions);
  testFunction(myRomanToInt.romanToIntV, testQuestions);
  testFunction(myRomanToInt.romanToIntVI, testQuestions);
  testFunction(myRomanToInt.romanToIntVII, testQuestions);
  testFunction(myRomanToInt.romanToIntVIII, testQuestions);
};

const testQuestions = [
  { question: "IV", answer: 4 },
  { question: "XX", answer: 20 },
  { question: "III", answer: 3 },
  { question: "LVIII", answer: 58 },
  { question: "MCMXCIV", answer: 1994 },
];

export default romanToInt;
