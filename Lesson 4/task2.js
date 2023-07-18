function square(number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Math.pow(number, 2));
      }, 3000);
    });
}

async function testSquare(number, number2) {
    const result = await square(number);
    const result2 = await square(number2);

    console.log(result + result2);
}
  
testSquare(3, 4);
  