import './progress.css';

function Progress({percent})
{
    const getColor =()=>
    {
        let color="";
        if(percent<40) color= "#FF0000"
        else if (percent<70) color = "#FFFF00"
        else return color = "#00FF00"
        return color;
    }
    return(
        <div className="progress-bar">
            <div className="progress-bar-fill" style={{width:`${percent}%`, background: getColor()}}></div>
        </div>
    )
}

export default Progress;