module.exports = function check(str, bracketsConfig) {
  let config = {};
  let stack = [];
  for (p of bracketsConfig) {
    config[p[0]] = p[1];
  }
  for (letter of str) {
    if (config[stack[stack.length - 1]] === letter) {
      stack.pop();      
    } else {
      stack.push(letter);
    }
  }
  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
}
