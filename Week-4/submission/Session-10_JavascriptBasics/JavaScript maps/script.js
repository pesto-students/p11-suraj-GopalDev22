function calcWordFrequencies() {
  // Read input from user
  const input = prompt("Enter a list of words separated by spaces:");

  // Split the input into an array of words
  const words = input.split(" ");

  // Initialize an object to store the frequencies
  const freq = {};

  // Loop through the words and count their frequencies
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (freq[word]) {
      freq[word]++;
    } else {
      freq[word] = 1;
    }
  }
  // Output the frequencies to the console
  for (let word in freq) {
    console.log(`${word} ${freq[word]}`);
  }
}
calcWordFrequencies();
