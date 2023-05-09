export const testContainsDuplicate = (
  f: (s: number[]) => boolean,
  showAllQs = true,
  showOnlyQs = -1
) => {
  console.log("\n=== Running Tests on function: " + f.name + " ===");

  const testQuestions = [
    { question: [1, 2, 3, 1], answer: true },
    { question: [1, 2, 3, 4], answer: false },
    { question: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2], answer: true },
  ];

  let totalElapsed = 0;
  let totalDelta = 0;

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

    if (showAllQs) {
      console.log(
        `=================\n
        Question: ${at + 1}\n
        Result: ${result}\n
        Answer: ${qAndA.answer}\n
        Delta: ${delta} bits\n
        Time: ${elapsed} ms`
      );
    }
    if (showOnlyQs === at) {
      console.log(
        `=================\n
        Question: ${at + 1}\n
        Result: ${result}\n
        Answer: ${qAndA.answer}\n
        Delta: ${delta} bits\n
        Time: ${elapsed} ms`
      );
    }
  });
  console.log(
    `Functions : ${f.name}\n
    Total delta: ${totalDelta} bits\n
    Total elapsed: ${totalElapsed} ms`
  );
};
