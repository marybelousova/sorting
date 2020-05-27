function split(wholeArray) {
    const middle = Math.ceil(wholeArray.length/2)
    const secondHalf = wholeArray.slice(middle)
    const firstHalf = wholeArray.slice(0, middle)

    return [firstHalf, secondHalf];
  }

  function merge(arrLeft, arrRight) {  
    let finalArr = [];
      leftIndex = 0; 
      rightIndex= 0;

      while(arrLeft.length > leftIndex && arrRight.length > rightIndex) {
        if(arrLeft[leftIndex] < arrRight[rightIndex]) {
            finalArr.push(arrLeft[leftIndex])
            leftIndex++
        } else {
            finalArr.push(arrRight[rightIndex])
            rightIndex++
        }
      }
      return finalArr
      .concat(arrLeft.slice(leftIndex))
      .concat(arrRight.slice(rightIndex))
  }

  function mergeSort(unsortedArr) {
      if (unsortedArr.length <= 1) {
          return unsortedArr;
      };
      
      let [left, right] = split(unsortedArr)
      
      return merge(mergeSort(left), mergeSort(right))
  }
