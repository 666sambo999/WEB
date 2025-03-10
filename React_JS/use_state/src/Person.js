import { useState } from "react";


function Persone()
{
    let[persone, setPersone] = useState
    (
        {
            firstName:"Walter",
            lastName:"White"
        }
    )
    function rename()
    {
        setPersone({firstName:"Mister", lastName:persone.lastName})
    }
    return(
        <div>
            <p>{persone.firstName} {persone.lastName}</p>
            <button onClick={rename}>Rename</button>
        </div>
    )
}

export default Persone;