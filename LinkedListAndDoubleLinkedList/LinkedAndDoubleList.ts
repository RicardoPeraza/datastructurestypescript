//linked list
//10-->5-->16

/*
let myLinkedList={
  head:{
    value:10,
    next:{
      value:5,
      next:{
        value:16,
        next:null
      }
    }
  }
}*/
//single linked list

class Node {
  value: any;
  next: any;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: { value: any; next: any };
  tail: { value: any; next: any };
  length: number;
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    //check params
    if (index === 0) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    //check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    //check param
    const leader = this.traverseToIndex(index - 1);
    const unWantedNode = leader.next;
    leader.next = unWantedNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

/*//double linked list
class Node {
  value: any;
  next: any;
  prev: any;
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  head: { value: any; next: any; prev: any };
  tail: { value: any; next: any };
  length: number;
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    //check params
    if (index === 0) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    //check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    //check param
    const leader = this.traverseToIndex(index - 1);
    const unWantedNode = leader.next;
    leader.next = unWantedNode.next;

    this.length--;
    return this.printList();
  }
}
*/
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);

myLinkedList.prepend(1);

myLinkedList.insert(0, 99);

myLinkedList.reverse();

console.log(myLinkedList.printList());
//console.log(myLinkedList)
