var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList(value) {
        this.head = new NodeObj(null, null, value);
        this.tail = this.head;
        this.length = 1;
    }
    DoublyLinkedList.prototype.append = function (value) {
        
        var newNode = new NodeObj(null, this.tail, value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    };
    DoublyLinkedList.prototype.prepend = function (value) {
        var newOne = new NodeObj(this.head, null, value);
        this.head.pervious = newOne;
        this.head = newOne;
        this.length++;
        return this;
    };
    DoublyLinkedList.prototype.printList = function () {
        var array = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    };
    DoublyLinkedList.prototype.insert = function (index, value) {
        if (index >= this.length - 1)
            this.append(value);
        else if (index <= 0)
            this.prepend(value);
        else {
            var currentNode = this.traverseToIndex(index - 1);
            currentNode.next = new NodeObj(currentNode.next, currentNode.pervious, value);
        }
        this.length++;
        return this;
    };
    DoublyLinkedList.prototype.Remove = function (index) {
        var currentNode = this.traverseToIndex(index - 1);
        currentNode.next = currentNode.next.next;
        currentNode.next.pervious = currentNode;
        this.length--;
        return this;
    };
    DoublyLinkedList.prototype.traverseToIndex = function (index) {
        var i = 0;
        var currentNode = this.head;
        while (i < index) {
            currentNode = currentNode.next;
            i++;
        }
        return currentNode;
    };
    return DoublyLinkedList;
}());
var NodeObj = /** @class */ (function () {
    function NodeObj(next, pervious, value) {
        this.next = next;
        this.pervious = pervious;
        this.value = value;
    }
    return NodeObj;
}());
var myLinkedList = new DoublyLinkedList(10);
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
