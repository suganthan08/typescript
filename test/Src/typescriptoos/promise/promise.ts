const delay = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Wait 2 seconds completed!");
  }, 2000);
});

delay.then(msg => console.log(msg));
