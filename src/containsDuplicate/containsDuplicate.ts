export const containsDuplicateI = (nums: number[]): boolean => {
  const noDup = new Set();
  return nums.some((num) => {
    if (noDup.size + 1 !== noDup.add(num).size) return true;
  });
};
/* First Answer : 105 ms - 32.63% | 56.3 mb - 17.50%

So I can tell that this is going to be slow because of the higher order functions that are being used
'some'. now what i have read Set is faster then array when i comes to this case about duplicates but having to
call it and store the const means i get a big hit in the memory space as well.

*/

export const containsDuplicateII = (nums: number[]): boolean => {
  const noDup = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (noDup.has(nums[i])) {
      return true;
    }
    noDup.add(nums[i]);
  }
  return false;
};
/* Second Answer : 84 ms - 91.82 % | 56.5 mb - 17.50%

  Ok I'm guessing my speed boost is because I'm not looking through the whole array i just break as soon as a Dup has been found.
  still the const are eating up a lot of space.
*/

export const containsDuplicateIII = (nums: number[]): boolean => {
  return new Set(nums).size !== nums.length;
};
/* Three Answer : 94 ms - 64.86% |  55 mb - 43.76%

  I'm kinda shocked on how fast this runs. and really puts into context how much higher order functions takes time.
  still at this point I'm going through the whole array and not just popping out when it find a dup so the speed takes a hit there.
  but memory wise it's way better (i mean 1.5 mb better whatever).

  The questions becomes how do i combined the two. no const for the functions to hold on to and break away as soon as it finds a dup.
*/

// the pop is killing my array as i run the functions 3 times to see each of the performance.
export const containsDuplicateIV = (nums: number[]): boolean => {
  for (let i = 0; i < nums.length; i++) {
    let test = nums.find((elm) => elm === nums.pop());
    console.log(test);
    console.log("q's" + nums);
    if (test) {
      return true;
    }
  }
  return false;
};
