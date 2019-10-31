class Promise {
  constructor(fn) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;

    const resolve = value => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
      }
    };

    const reject = value => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = value;
      }
    };

    try {
      fn(resolve, reject);
    } catch {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    switch (this.state) {
      case "fulfilled":
        onFulfilled(this.value);
        break;
      case "rejected":
        onRejected(this.reason);
        break;
      default:
    }
  }
}
