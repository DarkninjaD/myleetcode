package kotlinleetcode.questions.isSubsequence

// Problem 392. is Subsequence
// link -> https://leetcode.com/contest/leetcode-weekly-contest-3/problems/is-subsequence/

// Constraints of the inputs
// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

class Solution {
  fun isSubsequence(s: String, t: String): Boolean {
    for (char in s) {
      if (!t.contains(char)) {
        return false
      }
      t.filter { it != char }
    }
    return true
  }
}