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

const createQuestionnaire = async (formData) => {
    try {
        console.log(formData)
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

export { 
    index,
    getCurrent,
    createQuestionnaire,
    submitAnswers
}