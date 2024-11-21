import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_BACK_END_SERVER_URL;

const index = async () => {
        try {
         const InterestCatRes = await axios.get(`${BACKEND_URL}/categories`)
      return InterestCatRes.data
        } catch (error) {
         console.error(error)
        }
}

export { 
    index
  };