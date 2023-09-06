const input = [1, 4, 3, 6, 5];

function merge(left, right, arr) {
    let temp = [];
    for (let i = 0; i <= right; i++)
        temp[i] = arr[i];
    
    let mid = Math.floor((left+right)/2);
    let tleft = left;
    let tright = right;
    let current = left;

    while (tleft <= mid && tright <= right) {
        if (temp[tleft] <= temp[tright]) {
            arr[current++] = temp[tleft++];
        }
        else {
            arr[current++] = temp[tright++];
        }
    }

    let remain = mid - tleft;
    for (let i = 0; i<= remain; i++) {
        arr[current + i] = temp[tleft + i];
    }
}

function partition(left, right, arr) {
    if (left < right) {
        let mid = Math.floor((left+right)/2);
        partition(left, mid, arr);
        partition(mid+1, right, arr);
        merge(left, right, arr);
    }
}

partition(0, 4, input);
console.log(input);
