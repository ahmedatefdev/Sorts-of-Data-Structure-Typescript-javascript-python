class TreeNode {
  left: TreeNode | null;
  right: TreeNode | null;
  value: number;
  constructor(value: number) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  root: TreeNode;
  constructor() {
    this.root = null;
  }
  insert(value: number) {
    if (this.root === null) this.root = new TreeNode(value);
    else {
      // loop to fined the parent with null in the desire value
      // if value small go left if high gor right
      // insert the value to the parent
      let currentNode = this.root;
      let parent: TreeNode = null;
      while (currentNode !== null) {
        parent = currentNode;
        if (currentNode.value > value) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
      if (parent.value > value) {
        parent.left = new TreeNode(value);
      } else {
        parent.right = new TreeNode(value);
      }
      return this;
    }
  }
  lookup(value: any) {
    let currentNode = this.root;
    while (currentNode !== null)
      if (currentNode.value === value) return currentNode;
      else if (currentNode.value > value) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    return undefined;
  }
  // remove
  remove(value: number) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode: TreeNode = null;
    while (currentNode !== null)
      if (currentNode.value === value) {
        if (currentNode.right === null) {
          if (parentNode === null) this.root = currentNode.left;
          else {
            if (currentNode.value < parentNode.value)
              parentNode.left = currentNode.left;
            else if (currentNode.value > parentNode.value)
              parentNode.right = currentNode.left;
          }
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            if (currentNode.value < parentNode.value)
              parentNode.left = currentNode.right;
            else if (currentNode.value > parentNode.value)
              parentNode.right = currentNode.right;
          }
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      } else if (currentNode.value > value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(JSON.stringify(traverse(tree.root)));
// console.log(JSON.stringify(traverse(tree.lookup(20))));
console.log(tree.remove(9));
console.log(JSON.stringify(traverse(tree.lookup(15)), null, 2));

//     9
//  4     20
//1  6  15  170

function traverse(node: TreeNode) {
  const tree: TreeNode = { value: node.value, left: null, right: null };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
// currentNode =
// currentNode.right === null ? currentNode.left : currentNode.right;
// while (currentNode !== null) {
// if (currentNode.left !== null) {
//   currentNode = currentNode.left;
// }
// }
// if (currentNode.value > value) {
// let temp = parent;
// parent.left = currentNode;
// } else {
// parent.right = currentNode;
// }
// return this;
