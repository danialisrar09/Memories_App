import * as api from "../api";

// Action Creators
export const getPosts = () => async (disptach) => {
    try {
        const {data} = await api.fetchPosts();

        disptach({ type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}