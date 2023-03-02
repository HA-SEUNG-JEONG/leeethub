var MyStack = function () {
  this.s1 = [];
  this.s2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.s1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.s1.length > 1) {
    this.s2.push(this.s1.shift());
  }
  const element = this.s1.shift();
  [this.s1, this.s2] = [this.s2, this.s1];
  return element;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  while (this.s1.length > 1) {
    this.s2.push(this.s1.shift());
  }
  const element = this.s1[0];
  this.s2.push(this.s1.shift());
  [this.s1, this.s2] = [this.s2, this.s1]; // swap names of queues
  return element;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.s1.length === 0 && this.s2.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
