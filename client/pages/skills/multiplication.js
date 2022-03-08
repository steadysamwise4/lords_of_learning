import React, { useState } from 'react';
function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>
  }

export default function Multiplication() {
  const multProblemsArr = [];
  const formArr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const formArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const fillMultProblemsArr = function (formArr1, formArr2) {
    for (let i = 0; i < formArr1.length; i++) {
      for (let j = 0; j < formArr2.length; j++) {
        const fact = formArr1[i] + " X " + formArr2[j] + " =";
        const solution = formArr1[i] * formArr2[j];
        const problemObj = { fact: fact, solution: solution };
        multProblemsArr.push(problemObj);
      }
    }
  };

  fillMultProblemsArr(formArr1, formArr2);
  
  let newProblem = multProblemsArr[Math.floor(Math.random() * 110)];
  
  const benefits = ["Ready yourself for battle!"];

  const [correct, setCorrect] = useState(0);
  const [problem, setProblem] = useState(newProblem);
  const [response, setResponse] = useState("");

  const handleChange = (event) => {
      setResponse(event.target.value);
  };

  const responseInputRef = React.useRef(null);
  React.useEffect(()=>{
    responseInputRef.current.focus();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    let responseNum = Number(response);

    if (responseNum === problem.solution) {
        setCorrect(correct + 1);
    }
    setProblem(multProblemsArr[Math.floor(Math.random() * 110)])
    setResponse("");
    
  }

  return (
    <div>
      <Header title="Try your hand at Multiplication?" />
      <ul>
        {benefits.map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>
      <h2>{problem.fact}</h2>
      <form onSubmit={handleFormSubmit}>
      <input type='number' required id='response' value={response} onChange={handleChange} ref={responseInputRef}></input>

      <button type="submit">Enter</button>
      </form>
      <h6>Correct: {correct}</h6>
    </div>
  );
}