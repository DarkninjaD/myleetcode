import * as my from "./containsDuplicate.js";
import testFunction from "./../utils/testFunction.js";

const containsDuplicate = () => {
  testFunction(my.containsDuplicateI, testQuestions, true, -1, true);
  testFunction(my.containsDuplicateII, testQuestions, true, -1, true);
  testFunction(my.containsDuplicateIII, testQuestions, true, -1, true);
  testFunction(my.containsDuplicateIV, testQuestions);
};

const testQuestions = [
  { question: [1, 2, 3, 1], answer: true },
  { question: [1, 2, 3, 4], answer: false },
  { question: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2], answer: true },
];

export default containsDuplicate;
