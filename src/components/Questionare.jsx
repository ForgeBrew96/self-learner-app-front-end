import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import * as questionnaireService from '../service/questionnaireService'

const Questionnaire = ({ user }) => {
  const [questionnaireList, setQuestionnaireList] = useState([]);

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

  const questionnaires = questionnaireList.map((questionnaire) => (
    <li key={questionnaire._id}>
      <h3>
        <Link to={`/questionnaire/${questionnaire._id}`}>{questionnaire.title}</Link>
      </h3>
      <h4>By {questionnaire.description}</h4>
    </li>
  ));

  return (
    <div className="quiz-app">
      <h2>Questionnaire</h2>
      <div className="question-section">
        <ul>{questionnaires}</ul>
      </div>
    </div>
  );
};

export default Questionnaire;
