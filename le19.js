/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(n==0){
        return head
    }
    var first =head
    var second =head
    for(var i=0;i<n+1;i++){
        first =first.next
        if(first.next ==null){
            first =null
            return head
        }
    }
    while(first != null){
        first =first.next
        second =second.next
    }
    second.next = second.next.next;
    return head;
    
};

 function ListNode(val) {
         this.val = val;
         this.next = null;
     }

var one = new ListNode(1)
var two=one.next = new ListNode(2)
var three =two.next =new ListNode(3)
var four =three.next =new ListNode(4)
var five =four.next =new ListNode(5)

console.log(removeNthFromEnd (one,2))

