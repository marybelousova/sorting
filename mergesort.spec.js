
describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      expect(split([4, 6, 8, 1, 4])).toEqual([[4, 6, 8],[1, 4]])
    });
  });

  describe('Split Array function', function() {
    it('is able to split an array into two halves for even array', function() {
      expect(split([2, 6, 8, 1, 4, 3])).toEqual([[2, 6, 8],[1, 4, 3]])
    });
  });

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        expect(merge([2, 4], [1, 3])).toEqual([1, 2, 3, 4])
    });

    it('test #2, larger arrays', function() {
      expect(merge([2, 4, 6], [1, 3, 5])).toEqual([1, 2, 3, 4, 5, 6])
    }) 

    // it('test #3, huge arrays', function() {
    //   expect(merge([9, 5, 7, 3, 1], [10, 8, 6, 2, 4])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    // })
  }); 
   
  describe('mergeSort function', function() {
    it('is able to merge a 4-element array', function() {
      expect(mergeSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
    });

    it('is able to merge a 6-element array', function() {
      expect(mergeSort([6, 4, 1, 5, 3, 2])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('is able to merge a 20-element array', function() {
      expect(mergeSort([5, 3, 1, 7, 9, 2, 4, 8, 6, 10, 14, 16, 12, 18, 20, 19, 17, 15, 13, 11])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ])
    })
  })