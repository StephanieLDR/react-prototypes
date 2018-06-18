import React from 'react';
import ReactDOM from 'react-dom';


var userObj = {
    name: "Stephanie",
    luckyNumber: luckyNumber(),
};

ReactDOM.render(
    greeting(userObj),
    document.getElementById('root')
);

function luckyNumber() {
    return Math.floor(Math.random() * 1000);
}

function greeting(userObj) {
   return <div>
            <h1>Hello {userObj.name} </h1>
            <h2 className="text-muted"> Your lucky number is {userObj.luckyNumber}</h2>
         </div>
}

