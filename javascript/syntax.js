// Printed to the console the message "Welcome to Javascript"
console.log('Welcome to Javascript');
// This is a comment, which is not executed
// Conditional statement
const isCovid = true;
if (isCovid) {
  console.log('Stay home');
} else {
  console.log('Go travel');
}
// Conditional statement with pre-defined values
const month = 1;
switch (month) {
  case 1:
    console.log('Jan');
    break;
  case 2:
    console.log('Feb');
    break;
  default:
    console.log('N/A');
}
// Loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// A function in javascript
function sayHello(name) {
  console.log(`Welcome ${name}`);
}
sayHello('Po');
// mong muôn code dưới này hiêu là 2 statement (dòng lệnh) khác nhau
alert('Hello')[(1, 2)].forEach(alert);
// nhưng thật ra code sẽ hiêu thê này

alert('Hello')[(1, 2)].forEach(alert);
// to fix, thêm dâu châm phây
alert('Hello');
[1, 2].forEach(alert);
