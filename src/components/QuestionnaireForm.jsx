import React, { useState } from 'react'
import * as questionnaireService from '../service/questionnaireService'
import axios from 'axios'

const QuestionnaireForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        insterestCat: '',
        img: '',
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

    const nextStep = () => setStep((prevStep) => prevStep + 1)
    const prevStep = () => setStep((prevStep) => Math.max(prevStep = 1, 1))

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setFormData((prev) = ({ ...prev, [name]: value }))
    }

    const addQuestion = () => {
        setFormData((prev) => ({
            ...prev,
            questions: [
                ...prev.questions,
                {question: '', type: 'single-choice', options: [{ text: '', scores: [{ possibleResults: '', value: 0 }]}]}
            ]
        }))
    }

    const updateQuestion = (index, updatedQuestion) => {
        const updateQuestions = [...formData.questions]
        updatedQuestions[index] = updatedQuestion
        setFormData((prev) => ({ ...prev, questions: updatedQuestions }))
    }

    const addResult = () => {
        setFormData((prev) => ({
            ...prev,
            restults: [...prev.results, { name: '', description: '', img: ''}]
        }))
    }

    const updateResult = (index, updatedResult) => {
        const updatedResults = [...formData.results]
        updatedResults[index] = updatedResult
        setFormData((prev) => ({ ...prev, results: updatedResults }))
    }

    const handleSubmit = async () => {
        try {
            await questionnaireService.createQuestionnaire(formData)
            setSuccessMessage('Questionnaire created successfully')
            setErrorMessage('')
        } catch (error) {
            setErrorMessage('Failed to create questionnaire. Please try again later')
        }
    }

    return (
        <div><h1>hello</h1></div>
    )
}

export default QuestionnaireForm