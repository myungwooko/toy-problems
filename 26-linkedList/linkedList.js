/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';

var LinkedList = function() {
  //fill me in!
  this.tail = null;
  this.head = null;
  this.values = [];
};

//write methods here!

LinkedList.prototype.addToTail = function(value) {
  var node = this.makeNode(value);
  if (this.head === null && this.tail === null) {
    this.head = this.tail = node;
  } else if (this.values.length === 1) {
    this.head.next = node;
    this.tail = node;
  } else {
    this.tail = node;
  }
};

LinkedList.prototype.removeHead = function() {
  this.head = this.head.next;
  return this.values.shift();
};

LinkedList.prototype.contains = function(value) {
  if (this.values.indexOf(value) !== -1) {
    return true;
  } else {
    return false;
  }
};

LinkedList.prototype.makeNode = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  this.values.push(value);
  return node;
};

var list = new LinkedList();
var a = list.tail; //yields 'null'
console.log(a);
var b = list.addToTail(4);
var c = list.addToTail(5);
var d = list.head.value; //yields '4';
console.log(d);
var e = list.contains(5); //yields 'true';
console.log(e);
var f = list.contains(6); //yields 'false';
console.log(f);
var g = list.removeHead(); //yields '4'
console.log(g);
var h = list.tail.value; //yields '5';
console.log(h);
