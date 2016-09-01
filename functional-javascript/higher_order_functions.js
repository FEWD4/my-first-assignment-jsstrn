
module.exports = function repeat (operation, num) {
  if (num <= 0) return // base case
  operation()
  return repeat(operation, num -= 1)
}
