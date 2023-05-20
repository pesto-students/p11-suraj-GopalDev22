class CustomPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.error = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach((callback) => callback(value));
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.error = reason;
        this.onRejectedCallbacks.forEach((callback) => callback(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    const promise = new CustomPromise((resolve, reject) => {
      const handleFulfilled = (value) => {
        try {
          const result = onFulfilled ? onFulfilled(value) : value;
          if (result instanceof CustomPromise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      };

      const handleRejected = (reason) => {
        try {
          const result = onRejected ? onRejected(reason) : undefined;
          if (result instanceof CustomPromise) {
            result.then(resolve, reject);
          } else {
            reject(reason);
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === "fulfilled") {
        setTimeout(() => handleFulfilled(this.value), 0);
      } else if (this.state === "rejected") {
        setTimeout(() => handleRejected(this.error), 0);
      } else {
        this.onFulfilledCallbacks.push(handleFulfilled);
        this.onRejectedCallbacks.push(handleRejected);
      }
    });

    return promise;
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  static resolve(value) {
    return new CustomPromise((resolve) => {
      resolve(value);
    });
  }

  static reject(reason) {
    return new CustomPromise((resolve, reject) => {
      reject(reason);
    });
  }
}

const myPromise1 = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

myPromise1
  .then((result) => {
    console.log(result); // Output: Success!
  })
  .catch((error) => {
    console.error(error);
  });

const myPromise2 = new CustomPromise((resolve, reject) => {
  reject("Error!");
});

myPromise2.catch((error) => {
  console.error(error); // Output: Error!
});
