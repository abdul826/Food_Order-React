import React from 'react'
import ReactDOM from 'react-dom';
import {add,sub,mult,div} from './Calc';

var currentDate = new Date();
var currTime = currentDate.getHours();
var getTimming = '';

if (currTime > 1 && currTime < 12) {
    getTimming = "Good Morning";
} else if (currTime > 12 && currTime < 18) {
    getTimming = "Good Evening";
} else if (currTime > 18 && currTime < 24) {
    getTimming = "Good Night";
}

function List() {
    // return <h1>Hello Abdul Rahman,{getTimming}</h1>
    return (
        <ol>
            <li>the sum of two no. is {add(5,5)}</li>
            <li>the subtraction of two no. is {sub(5,5)}</li>
            <li>the multiplication of two no. is {mult(5,5)}</li>
            <li>the division of two no. is {div(10,5)}</li>
        </ol>
    )


}

export default List;