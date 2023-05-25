import React, { useState } from 'react'
// import DateTime from '../DateTime'


function OnclickStateChange() {
    //1.  ---------------- toggle data using useState ----------------------


    // const [name, setName] = useState('karthika');
    // const change = () => {
    //     name === 'karthika' ? setName('karthika bhaskar') : setName('karthika')

    // }

    //     return (
    //          <div>
    //                 <div Style="color:crimson ,
    //                 font-family:cursive;">The Bhaskar Family</div>
    //                 <div>{name}</div>
    //                 <button onClick={() => change()}>Change</button>
    //             </div>
    // )





    // 2. ---------------display list of array and clear one by one or remove all data at once (to do list)-----------

    const data = [{ id: 1, fname: 'abc' }, { id: 2, fname: 'dfg' }, { id: 3, fname: 'ewreqa' }]
    const [data1, setdata1] = useState(data)

    const clearAll = () => {
        setdata1([]);
    }

    const clearOneData = (id) => {
        const myNewData = data1.filter((ele) => {
            return ele.id !== id
        })
        setdata1(myNewData)
    }

    const styles = {
        textG: {
            border: '2px solid black',
            margin: '2rem',
            display: 'flex',
            borderRadius: '1rem',
            backgroundColor: 'rgba(255, 255,0, 0.2)',
            width: '50vw'


        },
        remove: {
            border: '2px solid red',
            margin: '2rem',
            display: 'flex',
            borderRadius: '1rem',
            backgroundColor: 'rgba(47, 25,0, 0.2)',
            padding: '0.5rem'
        }

    }
    return (
        <div>
            {data1.map((d) => {
                return (
                    <div style={styles.textG} >
                        <h1>{`My id is ${d.id} and name is ${d.fname}`}</h1>
                        <span style={styles.remove} onClick={() => clearOneData(d.id)}>*remove</span>
                    </div>
                )
            })
            }
            <div>
                <button onClick={() => clearAll()}>Clear</button>
            </div>
        </div>
    )






    // 3. ------------------Short circuit evaluation--(REACT)-------------
    // const [data, setdata] = useState(1)

    // return (
    //     <>
    //         {/* if result is true it will return karthika else nothing */}
    //         <h1>{data && "Karthika"}</h1>

    //         {/* if result is true data is returned , if false bhaskar is returned */}
    //         <h2>{data || 'Bhaskar'}</h2>

    //         {/* components can also be redendered using && operator  */}
    //         {/* <h2>{data > 0 && (<DateTime />)}</h2> */}

    //     </>
    // )




}

export default OnclickStateChange