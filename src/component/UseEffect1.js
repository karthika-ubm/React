import React from 'react'
import { useEffect, useState } from 'react'

function UseEffect1() {
    const [countInc, setCountInc] = useState(0);

    const [screenWidth, setScreenWidth] = useState(window.screen.width)



    useEffect(() => {
        document.title = countInc === 0 ? 'Chats' : `Chats(${countInc})`

        console.log('I am using useEffect inside')
    }, [countInc]);


    return (
        <div>
            <h1>{countInc}</h1>
            <button onClick={() => { setCountInc(countInc + 1); }}>Click Me</button>


            <h1>show me the width of the screen:</h1>
            <div>{screenWidth}</div>

        </div>
    )
}

export default UseEffect1;