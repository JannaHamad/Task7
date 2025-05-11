
var nums = [1, 2, 3, 4, 5];

var newNums = nums.map(function(ele) {
  return ele * 2;
});

console.log("Original Array:", nums);
console.log("Doubled Array:", newNums);

document.getElementById('original').textContent = nums.join(', ');
document.getElementById('doubled').textContent = newNums.join(', ');
