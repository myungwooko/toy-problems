/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
 * Stack Class
 */
var Stack = function () {
  this.stack = {};
  this.size = 0;

  // add an item to the top of the stack
  this.push = function () {
    this.stack[this.size++] = arguments[0]; //---> size++ ---> *It means key start from zero
  };

  // remove an item from the top of the stack
  this.pop = function () {
    if (this.size > 0) {
      var popVal = this.stack[--this.size]
      delete this.stack[this.size];
      return popVal
    }
  };

  // return the number of items in the stack
  this.sizeFunc = function () {
    return this.size;
  };
};

/**
 * Queue Class
 */
var Queue = function () {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function () {
    // TODO: implement `enqueue`
    inbox.push(arguments[0])
    // return `${arguments[0]} was pushed to the Queue`
  };

  // called to remove an item from the `queue`
  this.dequeue = function () {
    // TODO: implement `dequeue`
    var size = inbox.sizeFunc();
    for (var i = 0; i < size; i++) {
      outbox.push(inbox.pop())
    }
    var dequeVal = outbox.pop()
    console.log('outbox.size is: ', outbox.size)
    for (var i = 0; i < outbox.size; i++) {
      console.log('pop', outbox.pop())
      // inbox.push(outbox.pop())
    }
    return dequeVal;
  };

  // should return the number of items in the queue
  this.size = function () {
    // TODO: implement `size`
    return inbox.sizeFunc()
  };
};