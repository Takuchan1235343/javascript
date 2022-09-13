/**
 * const,let等の変数数宣言
 */
// var val1 = "var変数"
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き"
// console.log(val1);

// //var変数は再宣言可能
// val1 = "var変数を再宣言"
// console.log(val1);

// let val2 = "let変数"
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言"

// const val3 = "const変数";
// console.log(val3);

// //consr変数は上書き不可
// // val3 = "const変数を上書き"

// const val3 = "const変数を再宣言"；

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "kawamoto",
//   age: 28,
// };
// val4.name = "taku";
// val4.addres = "osaka";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push('monky');
// console.log(val5);

/**
 * テンプレート文字列
 */
// 　const name = "taku";
// const age = 28;
// //『私の名前はtakuです。年齢は２８歳です。』

// //従来の方法
// const message1 = "私の名前は"　 + name + "です。年齢は"　　+ age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));
/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "河本"];
// // for (let index = 0; index < nameArr.length; index++) {
// //   console.log(`${index+ 1}番目は${nameArr[index]}です。`);
// // }

// // const nameArr2 = nameArr.map((name)=>{
// //   return name;
// // })
// // console.log(nameArr2);

// // nameArr.map((name, index)=>console.log(`${index+ 1}番目は${nameArr[index]}です。`));

// // const numArr = [1, 2, 3, 4, 5];
// // const newNumArr = numArr.filter((num)=>{
// //   return num % 2 === 1;
// // });
// // console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "河本") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件？条件がtrueの時　: 条件がfalseの時
// const val1 = 1 > 0 ? `trueです`　: `faleseです`;
// console.log(val1);

// const num = 1300;
// // console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : `数値を入力してください`;
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1+ num2 > 100 ? `100を超えています！`　: `許容範囲内です`;
// }
// console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味を知ろう && //
 */

// const flag1 = true;
// const fkag2 = false;

// if (flag1 || fkag2) {
//   console.log("1か2はtrueになります");
// }
//  if(flag1 && fkag2) {
//   console.log("1も2もtrueになります");
// }
// ||は左側が　falseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

//&& は左側　がtrueなら右側う返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
