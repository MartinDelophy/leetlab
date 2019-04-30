/**
 *
 * 输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 * 
 */
var mergeKLists = function (lists) {
    var final = new ListNode("start");
    var head = final;
    while (lists.length != 0) {
        //run any time to kill all the various 
        // construct the variable to generate the list
        var min = Infinity;
        var loc = 0;
        for (var i = 0; i < lists.length; i++) {
            // console.log(lists[i])
            if (lists[i] == null) {
                lists.splice(i, 1);
            }
        }
        for (var i = 0; i < lists.length; i++) {
            if (lists[i].val != null && lists[i].val < min) {
                min = lists[i].val;
                loc = i;
            }
        }


        if (min != Infinity) {
            final.next = new ListNode(min);
            final = final.next;
            lists[loc] = lists[loc].next;
        }
    }
    return head.next;
};

var a = new ListNode(1);
a.next = new ListNode(4);
a.next.next = new ListNode(5);
//console.log(a)

var b = new ListNode(1);
b.next = new ListNode(3);
b.next.next = new ListNode(4);

var c = new ListNode(2);
c.next = new ListNode(6);


console.log(mergeKLists([a, b, c]))