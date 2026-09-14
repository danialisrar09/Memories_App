import * as api from "../api";

// Action Creators
const getPosts = () => async (disptach) => {
    try {
        const {data} = await api.fetchPosts();

        disptach({ type: 'FETCH_ALL', payload: []});
    } catch (error) {
        console.log(error.message);
    }


    

}