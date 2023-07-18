function test() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Test after 3 seconds");
    }, 3000);
  });
}

async function testAsync() {
  const result = await test();
  console.log(result);
}

testAsync();
