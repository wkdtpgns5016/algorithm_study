const input = [1, 4, 3, 6, 5];
let sort = [];

function merge(left, right, mid, arr) {
    let i = left;
    let j = mid + 1;
    let k = left;
    let sort = [];

    while (i <= mid && j <= right) {
        if (arr[j] <= arr[j])
            sort[k++] = arr[i++];
        else
            sort[k++] = arr[j++];
    }

    if (i > mid) {
        for (let l = j; l <= right; l++)
            sort[k++] = arr[l];
    }
    else {
        for (let l = i; l <= mid; l++)
            sort[k++] = arr[l];
    }
}

function merge_sort(left, right, arr) {
    let mid;
    if (left < right) {
        mid = Math.floor((left + right) / 2);
        merge_sort(left, mid, arr);
        merge_sort(mid + 1, right, arr);
        merge(left, right, mid, arr);
    }
}

merge_sort(0, input.length - 1, input);
console.log(sort);
