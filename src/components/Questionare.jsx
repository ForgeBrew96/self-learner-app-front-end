
import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import * as questionnaireService from '../service/questionnaireService'
import './Questionare.css'

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
        console.error(error);
      }
    };
    fetchQuestionnaire();
  }, []);

  const handleDeleteQuestionnaire = async (questionnaire) => {
    const confirmed = window.confirm(`Are you sure you want to delete ${questionnaire.title}? This action cannot be undone!`)
    if (confirmed) {
      try {
        await questionnaireService.deleteQuestionnaire(questionnaire)
        alert('Questionnaire successfully deleted!')
        const updatedList = await questionnaireService.index()
        setQuestionnaireList(updatedList)
      } catch (err) {
        console.err('Error deleting:', err)
        alert('Deletion failed, please try again later.')
      }
    }
  }

  const questionnaires = questionnaireList.map((questionnaire) => (
    <li key={questionnaire._id}>
      <h3>{questionnaire.name}</h3>
      <h4>By {questionnaire.description}</h4>
      <button><Link to={`/questionnaire/${questionnaire._id}`}>{questionnaire.title}</Link></button>
      {questionnaire.createdBy === user._id && (
        <div className='myQuestionnaires'>
          <Link to={`/questionnaire-form/${questionnaire._id}`}><button>Edit Quiz</button></Link>
          <button onClick={()=> handleDeleteQuestionnaire(questionnaire._id)}>Delete Quiz</button>
        </div>
      )}

    </li>
  ));

  return (
    <div className="quiz-app">
      <h2 className="quiz-title">Questionnaire</h2>
      <div className="question-section">
        <ul>{questionnaires}</ul>
      </div>
    </div>
  );
};

export default Questionnaire;
