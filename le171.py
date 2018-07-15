class Solution:
    def titleToNumber(self, s):
        """
        :type s: str
        :rtype: int
        """
        res=0
        for i in range(len(s)-1,-1,-1):
            char =ord(s[i])-64
            res =res+26**(len(s)-i-1)*char
        return res
Solution().titleToNumber("AB")
