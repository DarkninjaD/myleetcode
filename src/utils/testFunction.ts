import chalk from "./../../node_modules/chalk/source/index.js";

const testFunction = <I, O>(
  f: (input: I) => O,
  testQuestions: { question: I; answer: O }[],
  showAllQs = true,
  showOnlyQs = -1
) => {
  console.log("\n=== Running Tests on function: " + f.name + " ===");

  let totalElapsed = 0;
  let totalDelta = 0;
  let totalComplete = 0;

  testQuestions.forEach((qAndA, at) => {
    // time test
    const startTime = performance.now();
    f(qAndA.question);
    const endTime = performance.now();
    const elapsed = endTime - startTime;
    // memory test
    const startMemoryUsage = process.memoryUsage().heapUsed;
    f(qAndA.question);
    const endMemoryUsage = process.memoryUsage().heapUsed;
    const delta = endMemoryUsage - startMemoryUsage;
    // result of the function
    const result = f(qAndA.question);
    totalDelta += delta;
    totalElapsed += elapsed;
    if (result === qAndA.answer) totalComplete++;

    if (showAllQs) {
      console.log(
        `=================\nQuestion: ${at + 1}\n${
          result === qAndA.answer
            ? chalk.greenBright("Passed")
            : chalk.redBright("Failed")
        }\nResult: ${chalk.yellow(result)}\nAnswer: ${chalk.yellow(
          qAndA.answer
        )}\nDelta: ${chalk.yellow(delta)} bits\nTime: ${chalk.yellow(
          elapsed
        )} ms`
      );
    }
    if (showOnlyQs === at) {
      console.log(
        `=================\nQuestion: ${at + 1}\n${
          result === qAndA.answer
            ? chalk.greenBright("Passed")
            : chalk.redBright("Failed")
        }\nResult: ${chalk.yellow(result)}\nAnswer: ${chalk.yellow(
          qAndA.answer
        )}\nDelta: ${chalk.yellow(delta)} bits\nTime: ${chalk.yellow(
          elapsed
        )} ms`
      );
    }
  });
  console.log(
    `Functions : ${f.name}\nTotal Pass/Failed: ${totalComplete}/${testQuestions.length}\nTotal delta: ${totalDelta} bits\nTotal elapsed: ${totalElapsed} ms`
  );
};

export default testFunction;
