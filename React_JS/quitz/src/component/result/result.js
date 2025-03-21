import './result.css';
function Result(corrent, questions)
{
    return(
        <div>
            <p className="test">Вы ответили правильно на {corrent} вопросов из {questions}.</p>
            <p className="test">Количество неправильных вопросов: {questions-corrent}</p>
            <a href="/" className="btn"> Попробывать еще раз</a>
        </div>
    )
}

export default Result;