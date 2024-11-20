// import axios from 'axios'

// const BACKEND_URL = import.meta.env.VITE_BACK_END_SERVER_URL;

// const getUser = () => {
//     const token = localStorage.getItem('token');
//     if (!token) return null;

//     const user = JSON.parse(atob(token.split('.')[1]));
//     return user;
// }

// const updateUser = async (formData, trackId) => {
//     try {
//       const res = await axios.put(`${BASE_URL}/${trackId}`, formData);
//       return res.data
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   export {
//     getUser,
//     updateUser
// }