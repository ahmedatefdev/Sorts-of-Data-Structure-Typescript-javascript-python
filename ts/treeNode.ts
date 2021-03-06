class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isBalanced(root: TreeNode | null): boolean {
  const hight = (treeNode: TreeNode | null): number => {
    return treeNode == null
      ? 0
      : 1 + Math.max(hight(treeNode.right), hight(treeNode.left));
  };
  //   if (root === undefined || root === null) return true;
  const lh = hight(root.left)!;
  const rh = hight(root.right)!;
  console.log(lh, "...", rh);
  return (
    Math.abs(lh - rh) <= 1 && isBalanced(root.left) && isBalanced(root.right)
  );
}
// function hight(treeNode: TreeNode | null): number {
//   if (treeNode === null) return 0;
//   return 1 + Math.max(hight(treeNode.right), hight(treeNode.left));
// }
[3, null, null, 3, 4, null, null, 4];
const tree2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3, new TreeNode(4, null, null), null), null),
  new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, null)))
);

const tree = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(3, null, new TreeNode(3, null, null)),
    new TreeNode(
      3,
      null,
      new TreeNode(
        3,
        null,
        new TreeNode(
          3,
          new TreeNode(
            3,
            null,
            new TreeNode(
              3,
              new TreeNode(3, null, new TreeNode(3, null, null)),
              new TreeNode(
                3,
                null,
                new TreeNode(
                  3,
                  null,
                  new TreeNode(
                    3,
                    null,
                    new TreeNode(
                      3,
                      new TreeNode(3, null, new TreeNode(3, null, null)),
                      new TreeNode(3, null, new TreeNode(3, null, null))
                    )
                  )
                )
              )
            )
          ),
          new TreeNode(3, null, null)
        )
      )
    )
  ),
  new TreeNode(3, null, new TreeNode(3, null, new TreeNode(3, null, null)))
);

// console.log(tree);
console.log(isBalanced(tree2));
