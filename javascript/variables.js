/*
What: nơi lưu trữ giá trị tạm lên bộ nhớ
When: cần lưu trữ giá trị
Why: không có cách khác để lưu tạm giá trị
Who: dev
*/

/*
Cách khai báo biến trong JS
- Với ES5 thì dùng var (function scope)
- Từ ES6 thì dùng const hoặc let (block scope)
- Scope thì mình sẽ tìm hiểu sau.
- const thì dùng cho hằng số hoặc biến mà không có nhu cầu thay đổi.
- let thì dùng cho biến có mong muốn sẽ thay đổi giá trị.
*/
// ES5
var name = 'Easy Frontend';
// ES6
const PI = 3.14;
const name = 'Easy';
name = 'Frontend'; // error Assignment to constant variable
let count = 1;
count = 2; // works

/*
Cách đặt tên cho biến
- Dùng Tiếng Anh.
- Ðặt tên để biết biến đó chứa giá trị gì.
- Không đánh đố nhau, đặt tên một đằng lưu giá trị một nẻo =))
- Với true/false, đặt tên với prefix has hoặc is hoặc show hoặc từ mang ý nghĩa chỉ có nhận giá trị true hoặc false.
- Còn lại thì dùng danh từ.
- Với dạng danh sách thì thêm suffix List
*/

const sanPham = 'js course'; // BAD
const product = 'js course'; // BAD
const productName = 'js course'; // GOOD
// true/false variables
let hasValidItem = true;
let isSelected = false;
let show = false;
let hasPositiveNumber = false;
// single noun
const student = {
  name: 'Easy Frontend',
};
// plural noun
const students = [].map((student) => console.log(student.name)); // OK
const studentList = [].map((student) => console.log(student.name)); // GOOD
