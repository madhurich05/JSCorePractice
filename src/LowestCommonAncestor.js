Lowest Common Ancestor

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    if(!root) return null;
    
    const left = lowestCommonAncestor(root.left, p, q),
          right = lowestCommonAncestor(root.right, p,q);
    
    if ((left && right) || (root.val === p.val) || (root.val === q.val)) return root;
        
    return left ?? right;
    return null;        
    
};
