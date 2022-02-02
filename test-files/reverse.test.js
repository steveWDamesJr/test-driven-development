const reverseString = require('../main-files/reverse.js')

test("Expect that this test reverses string", () => {
  expect(reverseString("HELLO")).toEqual("OLLEH");
 
});