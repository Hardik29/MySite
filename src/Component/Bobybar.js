import React, { useState } from 'react'
import HeaderBar from './Body_Component/HeaderBar'
import TableBar from './Body_Component/TableBar'
import Tablebar2 from './Component2/Tablebar2'
function Bobybar() {
    const [state, setstate] = useState(true)
    const clickhandle = () => {
        setstate(!state)
    } 
    return (
        <div className="">
            <HeaderBar/>
           {state ? <TableBar clickhandle={clickhandle}/> : <Tablebar2 clickhandle={clickhandle}/> }
           
        </div>
    )
}

export default Bobybar
