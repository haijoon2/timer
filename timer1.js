// Beep didn't work, so I printed .

const args = process.argv.slice(2);

for (const arg of args) {
  const second = parseInt(arg);
  if (!isNaN(second) && second > 0) {
    setTimeout(() => {
      console.log('.');
    }, second * 1000);
  }
}