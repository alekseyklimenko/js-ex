// https://leetcode.com/problems/add-two-numbers/

/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

const arr2list = (arr) => {
    let first = null;
    let prev = null;

    arr.forEach((n) => {
        let curr = {
            val: n,
            next: null
        }
        if (!first) {
            first = curr;
        }
        if (prev) {
            prev.next = curr;
        }
        prev = curr;
    });
    return first;
}

var getNumber = function(obj) {
    let curr = obj
    let index = BigInt(1);
    let res = BigInt(0);

    while (curr) {
        res += BigInt(curr.val) * index;
        index = index * BigInt(10);
        curr = curr.next;
    }
    return res;
}

var getList = function(num) {
    const str = num.toLocaleString('fullwide', { useGrouping: false });
    let first = null;
    let prev = null;

    for (let i = str.length - 1; i >= 0; i--) {
        const n = str[i];
        let curr = {
            val: +n,
            next: null
        }
        if (!first) {
            first = curr;
        }
        if (prev) {
            prev.next = curr;
        }
        prev = curr;
    }
    return first;
}

const addTwoNumbers = (l1, l2) => {
    const n1 = getNumber(l1);
    const n2 = getNumber(l2);
    const result = n1 + n2;
    return getList(result);
};

const addTwoNumbers = (l1, l2) => {
};

const l1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null
        }
    }
};

const l2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: null
        }
    }
};

const l1 = arr2list([2, 4, 3]);
const l2= arr2list([5, 6, 4]);
// const l1 = arr2list([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
// const l2= arr2list([5, 6, 4]);

console.log(addTwoNumbers(l1, l2));
