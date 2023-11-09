import kotlinleetcode.questions.isSubsequence.Solution

import kotlin.test.Test
import kotlin.test.assertTrue
import kotlin.test.assertFalse

class isSubsequenceTest {

    @Test
    fun `Example-1 is 'abc' a isSubsequence of 'ahbgdc', true `() {
        val testSolution = Solution()
        assertTrue(testSolution.isSubsequence("abc", "ahbgdc"))
    }

    @Test
    fun `Example-2 is 'axc' a isSubsequence of 'ahbgdc', false `() {
        val testSolution = Solution()
        assertFalse(testSolution.isSubsequence("axc", "ahbgdc"))
    }

    @Test
    fun `Example-3 is 'acb' a isSubsequence of 'ahbgdc', false `() {
        val testSolution = Solution()
        assertFalse(testSolution.isSubsequence("acb", "ahbgdc"))
    }
}
