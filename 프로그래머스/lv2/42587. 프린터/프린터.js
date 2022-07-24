class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    enqueue(value) {
        const node = new Node(value);
        
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }
    
    dequeue() {
        const value = this.head.value;
        
        this.head = this.head.next;

        return value;
    }
    
    peek() {
        return this.head.value;
    }
}

function solution(priorities, location) {
    const queue = new Queue();
    let count = 0;
    
    for(let i = 0; i < priorities.length; i++) {
        const data = [priorities[i], i];
        queue.enqueue(data);
    }
    
    priorities.sort((a, b) => b - a);
    
    while(true) {
        const currentValue = queue.peek();
        if (currentValue[0] < priorities[count]) {
            queue.enqueue(queue.dequeue());
        } else {
            const value = queue.dequeue();
            count++;
            if (location === value[1]) return count;
        }
    }
    
    return count;
    
}