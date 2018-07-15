class Solution:  
    def twoSum(self, numbers, target):
        """
        :type numbers: List[int]
        :type target: int
        :rtype: List[int]
        """
        endIndex =len(numbers)-1
        startIndex=0
        while numbers[startIndex]+numbers[endIndex] !=target:
            if numbers[startIndex]+numbers[endIndex] > target:
                endIndex =endIndex-1
            else:
                startIndex =startIndex+1
        return [startIndex+1,endIndex+1]

    
Solution().twoSum([-1,0],-1)