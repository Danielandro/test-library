function describe(testcase, callback) {
  console.log(testcase);
  callback();
}

function it(description, callback) {
  try {
    callback();
    console.log(`\t %c ✓ ${description}`, 'color: #bada55; font-weight: bold'); 
  } catch(e) {
    console.log(`\t %c X ${description}`, 'color: #FF0000; font-weight: bold');
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
    },
    toInclude: function (element){
      if (!actual.includes(element)) {
        throw new Error(`Expected ${actual} to include ${element}`)
      } else {
        return true;
      }
    }
  }
};