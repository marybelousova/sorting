function split(wholeArray) {
    const middle = Math.ceil(wholeArray.length/2)
    // console.log('middle:', middle)
    const secondHalf = wholeArray.slice(middle)
    const firstHalf = wholeArray.slice(0, middle)

    return [firstHalf, secondHalf];
  }

  function merge(arrLeft, arrRight) {
      let finalArr = [];
      leftIndex = 0; 
      rightIndex= 0;

      while(arrLeft.length > leftIndex && arrRight.length > rightIndex) {
          console.log('Left:', arrLeft.length,'Right:', arrRight.length)
        if(arrLeft[leftIndex] < arrRight[rightIndex]) {
            finalArr.push(arr.left[leftIndex])
            leftIndex ++
            console.log(leftIndex)
        } else {
            finalArr.push(arrRight[rightIndex])
            rightIndex ++
            console.log(rightIndex)
        }
      }
      return finalArr
  }