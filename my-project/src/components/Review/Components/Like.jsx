import React from 'react';


const Likecount = () => {
    let counter = 5;
    return function () {
        return counter ++;
    }
}

let likecount = Likecount ();
export default likecount