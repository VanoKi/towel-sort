// You should implement your task here.

module.exports = function towelSort (arr) {
  const changedArr = []
for (i in arr) {
  if (!(i % 2 === 0)){
    changedArr.push(arr[i].reverse())
  } else {
    changedArr.push(arr[i])
  }
}
let result = []
for (let i = 0; i < changedArr.length; i++) {
  result = result.concat(changedArr[i])
    }
  return result
}
