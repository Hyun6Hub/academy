export function fruitsTower(floor, emoji) {
  for (let row = 1; row <= floor; row++) {
    let output = "";
    for (let col = 1; col <= row; col++) {
      output += emoji;
    }
    console.log(output);
  }
}

export function drawOrange() {
  // 7층 오렌지탑
  for (let row = 1; row <= 7; row++) {
    let output = "";
    for (let col = 1; col <= row; col++) {
      output += `🍊`;
    }
    console.log(output);
  }
}

export function drawApple() {
  // 5층 사과탑
  for (let row = 1; row <= 5; row++) {
    let output = "";
    for (let col = 1; col <= row; col++) {
      output += `🍎`;
    }
    console.log(output);
  }
}

export function selectGugudan(start, end) {
  for (let row = 1; row <= 9; row++) {
    let output = ``;
    for (let col = start; col <= end; col++) {
      output += `${col} * ${row} = ${row * col}\t`;
    }
    console.log(output);
  }
}

export function gugudan() {
  for (let row = 1; row <= 9; row++) {
    let output = ``;
    for (let col = 1; col <= 9; col++) {
      output += `${col} * ${row} = ${row * col}\t`;
    }
    console.log(output);
  }
}
