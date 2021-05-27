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
var addTwoNumbers = function (l1, l2) {
    // 零節點，尾端用
    const zero_node = new ListNode(0, null);

    // 解答，首個不用
    let list = new ListNode(undefined, null);

    // 目前在 list 的位置
    let pos = list;

    // first: [0], [0] 例外處理
    // sum: l1.val + l2.val + carry （首次 carry 為 0）
    // carry: 進位緩存
    let first = true,
        sum = l1.val + l2.val,
        carry = 0;
    while (sum || l1.next || l2.next || first) {
        first = false;
        carry = parseInt(sum / 10);
        sum = sum % 10;

        pos.next = new ListNode(sum, null);
        pos = pos.next;

        l1 = l1.next || zero_node;
        l2 = l2.next || zero_node;

        sum = l1.val + l2.val + carry;
    }

    return list.next;
};
