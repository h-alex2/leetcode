/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let overTen = false;
    const answer = new ListNode();
    let temp = answer;

    while (l1 || l2) {
        let sum = 0;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        if (overTen) {
            sum += 1;
        }
        
        temp.val = sum % 10;

        if (sum >= 10) {
            overTen = true;
        } else {
            overTen = false;
        }

        if (l1 || l2) {
            temp.next = new ListNode();
            temp = temp.next;
        } else {
            if (sum >= 10) {
                temp.next = new ListNode(1);
            }
        }
    }

    return answer;
};