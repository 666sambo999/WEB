import {useState} from 'react'

function Item()
{
    let [item, setItem] = useState([]);

    function addItem()
    {
        setItem
        (
            [
                ...item,
                {
                    id: item.length,
                    value: Math.floor(Math.random()*100)+1
                }
            ]
        )
    }
    
    return(
        <div>
            <button onClick={addItem}>Add value</button>
            {
                item.map(
                    i=>
                        (
                            <div key={i.id} style={{background:(i.id %2 ===0) ? "lightgreen" : "lightblue"}}>
                                {i.value}</div>
                        )
                )
            }
        </div>
    )
}

export default Item;