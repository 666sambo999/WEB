import Progress from './progress/progress';
import './quitz.css'

function Quitz({quistion, onClickVariant, quistions, step})
{
    const percent = Math.round(step/(quistions.length-1)*100)
    return(
        <div className="content">
            <h3>{quistion.title}</h3>
            <ul>
                {
                    quistion.variants.map(
                        (text, index)=><li key={index} 
                        onClick={()=> onClickVariant(index)}>
                        {text} </li>
                    )
                }
            </ul>
            <Progress percent = {percent}/>
        </div>
    )
}

export default Quitz;