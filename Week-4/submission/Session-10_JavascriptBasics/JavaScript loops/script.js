function drawTriangle(height) {
  for (let i = 1; i <= height; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "*";
    }
    console.log(line);
  }
}
drawTriangle(4);
