// let str = "0123456Kingsland";
// console.log(str.indexOf('USA')); // -1
// console.log(str.indexOf("K"));
// let arr1 = new Array(0)
// console.log(arr1)
// let arr = new Array(-1);
// let bigArr = new Array(4294967295);
// console.log(bigArr)
// console.log(typeof undefined)
// let index = undefined.indexOf("hi");
// let george = "George"
// console.log(george);
// console.log('hi');
// let sqrt = Math.sqrt(-1);
// //console.log(sqrt)
// let sub = "hello".substring(2, 1000);
// console.log(sub)
// let invalid = new Date(); 
// console.log(invalid);
// let date = new Date(2016, 1, 30)
// console.log(date)

try {
  throw new RangeError("Invalid range."); console.log("This will not be executed.");
  } catch (ex) {
  console.log("Exception object: " + ex);
  console.log("Type: " + ex.name);
  console.log("Message: " + ex.message);
  console.log("Stack: " + ex.stack); }