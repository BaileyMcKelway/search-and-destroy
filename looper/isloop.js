'use strict';

//Complete this algo

const isLoop = (linkedlist, arr = []) => {
    /// create an array to store values of the node.
    /// check value of the node, calling by node.value.
    /// check if array includes node's value
    // console.log(linkedlist.head.next)
    let Node = linkedlist
    console.log(Node)
    if (arr.includes(Node.value)){
     return false;
    } else if (!Node.next && !arr.includes(Node.value)){
        return true;
    } else {
        arr.push(Node.value);
        return isLoop(Node.next);
    }
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
