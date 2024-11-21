import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as questionnaireService from '../service/questionnaireService';

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

  return (
    <div>
      <h1>{questionnaire.title}</h1>
      <p>{questionnaire.description}</p>
      {questionnaire.questions.map((question) => (
        <div key={question._id}>
          <p>{question.question}</p>
          {question.options.map((option, index) => (
            <label key={option.text} htmlFor={`${question._id}-${index}`}>
              <input
                type="radio"
                name={`${question._id}-${index}`}
                value={option.text}
                onChange={() => handleAnswerChange(question._id, option.text)}
              />
              {option.text}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {result && (
        <div>
          <h2>Result</h2>
          <p>{result.description}</p>
          <img src={result.img} alt={result.name} />
        </div>
      )}
    </div>
  );
};

export default QuestionnaireDetail;
