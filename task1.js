const {stdin, stdout} = process;

stdin.on('readable', () => {
  const data = stdin.read().toString();
  const reversedData = data.split('').reverse().join('');

  stdout.write(`${reversedData}\n\n\n`);
});
