/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const nodes = new Set();
    let currentNode = head;

    while (currentNode !== null) {
        if (nodes.has(currentNode)) {
            return true;
        }

        nodes.add(currentNode);
        currentNode = currentNode.next;
    }

    return false;
};