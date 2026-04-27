function Code() {
  function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
      result += number;
    }
    return result;
  }
  let output = sum(1, 2, 3, 4);
  console.log(output);
}

export default Code;
/*function Code() {
  function sum(...numbers) {
    let result = 0;

    for (let number of numbers) {
      result += number;
    }

    return result;
  }

  const output = sum(1, 2, 3, 4);
  console.log(output);
}

export default Code;*/
