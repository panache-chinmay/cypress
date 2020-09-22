// -- Start: Our Application Code --
function add (a, b) {
    return a + b
  }
  
  function subtract (a, b) {
    return a - b
  }
  
  function divide (a, b) {
    return a / b
  }
  
  function multiply (a, b) {
    return a * b
  }
  // -- End: Our Application Code --
  
  // -- Start: Our Cypress Tests --
  describe('Unit test our math functions', () => {
    context('math', () => {
      it('can add numbers', () => {
        expect(add(1, 2)).to.eq(3)
      })
  
      it('can subtract numbers', () => {
        expect(subtract(5, 12)).to.eq(-7)
      })
  
      specify('can divide numbers', () => {
        expect(divide(27, 9)).to.eq(3)
      })
  
      specify('can multiply numbers', () => {
        expect(multiply(5, 4)).to.eq(20)
      })
    })
  })

function fizzbuzz (num) {
    if (num % 3 === 0 && num % 5 === 0) {
      return 'fizzbuzz'
    }
  
    if (num % 3 === 0) {
      return 'fizz'
    }
  
    if (num % 5 === 0) {
      return 'buzz'
    }
  }
  // -- End: Our Application Code --
  
  // -- Start: Our Cypress Tests --
  describe('Unit Test FizzBuzz', () => {
    function numsExpectedToEq (arr, expected) {
      // loop through the array of nums and make
      // sure they equal what is expected
      arr.forEach((num) => {
        expect(fizzbuzz(num)).to.eq(expected)
      })
    }
  
    it.only('returns "fizz" when number is multiple of 3', () => {
      numsExpectedToEq([9, 12, 18], 'fizz')
    })
  
    it('returns "buzz" when number is multiple of 5', () => {
      numsExpectedToEq([10, 20, 25], 'buzz')
    })
  
    it('returns "fizzbuzz" when number is multiple of both 3 and 5', () => {
      numsExpectedToEq([15, 30, 60], 'fizzbuzz')
    })
  })



  //To skip a specified suite or test, append .skip() to the function. All nested suites will also be skipped.

  it.skip('returns "fizz" when number is multiple of 3', () => {
    numsExpectedToEq([9, 12, 18], 'fizz')
  })



