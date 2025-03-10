import { useState } from "react";
import './Modal.css'

function Modal()
{
    let [open, setOpen] = useState(false);
    let image = "https://avatars.mds.yandex.net/i?id=42fd38ddafb00ee4551a6953d599102ab2bf1eec-4310964-images-thumbs&n=13"

    return(
        <div>
            <img src={image} className="small" onClick={()=> setOpen(true)}
            alt ="Картинка" style={{display: open ? "none" : "block"}}/>

            {
                open && (
                    <div>
                        <div>
                            <img src={image}
                            alt =""
                            className="big"
                            onClick={()=> setOpen(false)}/>
                        </div>
                    </div>
                )
            }
                
        
        </div>
    )

}



export default Modal;