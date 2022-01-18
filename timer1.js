let count = 0;
let num = 1;
let input = process.argv.slice(2);


if (input.length === 0 || input < 0 || isNaN(input)) {
  return `${process.stdout.write('\007 \007 \007') }` + console.log(` Beep Boop - Please type a valid number`);
}

// console.log(input);
const timer = () => {
  
  setInterval(() => {
    process.stdout.write('\r' + num++);
  }, count += 1000);

  

  for (let i = 0; i < input.length; i++) {
    
    if (input[i] < 1000) {
      input[i] = input[i] * 1000;
    }

    if (input[i] >= 0) {
      setTimeout(() => {
        process.stdout.write('\007');
      }, input[i]);
    }
  }
};

timer(input);