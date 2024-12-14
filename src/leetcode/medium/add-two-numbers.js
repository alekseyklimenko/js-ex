// https://leetcode.com/problems/add-two-numbers/

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

var addTwoNumbers = function(l1, l2) {
    var n1 = getNumber(l1);
    var n2 = getNumber(l2);
    var result = n1 + n2;
    console.log('result', result);
    return getList(result);
};


// const l1 = arr2list([2, 4, 3]);
// const l2= arr2list([5, 6, 4]);
const l1 = arr2list([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
const l2= arr2list([5, 6, 4]);

console.log(addTwoNumbers(l1, l2));
