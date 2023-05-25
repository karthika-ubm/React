import React, { useState } from 'react'


function BasicForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [allUsers, setAllUsers] = useState([]);

    const onSubmission = (e) => {
        e.preventDefault()
        if (email && password) {
            const newUser = { id: new Date().getTime().toString(), email, password }
            setAllUsers([...allUsers, newUser])
            setEmail("");
            setPassword("")
        }
        else {
            alert('Please enter your email and password')
        }
    }


    return (
        <div>
            <h1>Make a Form of your choice!!!!!!</h1>
            <br></br>
            <form onSubmit={onSubmission}>
                <label>Email id</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off"></input>
                <br></br>
                <br></br>
                <label>Password</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off"></input>
                <br></br>
                <br></br>
                <button type='submit' >Submit</button>

            </form>
            <br /><br /><br />
            <div>
                {
                    allUsers.map((curEle) => {
                        console.log(allUsers)
                        const { id, email, password } = curEle
                        return (
                            <div key={id}>
                                <p>{`Your id is ${id}`}</p>
                                <p>{`Your email is ${email}`}</p>
                                <p>{`Your password is ${password}`}</p>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BasicForm