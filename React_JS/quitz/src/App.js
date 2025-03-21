import {useState} from 'react'
import './App.css';
import Quitz from './component/quitz';
import Result from './component/result/result';
const quistions = 
[
  {
    title: "Что такое переменная?",
    variants: ["Место на диске",
      "Часть процессора", "Именнованая область памяти"],
      correct: 2
  },
  {
    title: "Что такое if?",
    variants: ["Оператор",
      "Часть Функции", "Управляющая структура"],
      correct: 2
  },
  {
    title: "Что такое память?",
    variants: ["Место на диске",
      "Часть диска", "Указатель на место"],
      correct: 0
  },
  {
    title: "Что такое указатель?",
    variants: ["Знак на дороге",
      "Часть ПК", "Переменная, которая содержит адрес"],
      correct: 2
  }
]

function App() {
  const[step, setStep]=useState(0);
  const quistion = quistions[step];
  const[correct, setCorrect]= useState(0)

  const onClickVariant = (variant) =>
  {
    if(step < quistions.length-1) setStep(step+1);
    if(variant === quistion.correct)
    {
      setCorrect(correct+1);
    }
  }
  
  return (
    <div className="main">
      {
        step !== questions  ? 
        <Quitz quistion= {quistion} onClickVariant={onClickVariant}
        quistions={quistions} step={step}/>: <Result correct ={correct} quistions={quistions}/>
      }
    </div>
  );
}

export default App;
