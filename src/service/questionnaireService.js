import axios from 'axios'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/questionares`

const index = async () => {
    try {
        const res = await axios.get(BASE_URL)
        return res.data
    } catch (err) {
        console.error(err)
    }
}

const getCurrent = async (questionaresId) => {
    try {
        const res = await axios.get(`${BASE_URL}/${questionaresId}`)
        return res.data
    } catch (err) {
        console.error(err)
    }
}

const updateQuestionnaire = async (questionaresId, formData) => {
    try {
        const res = await axios.put(`${BASE_URL}/${questionaresId}`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return res.data
    } catch (err) {
        console.eror(err)
    }
}

const createQuestionnaire = async (formData) => {
    try {
        const res = await axios.post(BASE_URL, formData)
        return res.data
    } catch (err) {
        console.error(err)
    }
}


const submitAnswers = async (questionaresId, userId, answers) => {
    try {
      const res = await axios.post(`${BASE_URL}/${questionaresId}/submit`, { userId, answers });
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }  

const deleteQuestionnaire = async (questionaresId) => {
    try { 
        const deletedQuestionnaire = await axios.delete(`${BASE_URL}/${questionaresId}`)
    } catch (err) {
        console.error(err)
    }
}


export { 
    index,
    getCurrent,
    submitAnswers,
    updateQuestionnaire,
    createQuestionnaire,
    deleteQuestionnaire
}