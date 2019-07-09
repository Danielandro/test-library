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
      if (actual != expected) {
        throw new Error (`Expected ${actual} to equal ${expected}`)
      } else {
        return true;
      }
    }, 
    toBe: function (expected) {
      if (actual !== expected) {
        throw new Error(`Expected ${actual} to equal ${expected}`)
      } else {
        return true;
      }
    }
  }
};