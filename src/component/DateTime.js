import React from 'react'

const DateTime = () => {
    const currentdate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    return (
        <>
            <h1>current date = {currentdate} </h1>
            <h1>current Time = {currentTime} </h1>
            <a href='https://www.thapatechnical.com/2021/07/react-js-1702-in-one-video-by-thapa.html' target='_blank'>

                <img src='https://picsum.photos/400' />
            </a>
        </>
    )
}

export default DateTime