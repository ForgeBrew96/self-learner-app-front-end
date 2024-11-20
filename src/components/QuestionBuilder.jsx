import React from "react" 

const QuestionBuilder = ({ questions, addQuestion, updateQuestion, removeQuestion }) => {
  const handleOptionChange = (questionIndex, optionIndex, field, value) => {
    const updatedQuestions = [...questions] 
    const updatedOption = {
      ...updatedQuestions[questionIndex].options[optionIndex],
      [field]: value,
    } 
    updatedQuestions[questionIndex].options[optionIndex] = updatedOption 
    updateQuestion(questionIndex, updatedQuestions[questionIndex]) 
  } 

  const addOption = (questionIndex) => {
    const updatedQuestions = [...questions] 
    updatedQuestions[questionIndex].options.push({
      text: "",
      scores: [{ possibleResult: "", value: 0 }],
    }) 
    updateQuestion(questionIndex, updatedQuestions[questionIndex]) 
  } 

  const removeOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions] 
    updatedQuestions[questionIndex].options.splice(optionIndex, 1) 
    updateQuestion(questionIndex, updatedQuestions[questionIndex]) 
  } 

  return (
    <div>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} style={{ border: "1px solid #ccc", marginBottom: "16px", padding: "8px" }}>
          <h5>Question {questionIndex + 1}</h5>
          <input
            type="text"
            value={question.question}
            onChange={(e) => updateQuestion(questionIndex, { ...question, question: e.target.value })}
            placeholder="Enter question text"
            style={{ width: "100%", marginBottom: "8px" }}
          />
          <select
            value={question.type}
            onChange={(e) => updateQuestion(questionIndex, { ...question, type: e.target.value })}
          >
            <option value="single-choice">Single Choice</option>
            <option value="multiple-choice">Multiple Choice</option>
          </select>

          <h6>Options</h6>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <input
                type="text"
                value={option.text}
                onChange={(e) => handleOptionChange(questionIndex, optionIndex, "text", e.target.value)}
                placeholder="Option text"
              />
              <input
                type="text"
                value={option.scores[0]?.possibleResult || ""}
                onChange={(e) => {
                  const updatedScores = [...option.scores] 
                  updatedScores[0] = { ...updatedScores[0], possibleResult: e.target.value } 
                  handleOptionChange(questionIndex, optionIndex, "scores", updatedScores) 
                }}
                placeholder="Category"
              />
              <input
                type="number"
                value={option.scores[0]?.value || 0}
                onChange={(e) => {
                  const updatedScores = [...option.scores] 
                  updatedScores[0] = { ...updatedScores[0], value: parseInt(e.target.value, 10) || 0 } 
                  handleOptionChange(questionIndex, optionIndex, "scores", updatedScores) 
                }}
                placeholder="Score"
              />
              <button onClick={() => removeOption(questionIndex, optionIndex)}>Remove Option</button>
            </div>
          ))}
          <button onClick={() => addOption(questionIndex)}>Add Option</button>
          <button onClick={() => removeQuestion(questionIndex)}>Remove Question</button>
        </div>
      ))}
      <button onClick={addQuestion}>Add New Question</button>
    </div>
  ) 
} 

export default QuestionBuilder 
