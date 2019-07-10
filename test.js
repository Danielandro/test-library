describe('Calculator', function (){
  it('should get the sum of two numbers', function (){
    var total = sum(6, 5);
    expect(total).toEqual(10);
  });

  it('should get the sum of two numbers', function () {
    var total = sum(5, 5);
    expect(total).toEqual(10);
  });
});

describe('List', function () {
  it('should be empty at the start', function () {    
    expect(list.length).toEqual(0);
  });

  it('should add books to list', function () {
    addToList("Sapiens");
    expect(list).toInclude("Sapiens");
  });
});
