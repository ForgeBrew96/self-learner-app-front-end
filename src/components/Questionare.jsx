import React from "react";

const Questionnaire = (props) => {
  

    return (
      <div className="quiz-app">
        <h2>Questionare</h2>
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question 0/3</span>
            </div>
            <div className="question-text">
              <span>Question?</span>
            </div>
            <div className="answers">
              <ul>
                <li>Answer 1</li>
                <li>Answer 2</li>
              </ul>
            </div>
          </div>
        </>
      </div>
    );
  };
  
  export default Questionnaire;