class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    // Add a new node at the end of the list
    push(val){
        const newNode = new Node(val); 
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    
    // Remove the node at the end of the list
    pop(){
        if(this.head === null){
            return undefined;
        }
        let poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    
    // Remove the node from the beginning of the list
    shift(){
        if(this.length === 0){
            return undefined;
        }
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    
    // Add a node to the beginning of the list
    unshift(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    
    // Access a node in the list by its position
    get(index){
        if(index < 0 || index >= this.length){
            return null;
        }
        let middle = this.length / 2;
        if(index <= middle){
            let current = this.head;
            for(let count = 0; count < index; count++){
                current = current.next;
            }
            return current;
        }
        if(index > middle){
            let current = this.tail;
            for(let count = this.length - 1; count > index; count--){
                current = current.prev;
            }
            return current;
        }
    }
    
    // Update the value of a node in the list by its poisition
    set(val, index){
        let foundNode = this.get(index);
        if(foundNode !== null){
            foundNode.val = val;
            return true;
        }
        else{
            return false;
        }
    }
    
    // Add a new node in the list by a certain position
    insert(val, index){
        if(index < 0 || index >= this.length){
            return false;
        }
        if(index === 0){
            return !!this.unshift(val);
        }
        // after the tail
        if(index === this.length){
            return !!this.push(val);
        }
        let newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;
        
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
    
    // Remove a node in the list by a certain position
    remove(index){
        if(index < 0 || index >= this.length){
            return undefined;
        }
        if(index === 0){
            return this.shift();
        }
        if(index === this.length - 1){
            return this.pop();
        }
        let removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}

let list = new DoublyLinkedList();
console.log(list);