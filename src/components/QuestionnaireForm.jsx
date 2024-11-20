import React, { useState } from 'react'
import * as questionnaireService from '../service/questionnaireService'
import QuestionBuilder from './QuestionBuilder'
import ResultBuilder from './ResultBuilder'
import axios from 'axios'

const QuestionnaireForm = ({ user }) => {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        interestCat: '',
        img: '',
        approved: true,
        createdBy: user._id,
        questions: [
            {question: '', 
                type: 'single-choice', 
                options:[{ 
                    text: '', 
                    scores: [{
                        possibleResult: '',
                        value: 0
                    }]
                }]}
        ],
        results: [{
            name: '',
            description: '',
            img:''
        }]
    })

    const nextStep = () => setStep((prevStep) => (prevStep < 4 ? prevStep + 1 : prevStep))
    const prevStep = () => setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep))


    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    const addQuestion = () => {
        setFormData((formData) => ({
            questions: [
                ...formData.questions,
                {question: '', type: 'single-choice', options: [{ text: '', scores: [{ possibleResults: '', value: 0 }]}]}
            ]
        }))
    }
      
    const removeQuestion = (index) => {
        console.log(index)
        setFormData((formData) => ({
            ...formData,
            questions: [
              ...formData.questions.slice(0, index),
              ...formData.questions.slice(index + 1)
            ]
        }))
    }

    const addResult = () => {
        setFormData((formData) => ({
                ...formData,
                results: [...formData.results, {name: '', description: '', img: ''}]
        }))
    }

    const removeResult = (index) => {
        console.log(index)
        console.log(formData)
        setFormData((prevFormData) => ({
            ...prevFormData,
            results: [
                ...prevFormData.results.slice(0, index),
                ...prevFormData.results.slice(index + 1)
            ]
        }))
    }

    const updateQuestion = (index, updatedQuestion) => {
        const updatedQuestions = [...formData.questions]
        updatedQuestions[index] = updatedQuestion
        setFormData((prevState) => ({ ...prevState, questions: updatedQuestions }))
    }

    const updateResult = (index, updatedResult) => {
        const updatedResults = [...formData.results]
        updatedResults[index] = updatedResult
        setFormData((prevState) => ({ ...prevState, results: updatedResults }))
    }

    const handleSubmit = async () => {
        try {
            await questionnaireService.createQuestionnaire(formData)
            alert('Questionnaire created successfully!')
        } catch (error) {
            alert('Failed to create questionnaire. Please try again later')
        }
    }

    const steps = {
        1: (
            <div>
                <h3>General Info</h3>
                <input 
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                />
                <input 
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                />
                <input 
                    name="img"
                    value={formData.img}
                    onChange={handleChange}
                    placeholder="Img URL (optional)"
                />
            </div>
        ),
        2: (
            <div>
                <h3>Categories</h3>
                <select
                    name="interestCat"
                    value={formData.interestCat}
                    onChange={handleChange}
                >
                    <option value="" disabled>
                    Select a category
                    </option>
                    <option value="fitness">Fitness</option>
                    <option value="video_games">Video Games</option>
                    <option value="tabletop_games">Tabletop Games</option>
                    <option value="music">Music</option>
                </select>
            </div>
        ),
        3: (
            <div>
                <h3>Results</h3>
                <ResultBuilder
                    results={formData.results}
                    addResult={addResult}
                    updateResult={updateResult}
                    removeResult={removeResult}
                />
            </div>
        ),
        4: (
            <div>
                <h3>Questions</h3>
                <QuestionBuilder
                    questions={formData.questions}
                    addQuestion={addQuestion}
                    updateQuestion={updateQuestion}
                    removeQuestion={removeQuestion}
                />
            </div>
        )
    }

    return (
       <div>
        <h1>New Questionnaire</h1>
        {steps[step]}
        <button type='prev' onClick={prevStep}>Previous</button>
        <button type='submit' onClick={handleSubmit}>Submit</button>
        <button type='next' onClick={nextStep}>Next</button>
       </div>
    )
}

export default QuestionnaireForm