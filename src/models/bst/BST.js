import Node from './Node.js';

class BST {
    
    constructor() {
        this.root = null;
    }
    //Añadir
    add(song) {
        const newNode = new Node(song);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.song.title < node.song.title) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    //Buscar
    search(title) {
        return this.searchNode(this.root, title);
    }

    searchNode(node, title) {
        if (node === null) {
            return null;
        }
        if (node.song.title === title) {
            return node.song;
        }
        if (title < node.song.title) {
            return this.searchNode(node.left, title);
        } else {
            return this.searchNode(node.right, title);
        }
    }
    //Buscar min
    min() {
        return this.findMinNode(this.root);
    }

    findMinNode(node) {
        if (node.left === null) {
            return node.song;
        } else {
            return this.findMinNode(node.left);
        }
    }
    //Buscar max
    max() {
        return this.findMaxNode(this.root);
    }

    findMaxNode(node) {
        if (node.right === null) {
            return node.song;
        } else {
            return this.findMaxNode(node.right);
        }
    }
    //vizualizar
    inOrder(callback) {
        this.inOrderTraverse(this.root, callback);
    }

    inOrderTraverse(node, callback) {
        if (node !== null) {
            this.inOrderTraverse(node.left, callback);
            callback(node.song);
            this.inOrderTraverse(node.right, callback);
        }
    }
}

export default BST;