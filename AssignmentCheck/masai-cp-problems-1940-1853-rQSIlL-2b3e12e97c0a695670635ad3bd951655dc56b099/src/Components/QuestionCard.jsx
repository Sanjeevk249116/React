import { useState } from "react";
import Option from "./Option";

const QuestionCard = ({el,setScore}) => {
  const[isOptionSelected,setIsOptionSelected]=useState(false);
  const[showAns,setShowAns]=useState(false);
const{question,correctOptionIndex,options}=el;

const ShowData=()=>{
  if(showAns){
    setShowAns(false)
  }
  else{
    setShowAns(true)
  }
}
  return (
    <div className="question-card">
      {/* add question here */}
      <h3>{question}</h3>
      <div className="options">
        {options.map((el)=>{
          return <Option el={el}/>
        })}
      </div>
      <div className="show-ans">
        <button onClick={ShowData}>
     {showAns?"Hide Ans":"Show Ans"}

        </button>
        {showAns?(<p>
          {options[el.correctOptionIndex]}
        </p>):null}
      </div>
    </div>
  );
};

export default QuestionCard;
