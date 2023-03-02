
// Bubble sort
// time complexity of O(n²)
// space complexity of O(1)
// 1. Start iterating through the array, comparing 2 elements at a time
// 2. Swap them if required
// 3. At the end of first pass, the largest number has bubbled to the last index of the array, so ignore the last index in the next pass
// 4. Continue these passes until the array is sorted
function bubbleSort(arr) {
    for (let outer = 0; outer < arr.length; outer++) {
        console.log('loop outer =', outer)
        console.log('array is', arr)
        for (let inner = 0; inner < arr.length - outer - 1; inner++) {
            console.log('loop inner =', inner)
            if (arr[inner + 1] < arr[inner]) {
                console.log('swapping ' + arr[inner + 1] + ' and ' + arr[inner]);
                [arr[inner + 1], arr[inner]] = [arr[inner], arr[inner + 1]]
            }
        }
    }
    return arr;
}
//console.log(bubbleSort([5, 3, 8, 4, 6, 1]));

// Insertion Sort
// time complexity of O(n²)
// space complexity of O(1)
// 1. Start by comparing the 2nd element with the 1st element, swap if necessary
// 2. Iterate through the rest of the array. Then, for each element, iterate through the *sorted portion* of the array,
//    and *insert* this element where it needs to be, by making comparisons
// 3. Keep doing this until all the elements have been inserted into their correct positions
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        console.log('outer loop i =', i)
        console.log('array is', arr)
       // Start comparing current element with every element before it
        for (let j = i - 1; j > -1; j--) {
            console.log('inner loop j =', j)
            // Swap elements as required
            if (arr[j + 1] < arr[j]) {
                console.log('swapping ' + arr[j + 1] + ' and ' + arr[j]);
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
    return arr;
}
//console.log(insertionSort([5, 3, 8, 4, 6, 1]));

// Selection Sort
// time complexity of O(n²)
// space complexity of O(1)
// 1. Assume that the first element is the smallest. (Or largest, if sorting in descending order)
// 2. Find the minimum value from the array and swap this with the first element of the array.
//    This completes one pass, wherein the smallest element of the array is now at the 0th index.
// 3. Repeat this procedure for the rest of the array elements, but for the next pass do not compare the element we just placed at the 0th index
function selectionSort(arr) {
    let min;
    for (let i = 0; i < arr.length; i++) {
        console.log('outer loop i =', i)
        console.log('array is', arr)
        // Assume a minimum value
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            console.log('inner loop j =', j)
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        // Swap if new minimum value found
        if (min !== i) {
            console.log('swapping ' + arr[i] + ' and ' + arr[min]);
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}
//console.log(selectionSort([5, 3, 8, 4, 6, 1]));

// Merge sort
// time complexity of O(n * log n)
// space complexity for this algorithm is O(n)
// The main concept here is that an array with size 0 or 1 is inherently sorted.
// This means that if we are able to split our array into smaller subarrays of size 0 or 1, and merge them correctly, we have sorted our array!
// So there are two things that we need to do before we can implement merge sort.
// We need to find a way to divide an array into halves continuously, until we end up with arrays of size 0 or 1.
// Then, we merge them in a way that results in a larger (but still sorted) array.
// The pseudocode to continuously divide an array, and end up with a bunch of arrays of size 0 or 1, is as follows.
// We use recursion to do this. Use slice() to halve the array, and do this until the base case of arr.length ≤ 1 is reached.
//
// Now, let’s tackle the issue of merging two arrays (of size≤1) such that we end up with a sorted array.
// 1. Start by making an empty array.
// 2. Compare the first elements of the 2 subarrays, and push the smaller of the two, to the the new array.
// 3. Suppose 1st element of 1st array is smaller, then push that to the new array. Now compare the 2nd element of the first array to the 1st element of the 2nd array, and so on.
// 4.If we have exhausted the array elements in any of the 2 subarrays, then just push the other subarray to the new array we had created.
// https://rajat-m.medium.com/implement-5-sorting-algorithms-using-javascript-63c5a917e811

// Merging two sorted subarrays properly
function merge(arr1, arr2) {
    // Make a new array, and 2 pointers to keep track of elements of arr1 and arr2
    let res = [],
        i = 0,
        j = 0;

    // Loop until either arr1 or arr2 becomes empty
    while (i < arr1.length && j < arr2.length) {
        // If the current element of arr1 is lesser than that of arr2, push arr1[i] and increment i
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }

    // Add the rest of the remining subarray, to our new array
    while (i < arr1.length) {
        res.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        res.push(arr2[j]);
        j++;
    }
    return res;
}

// Recursive merge sort
function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr;

    // Splitting into two halves
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    // merging the two sorted halves
    console.log('merge', left, 'and' ,right);
    return merge(left, right);
}
// let arr = [5, 3, 8, 4, 6, 1];
// console.log(arr);
// console.log(mergeSort(arr));


// Quick sort
// at this moment описание осиливать некогда
// https://rajat-m.medium.com/implement-5-sorting-algorithms-using-javascript-63c5a917e811
function partition(arr, start = 0, end = arr.length - 1) {
    // Let's choose the pivot to be the arr[start] element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIdx++;
            // Swap current element with the element at the new pivot index
            [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
        }
    }

    // Swap the pivot element with the element at the pivotIndex index
    [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];

    // Return the index of the pivot element after swapping
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    console.log('arr =', arr, 'left =', left, 'right =', right)
    // Base case is that the left and right pointers don't overlap, after which we'll be left with an array of 1 item
    if (left < right) {
        let pivotIndex = partition(arr, left, right);
        console.log('pivotIndex =', pivotIndex)

        // For left subarray, which is everything to the left of the pivot element
        quickSort(arr, left, pivotIndex - 1);

        // For the right sub array, which is everything to the right of the pivot element
        quickSort(arr, pivotIndex + 1, right);
    }
    // Return the array, when it's of length 1 i.e, left === right
    return arr;
}
let arr = [5, 3, 8, 4, 6, 1];
console.log(arr);
console.log(quickSort(arr));

