/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
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

