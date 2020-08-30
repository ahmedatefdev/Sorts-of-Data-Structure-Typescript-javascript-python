class DoublyLinkedList {
  head: NodeObj;
  tail: NodeObj;
  length: number;
  constructor(value: any) {
    this.head = new NodeObj(null, null, value);
    this.tail = this.head;
    this.length = 1;
  }

  public append(value: any) {
    const newNode = new NodeObj(null, this.tail, value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value: any) {
    const newOne = new NodeObj(this.head, null, value);
    this.head.pervious = newOne;
    this.head = newOne;
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

  public insert(index: number, value: any) {
    if (index >= this.length - 1) this.append(value);
    else if (index <= 0) this.prepend(value);
    else {
      let currentNode: NodeObj = this.traverseToIndex(index - 1);
      currentNode.next = new NodeObj(
        currentNode.next,
        currentNode.pervious,
        value
      );
    }
    this.length++;
    return this;
  }
  public Remove(index) {
    let currentNode: NodeObj = this.traverseToIndex(index - 1);
    currentNode.next = currentNode.next.next;
    currentNode.next.pervious = currentNode;
    this.length--;
    return this;
  }
  private traverseToIndex(index: number) {
    let i = 0;
    
    let currentNode: NodeObj = this.head;
    while (i < index) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }
}
class NodeObj {
  next: NodeObj | null;
  pervious: NodeObj | null;
  value: any;
  constructor(next: NodeObj | null, pervious: NodeObj | null, value: any) {
    this.next = next;
    this.pervious = pervious;
    this.value = value;
  }
}
let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
console.log(myLinkedList.append(16));
console.log(myLinkedList.prepend(55));
console.log(myLinkedList.printList());
myLinkedList.insert(1, 963);
console.log(myLinkedList.printList());
myLinkedList.insert(0, 5555);
myLinkedList.insert(2, 222222222);
myLinkedList.insert(3, 22);
console.log(myLinkedList.printList());
myLinkedList.Remove(3);
myLinkedList.prepend(3223);
console.log(myLinkedList.printList());
