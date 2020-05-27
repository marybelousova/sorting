const bubbleSort = {}

bubbleSort.bubbleSort = function(array) {
    if (!array.length || array.length === 1) return array
    let swaps = true;
    let newArr = [...array];
    while(swaps) {
        swaps = false 
            for(let i=0; i< newArr.length-1; i++) 
            if (this.isGreater(newArr[i], newArr[i+1])) {
               this.swap(newArr, i, i+1)
                swaps = true;
                }
    }
    return newArr;
}

bubbleSort.swap = function (arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1]=arr[idx2];
    arr[idx2]= temp;
} 

bubbleSort.isGreater = function(item1, item2) {
    if (item1 < item2) return false;
    else {
        return true;
    }
}