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
        expect(merge([[2, 6, 8], [1, 4, 3]])).toEqual([1, 2, 3, 4, 6, 8])
    });
  }); 
   