import React from 'react'

const Matching = (props) => {
    if ((props.x === props.y) && (props.y === props.z)) {
        return (
            <>
                <h1> {props.x} {props.y} {props.z}</h1>
                <h3> All Slots are Matching </h3>
            </>
        )
    }
    else {
        return (
            <>
                <h1> {props.x} {props.y} {props.z}</h1>
                <h3> All Slots are not  Matching</h3>
            </>
        )
    }
}

const Slot = () => {
    return (
        <>
            <h1> 😃 Slot Machine game 😃</h1><br /><br />
            <Matching x='😁' y='😁' z='😁' /><br /><br />
            <Matching x='✈️' y='😁' z='😁' /><br /><br />
            <Matching x='💖' y='💖' z='💖' /><br /><br />
            <Matching x='👽' y='😁' z='👽' /><br /><br />
            <Matching x='😍' y='😍' z='😍' /><br /><br />
            <Matching x='kar' y='kar' z='mar' /><br /><br />
            <Matching x='kar' y='kar' z='kar' /><br /><br />


        </>

    )
}

export default Slot