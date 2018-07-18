class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        f =ListNode(0)
        cur =f
        inn=0
        while l1 and l2:
            val =(l1.val+l2.val+inn)%10
            inn =int((l1.val+l2.val+inn)/10)
            l1 =l1.next
            l2=l2.next
            cur.next=ListNode(val)
            cur =cur.next
        while l2:
            l1,l2 =l2,l1
        while l1:
            val =(l1.val+inn)%10
            inn =int((l1.val+inn)/10)
            l1 =l1.next
            cur.next=ListNode(val)
            cur =cur.next
        if inn >0:
            cur.next =ListNode(inn)
        return f.next





l1 = ListNode(2)
l1.next = ListNode(4)
l1.next.next = ListNode(3)

l2 = ListNode(5)
l2.next = ListNode(6)
l2.next.next = ListNode(4)



Solution().addTwoNumbers(l1,l2)
