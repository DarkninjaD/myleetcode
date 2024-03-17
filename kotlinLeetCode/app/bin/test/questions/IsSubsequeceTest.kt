import kotlinleetcode.questions.isSubsequence.Solution

import kotlin.test.Test
import kotlin.test.assertTrue
import kotlin.test.assertFalse

class isSubsequenceTest {
    val testSolution = Solution()::isSubsequence4

    @Test
    fun `Example-1 is 'abc' a isSubsequence of 'ahbgdc', true `() {
        assertTrue(testSolution("abc", "ahbgdc"))
    }

    @Test
    fun `Example-2 is 'axc' a isSubsequence of 'ahbgdc', false `() {
        assertFalse(testSolution("axc", "ahbgdc"))
    }

    @Test
    fun `Example-3 is 'acb' a isSubsequence of 'ahbgdc', false `() {
        assertFalse(testSolution("acb", "ahbgdc"))
    }

    @Test
    fun `Example-4 is 'aaaaaa' a isSubsequence of 'bbaaaa', false`() {
        assertFalse(testSolution("aaaaaa", "bbaaaa"))
    }

    @Test
    fun `Example-5 is '' a isSubsequence of '', true`() {
        assertTrue(testSolution("",""))
    }

    @Test
    fun `Example-6 is 'bb' a isSubsequence of 'ahbgdc', false`() {
        assertFalse(testSolution("bb", "ahbgdc"))
    }
}
