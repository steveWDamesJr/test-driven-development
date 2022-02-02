const Calculator = require ('../main-files/calculator.js')
 
describe( Calculator, () => {

test("Expect two numbers to be added", () => {
  const addMe = new Calculator(15,3);
  expect(addMe.add()).toEqual(18);
})
test("Expect two numbers to be subtracted", () => {
  const addMe = new Calculator(15,3);
  expect(addMe.subtract()).toEqual(12);
})
test("Expect two numbers to be divided", () => {
  const addMe = new Calculator(15,3);
  expect(addMe.divide()).toEqual(5);
})
test("Expect two numbers to be multiplied", () => {
  const addMe = new Calculator(15,3);
  expect(addMe.multiply()).toEqual(45);
})
});

