// 3단부터 5단까지
/* row+= 대입연산자 */
/* 안에 let선언하면 계속 초기값 반복함 */

for (let row = 1; row <= 9; row++) {
  let ouput = "";
  for (let col = 3; col <= 5; col++) {
    output = `${col}*${row}=${col * row}\t`;
  }
  console.log(output);
}

/*
 *    // row: 1, col:1
 **   //row:2, col:2
 ***
 ****
 *****  //row:5, col:5
 */

for (row = 1; row <= 5; row++) {
  let output = "";
  for (let col = 1; col <= 5; col++) {
    if (row === 3) {
      output += `🍏`;
    } else {
      output += `🍔`;
    }
    output += `${col}`;
  }
  console.log(output);
}
