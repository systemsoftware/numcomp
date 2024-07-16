const readline = require('readline');

const e = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

e.question('What are you comparing? (this is superficial, all inputs must be numbers): ', (comp) => {
if(!comp) comp = 'Numbers'
function askForNums(array, remaining) {
  console.clear();
  if (remaining === 0) {
    e.close();
    // find largest Num
    let largest = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i];
      }
    }
    // find smallest Num
    let smallest = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < smallest) {
        smallest = array[i];
      }
    }
    // find average Num
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    const average = sum / array.length;
    // print results
    console.log(`Largest: ${largest}`);
    console.log(`Smallest: ${smallest}`);
    console.log(`Average: ${average}`);
  } else {
    e.question(`${comp} #${array.length + 1}: `, (len) => {
      array.push(parseInt(len));
      askForNums(array, remaining - 1);
    });
  }
}

e.question(`How many ${comp.toLowerCase()}s do you want to compare? `, (a) => {
  const ans = parseInt(a);
  const Nums = [];

  if (!isNaN(ans) && ans >= 0) {
    askForNums(Nums, ans);
  } else {
    console.error('Please enter a valid number.');
    e.close();
  }
});
})