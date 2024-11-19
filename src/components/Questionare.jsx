const Questionare = () => {
  const questionnaire = props.questionnaireList.map((questionnaire) => (
    <a key={questionnaire._id} ></a>
  ))

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
          </div>
        </>
      </div>
    );
  };
  
  export default Questionare;