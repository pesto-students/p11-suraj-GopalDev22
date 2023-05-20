function* stringToSymbolIterator(strings) {
  for (const string of strings) {
    yield Symbol(string);
  }
}

// Example usage:
const strings = ["hello", "world", "test"];
const iterator = stringToSymbolIterator(strings);

for (const symbol of iterator) {
  console.log(symbol); // Symbol(hello), Symbol(world), Symbol(test)
}
