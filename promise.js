// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// console.log('d');



const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function printSequence() {
  console.log('a');
  console.log('b');

  await delay(3000);
  console.log('c');

  await delay(0);
  console.log('d');

  console.log('e');
} 

printSequence();
