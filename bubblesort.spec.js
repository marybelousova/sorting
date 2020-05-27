describe('Bubble Sort', function(){
  beforeAll(function () {
    spyOn(bubbleSort, 'bubbleSort').and.callThrough();
    spyOn(bubbleSort, 'swap').and.callThrough();
    spyOn(bubbleSort, 'isGreater').and.callThrough();
  
  });
    it('handles an empty array', function(){
      expect( bubbleSort.bubbleSort([]) ).toEqual( [] );
    });
    it('handles a single array with 1 item', function(){
        expect (bubbleSort.bubbleSort([1])).toEqual([1]);
    });
    it ('handles an array with multyplied items', function(){
        expect (bubbleSort.bubbleSort([1, 3, 6, 4, 10, 2, 5, 11])).toEqual([1, 2, 3, 4, 5, 6, 10, 11]); 
        // console.log(bubbleSort.bubbleSort.calls.count())
        // console.log(bubbleSort.swap.calls.count())
        // console.log(bubbleSort.isGreater.calls.count())
    })
  });


