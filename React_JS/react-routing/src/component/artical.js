import { useState } from "react";
import Article from "./articale";

function Articals()
{
    let[artical, setArtical] = useState(
        [
            {name: "Component", title:"Компоненты фналогичные функции"},
            {name: "Props", title:"Обеспечивают передачу параметров в компоненты"},
            {name: "State", title:"Описыает внутренее состояние компонента"}
        ]
    );
    return(
        <div>
            <h2>Artical</h2>
            {
                artical.map(
                    (item, index)=><Article key={index} name={item.name} title={item.title}/>       
                )
            }
        </div>
    )
}
export default Articals;