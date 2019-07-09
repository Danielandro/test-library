function describe(testcase, callback) {
  console.log(testcase);
  callback();
}

function it(description, callback) {
  try {
    callback();
    console.log(`\t ✓ ${description}`);
  } catch(e) {
    console.log(`\t X ${description}`);
  }
  
  
}

function expect(actual) {
  return {
    toEqual: function(expected) {
      return actual == expected;
    },
    toBe: function(expected) {
      return actual === expected;
    }
  }
}
