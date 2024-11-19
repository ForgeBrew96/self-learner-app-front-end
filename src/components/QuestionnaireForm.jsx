import React, { useState } from 'react'
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
        const { name, value } = <evt classNam</evt>
    }

    return (
        <div></div>
    )
}