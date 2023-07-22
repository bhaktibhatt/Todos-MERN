import axios from 'axios';
const API_URL = 'http://localhost:8000';

//? below is API                    use below middleware
export const addNewTodo = (data) =>async(dispatch) => {
    try {
        const res = await axios.post(`$(API_URL)/todos`, { data } )
        dispatch()
    }
    catch (error) {
        console.log('Error while calling addNewTodo API', error.message);
    }
}