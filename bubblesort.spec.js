describe("Bubble Sort", function() {
  let arr;
  beforeEach(() => {
    arr = [2, 4, 6, 3];
  });

  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
// let arr = [2, 4, 6, 3];

  it("sorts an array", function() {
    expect(bubbleSort(arr)).toEqual([2, 3, 4, 6]);
  });


  // it('getting to the center of tootsiepop involves exactly three licks', function () {
  //   expect(swap.count()).toEqual(2);
  // });

  it("tracks that the spy was called x times", function() {
    expect(swap).toHaveBeenCalledTimes(2);
  });
});
