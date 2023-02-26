// for in
// const person = {fname: "John", lname:"Doe", age:25};
//vong lap for in, chay tu 1 den ky cuoi 
// for(let key in person){
// console.log(key)
// }
//  let text ="";
//  for (let x in person){// gia tri x la key se dc thay doi theo cac ky theo tung vong 
//     text += person[x];
//  }
//  console.log(text);

//  const animal = {name :"trau", age: 18, weight:"20kg", height:"1,6m", gender:"nale"};
//  for(let i in animal) {
//     if (i ==="wei")
//  }


// const cars =["BMW", "Volvo", "Mini"];
// let text ="";
// for (let x of cars){
//     text += x;
// }
// console.log(text1);


// const number =[3,4,1,5,7,10,9,6,15,2,8]
// let maxNumber = number [0]; //tao so bien lon nhat
// for (const number of numbers){
//     if (number > maxNumber){
//     maxNumber = number;
//     }
//    }
// console.log('So lon nhat la gi:', maxNumber);
 
//sắp xếp các phần tử theo giá trị tăng dần
cost number = [3,4,1,5,7,10,9,6,15,2,8];

let numbers = [3, 4, 1, 5, 7, 10, 9, 6, 15, 2, 8];
// Code chuẩn: for lồng for
for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[j] < numbers[i]) {
      let temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp
    }
  }
}