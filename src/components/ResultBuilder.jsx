import React from "react"

const ResultBuilder = ({ results, addResult, updateResult, removeResult }) => {
    const handResultChange = (resultIndex, field, value) => {
        const updatedResults = [...results]
        const updatedResult = {
            ...updatedResults[resultsIndex],
            [field]: value
        }
        updatedResults[resultIndex] = updatedResult
        updateRsult(resultIndex, updatedResults[resultIndex])
    }

  return (
    <div>
      {results.map((result, index) => (
        <div key={index} style={{ marginBottom: "1em" }}>
          <h5>Result {index + 1}</h5>
          <input
            type="text"
            value={result.name}
            onChange={(e) =>
              updateResult(index, { ...result, name: e.target.value })
            }
            placeholder="Result name (e.g., Jogging)"
          />
          <textarea
            value={result.description}
            onChange={(e) =>
              updateResult(index, { ...result, description: e.target.value })
            }
            placeholder="Result description"
          />
          <input
            type="text"
            value={result.img || ""}
            onChange={(e) =>
              updateResult(index, { ...result, img: e.target.value })
            }
            placeholder="Image URL (optional)"
          />
        </div>
      ))}
      <button onClick={() => addResult()}>Add New Result</button>
      <button onClick={() => removeResult(resultIndex)}>Remove Result</button>
    </div>
  )
}

export default ResultBuilder