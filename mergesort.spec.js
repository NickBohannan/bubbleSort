describe("Split Array function", function() {
  let arr;

  beforeEach(function() {
    arr = [2, 1, 4, 3, 5, 6, 7, 9, 8, 0, 10];
  });

  it("is able to split an odd array into two halves", function() {
    expect(split(arr)).toEqual([[2, 1, 4, 3, 5], [6, 7, 9, 8, 0, 10]]);
  });
});

describe("Merge function", function() {
  let firstHalf;
  let secondHalf;

  beforeEach(function() {
    firstHalf = [1, 2, 3, 4, 5];
    secondHalf = [6, 7, 8, 9, 10];
  });

  it("is able to merge two sorted arrays into one sorted array", function() {
    // test the merging algorithm
    expect(merge(firstHalf, secondHalf)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]);
  });
});
