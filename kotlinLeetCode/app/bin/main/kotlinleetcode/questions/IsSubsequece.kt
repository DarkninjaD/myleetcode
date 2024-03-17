package kotlinleetcode.questions.isSubsequence

// Problem 392. is Subsequence
// link -> https://leetcode.com/contest/leetcode-weekly-contest-3/problems/is-subsequence/

// Constraints of the inputs
// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

class Solution {

  fun isSubsequence(s: String, t: String): Boolean {
    var lastKnow : Int? = null
    if(t.contains(s)) return true
    if(t.length <= s.length) return false
    for (char in s.reversed()) {
      if (!t.contains(char)) return false
      if (lastKnow == null) {
        lastKnow = t.indexOf(char)
      } else if (lastKnow <= t.indexOf(char)) {return false}
      lastKnow = t.indexOf(char)
    }
    return true
  }

  //idk i gave up on this one.
  fun isSubsequence2(s: String, t:String): Boolean {
    var lastKnow : Int = 0
    var check : String = t
    for (char in s) {
      // if(lastKnow > check.indexOf(char)) {return false}
      // lastKnow = check.indexOf(char)
      println(check)
      check = check.filter { it != char }
    }
    return (!check.contains(s))
  }

  // the fuck.
  fun isSubsequence3(s: String, t:String): Boolean = t.fold(0) {i, char -> i+ if(i in s.indices && char == s[i]) 1 else 0} == s.length;

  // chat gpt
  fun isSubsequence4(s: String, t:String): Boolean {
    var sIndex = 0
    var tIndex = 0

    while (sIndex < s.length && tIndex < t.length) {
        if (s[sIndex] == t[tIndex]) {
            sIndex++
        }
        tIndex++
    }

    return sIndex == s.length
  }
}