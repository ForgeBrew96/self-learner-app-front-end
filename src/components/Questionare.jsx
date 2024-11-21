import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import * as questionnaireService from '../service/questionnaireService'

const Questionnaire = ({ user }) => {
  const [questionnaireList, setQuestionnaireList] = useState([])
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchQuestionnaire = async () => {
      try {
        const questionnaires = await questionnaireService.index();

        if (questionnaires.error) {
          throw new Error(questionnaires.error);
        }
        
        setQuestionnaireList(questionnaires);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestionnaire();
  }, []);

  const editQuiz = (key) => {
    navigate(`${key}`)
  }

  const quesionnaires = questionnaireList.map((quesionnaire) =>
    <li key={quesionnaire._id}>
      <h3>{quesionnaire.name}</h3>
      <h4>By {quesionnaire.description}</h4>
      <button onClick={() => handleTakeQuestionnaire(quesionnaire)}>Take Quiz!</button>
      <button><Link to={`/questionnaire-form/${quesionnaire._id}`}>Edit Quiz</Link></button>
    </li>
  );

    return (
      <div className="quiz-app">
        <h2>Questionare</h2>
          <div className="question-section">
            <ul>{quesionnaires}</ul>
            </div>
      </div>
    );
  };
  
  export default Questionnaire;