class BrowserHistory {
  constructor(homepage) {
    this.backHistoryStack = [homepage];
    this.forwardHistoryStack = [];
  }

  visit(url) {
    this.backHistoryStack.push(url);

    if (this.forwardHistoryStack.length) {
      this.forwardHistoryStack = [];
    }
  }

  back(steps) {
    const stoppagePoint =
      steps >= this.backHistoryStack.length
        ? this.backHistoryStack.length - 1
        : steps;

    for (let i = 0; i < stoppagePoint; i++) {
      this.forwardHistoryStack.push(this.backHistoryStack.pop());
    }
    return this.getCurrentUrl();
  }

  forward(steps) {
    const stoppagePoint =
      steps > this.forwardHistoryStack.length
        ? this.forwardHistoryStack.length
        : steps;

    for (let i = 0; i < stoppagePoint; i++) {
      this.backHistoryStack.push(this.forwardHistoryStack.pop());
    }
    return this.getCurrentUrl();
  }

  getCurrentUrl() {
    return this.backHistoryStack[this.backHistoryStack.length - 1];
  }
}

const browserHistory = new BrowserHistory("momn.com");
browserHistory.visit("bx.com");
browserHistory.visit("bjyfmln.com");
console.log(browserHistory.back(1));
console.log(browserHistory.forward(3));
browserHistory.visit("pedro.com");
console.log(browserHistory.getCurrentUrl());
console.log(browserHistory.back(1));
console.log(browserHistory);

// console.log(browserHistory.back(7));
// console.log(browserHistory.forward(5), "forward");
// console.log(browserHistory.forward(1), "forward");
// browserHistory.visit("pwrrbnw.com");
// browserHistory.visit("mosohif.com");
// console.log(browserHistory.back(9));
