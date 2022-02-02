const stringLength = require('./index.js')

//TASK !


test('Expect that this test shows an error',() => {
  expect(stringLength('happym')).toEqual(6);
  expect(() => stringLength('Happpy go luckky')).toThrow('It didn\'t work')
  
});
test('Expect that this test shows an error',() => {
  expect(stringLength('happym')).toEqual(6);
});






//TASK 2