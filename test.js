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
