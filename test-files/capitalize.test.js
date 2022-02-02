const capitalize = require('../main-files/capitalize.js')




test("Expect a given string to be capitalized", () => {
  expect(capitalize('georgia')).toEqual('Georgia');
})