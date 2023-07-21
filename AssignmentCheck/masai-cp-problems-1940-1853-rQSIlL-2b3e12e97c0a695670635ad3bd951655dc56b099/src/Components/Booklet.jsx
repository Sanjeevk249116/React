import { useState } from "react";
import QuestionCard from "./QuestionCard";

const Booklet = () => {

  const[question,setQuestion]=useState([]);
  const[score,setScore]=useState(0);

  const handleExam=async()=>{
      let result =await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz`);
      let data1=await result.json();
      // console.log(data1.data)
      setQuestion(data1.data);
      setScore(0)
  }
  console.log(question);

  return (
    <div data-testid="Booklet">
      {/* create a div with className="welcome-div" here*/}
     

      {
        question.length===0?(<div className="welcome-div">
        <h1>To begin the exam, click on the 'Start Exam' button below</h1>
        <button onClick={handleExam}>Start Exam</button>
      </div>):(null)
      }

       {question.length ?(<div className="questions-container">
              {/* Append score and question card components here */}
            
            <button onClick={()=>(setQuestion([]))}>End Exam</button>
            <h3>Score: {score}</h3>
            {question.map((el)=>{
              return <QuestionCard el={el} setScore={setScore}/>
                 })}
           </div>)
           :(null)}
      
      
    </div>
  );
};

export default Booklet;
