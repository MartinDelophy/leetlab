class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        s=[]
        l=0
        r=0
        totalLength =len(nums1)+ len(nums2)
        i=0
        
        while i<=totalLength/2:
            if l ==len(nums1):
                while i<= int(totalLength/2):
                    s.append(nums2[r])
                    r =r+1
                    i=i+1
            elif r ==len(nums2):
                while i<= int(totalLength/2):
                    s.append(nums1[i])
                    l=l +1
                    i=i+1

            else:
                if(nums1[l]>nums2[r]):
                    s.append(nums2[r])
                    r=r+1
                    i=i+1
                else:
                    s.append(nums1[l])
                    l=l+1
                    i=i+1
        print (s,i)

        if totalLength%2 ==1:
          
            return s[i-1]
        else:
       
            return (s[i-1]+s[i-2])/2

            
        


nums1 = [1]
nums2 = [2,4]

print (Solution().findMedianSortedArrays(nums1,nums2))