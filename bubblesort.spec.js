describe("Bubble Sort", function() {
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });

  beforeEach(() => {
    let arr = [2, 4, 6, 3];
  });

  it("sorts an array", function() {
    expect(bubbleSort(arr)).toEqual([2, 3, 4, 6]);
  });
});
