import React from 'react'

const Greetings = () => {
    const hour = new Date().getHours();
    let greeting = ' ';
    const cssStyle = {};

    if (hour >= 1 && hour < 12) {
        greeting = 'Good Morning!!!!!';
        cssStyle.color = 'green';
    } else if (hour > 12 && hour < 19) {
        greeting = 'Good Afternoon!!!!!';
        cssStyle.color = 'red';
    }
    else {
        greeting = ' Good Night';
        cssStyle.color = 'blue';
    }
    return (
        <div><h1> Hellooo, <span style={cssStyle}> {greeting}</span> </h1></div>
    )
}

export default Greetings