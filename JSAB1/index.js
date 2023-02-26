const i = 100; //hang so
let a = 5;// bien 
let b = a;
b= a+ 5
console.log(b); //10 
console.log(a);
//let name1 = prompt("ten ban la gi")
//alert("hello " + name1)
// cho nguoi dung nhap vao 1 so 
// in ra man hinh conso cac so nho hon so do 

// cho người dùng nhập vào các tháng trong năm 
// thông báo ra các mùa tương úng với tháng 

// console.log(a);

// if(a<20){
// console.log("hello");
// }else{
// console.log("hihi");
// }

//loop 
// let count = 0; 

// for(let count = 0 ; count<10; i++){
//     count = count +2
//     console.log(count);
// }
// console.log();
// console.log(count);
//While
// console.log();
// count=0;
// while (count < 5) {
//   console.log(count);
//   count++;
// }

// do while 
// console.log();
// let count2 = 1;

// do {
//   console.log(count2);
//   count2++;
// } while (count2 < 1);

// arr
let Ngon = ["com", "thit", "ca", "trung", "rau"];
// CRUD 
// Create
let monAn =  ["com", "thit", "ca", "trung", "rau"];
// monAn.push("bun dau");
// console.log(monAn);
//reead
// let monAnDauTien = monAn[0];
console.log(monAn[0])
// update
// monAn[0] = "chao";
// console.log(monAn) 
//delete 
monAn.splice(0, 1);
console.log(monAn);
console.log(Ngon);

// array.forEach(): Hàm này cho phép bạn lặp qua từng phần tử trong mảng và thực hiện một hành động nào đó với mỗi phần tử.

// array.map(): Hàm này cho phép bạn chuyển đổi mỗi phần tử trong mảng thành một giá trị khác và trả về một mảng mới.

// array.filter(): Hàm này cho phép bạn lọc ra các phần tử trong mảng thỏa mãn một điều kiện nào đó và trả về một mảng mới.

// array.reverse(): Hàm này cho phép bạn đảo ngược thứ tự các phần tử trong mảng.

// array.indexOf(): Hàm này cho phép bạn tìm kiếm một phần tử trong mảng và trả về vị trí của nó
let person = {
    name: "Linh",
    age: 23,
    location: "Ha Noi",
    height: 170,
    weight: 60,
}
// CRUD 
// create
person.yearOfBirth = 1996;

console.log();
console.log(person.age) // 22
// update

person.name = "Don";
// delete

delete person.age;
console.log(person);
// tạo ra một obj
// tên câu thủ
// đội
// tuổi 
// chiều cao 
// thêm speed 


// Tạo ra một object chứa thông tin về cầu thủ Cristiano Ronaldo, bao gồm tên, năm sinh, quốc tịch.
// Hỏi người dùng có muốn nhập thêm thông tin của cầu thủ không bằng cách nhập "Y" hoặc "N".
// Nếu người dùng nhập "Y", hỏi tiếp người dùng muốn thêm thông tin gì, giá trị cụ thể là gì? Sau đó thêm thông tin người dùng nhập vào object ban đầu.
// Nếu người dùng nhập "N", in ra màn hình câu "Good Bye!"

 let footballer = {
    name: "QuangHai",
    club: "Pau",
    age: 25,
    Height: 168,
    }
    person.speed = 80-90;



    //Phép chia lấy dư kết quả là phần dư phép chia (B % A cho kết quả là 0)
    // ++(Tăng lên 1) tăng giá trị integer lên 1 (A++ sẽ cho kết quả là 11)
    // --(Giảm đi 1) Giảm 1 giá trị integer đi một (A-- sẽ cho kết quả là 9)

    // && (Phép AND logic) Nếu cả hai toán hạng là khác k, thì điều kiện trở thành true
    // //(Phép Ỏ logic) Nếu 1 trong hai toán hạng là khác k thì điều kiện là true
    // !(Phép NOT logic)