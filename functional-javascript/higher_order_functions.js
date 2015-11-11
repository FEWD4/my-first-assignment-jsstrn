function repeat (operation, num) {
  for (var i = 0; i < num; i++) {
    operation()
  }
}

// recursive solution
function repeatRecursively (operation, num) {
  if (num <= 0) return // base case
  operation()
  return repeatRecursively(operation, num -= 1)
}

module.exports = repeatRecursively
