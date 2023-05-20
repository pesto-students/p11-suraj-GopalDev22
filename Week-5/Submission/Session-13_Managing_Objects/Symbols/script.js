const generateTransactionId = (() => {
  let counter = 1;

  return () => {
    const symbolDescription = `TRANSACTION_ID_${counter}`;
    const transactionId = Symbol(symbolDescription);
    counter++;
    return transactionId;
  };
})();

// Example usage:
const transaction1 = generateTransactionId();
console.log(transaction1); // Symbol(TRANSACTION_ID_1)

const transaction2 = generateTransactionId();
console.log(transaction2); // Symbol(TRANSACTION_ID_2)

const transaction3 = generateTransactionId();
console.log(transaction3); // Symbol(TRANSACTION_ID_3)
