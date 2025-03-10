import {useState} from 'react';

function Counter()
{
    let [cnt, setCnt] = useState(0);
    let decrement =() => setCnt(cnt-1);
    let increnent =() => setCnt(cnt +1);

    return(
        <div>
            <h2>{cnt}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increnent}>+</button>
        </div>
    );
}

export default Counter;