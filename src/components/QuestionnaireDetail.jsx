import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as questionnaireService from '../service/questionnaireService';
import './Questionnaire.css'

const QuestionnaireDetail = ({ user }) => {
  const { id } = useParams();
  const [questionnaire, setQuestionnaire] = useState(null);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchQuestionnaire = async () => {
      try {
        const data = await questionnaireService.getCurrent(id);
        setQuestionnaire(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestionnaire();
  }, [id]);

  const handleAnswerChange = (questionId, value) => {
    setAnswers({
      ...answers,
      [questionId]: value,
    });
  };

  const handleSubmit = async () => {
    try {
        const response = await questionnaireService.submitAnswers(id, user._id, answers);
        setResult(response.finalResult);
    } catch (error) {
      console.log(error);
    }
  };

  if (!questionnaire) return <div>Loading...</div>;

  // return (
  //   <div className="shared-container">
  //     <h1>{questionnaire.title}</h1>
  //     <p>{questionnaire.description}</p>
  //     {questionnaire.questions.map((question) => (
  //       <div key={question._id} className="question-container">
  //         <p className="question-text">{question.question}</p>
  //         <div className="radio-container">
  //         {question.options.map((option, index) => (
  //           <label key={option.text} htmlFor={`${question._id}-${index}`} className="answer-option">
  //             <input
  //               type="radio"
  //               name={`${question._id}-${index}`}
  //               value={option.text}
  //               onChange={() => handleAnswerChange(question._id, option.text)}
  //               className="radio-input"
  //             />
  //             {option.text}
  //           </label>
  //         ))}
  //         </div>
  //       </div>
  //     ))}
  //     <button onClick={handleSubmit}>Submit</button>
  //     {result && (
  //       <div className="result-container">
  //         <h2>Result</h2>
  //         <p>{result.description}</p>
  //         <img src={result.img} alt={result.name} />
  //       </div>
  //     )}
  //   </div>
  

  return (
    <div className="shared-container">
      <h1 className="quiz-title">{questionnaire.title}</h1>
      <p className="quiz-summary">{questionnaire.description}</p>
      {questionnaire.questions.map((question) => (
        <div key={question._id} className="question-container">
          <p className="question-text">{question.question}</p>
          <div className="answer-container">
            {question.options.map((option) => (
              <button
                key={option.text}
                onClick={() => handleAnswerChange(question._id, option.text)}
                className={`answer-option ${answers[question._id] === option.text ? 'selected' : ''}`}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {result && (
        <div className="result-container">
          <h2>Result</h2>
          <p>{result.description}</p>
          <img src={result.img} alt={result.name} />
        </div>
      )}
    </div>

  )
}

export default QuestionnaireDetail;
