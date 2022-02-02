function stringLength(string) {
  if(string.length > 1 && string.length <= 10) {
  return string.length;
} else {
  
  // console.log('hello')
  throw new Error('It didn\'t work');
}
}

// stringLength('You are correct')


module.exports = stringLength