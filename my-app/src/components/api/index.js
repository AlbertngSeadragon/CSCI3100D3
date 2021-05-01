import axios from 'axios'
import authHeader from '../../services/auth-header';

const api = axios.create({
    baseURL: 'http://localhost:8082/api/events',
})
const baseURL = 'http://localhost:8082/api/events';

//send to backend event details given by payload for insertion
export const insertEvent = payload => axios.post(baseURL + "/", payload, {headers: authHeader()});
//send request to backend to get all events
export const getAllEvents = () => api.get(`/`);
//send request to backend to get trending events
export const getTrending = () => api.get(`/trending`);
//send to backend event id and new payload for event modification
export const updateEventById = (id, payload) => api.put(`/event/${id}`, payload)
//send to backend event id to delete
export const deleteEventById = id => api.delete(`/event/${id}`)
//send request with id to backend to get event with that id
export const getEventById = id => api.get(`/${id}`)
//send request with id to backend to join event with that id
export const joinEvent = id => api.put(`/${id}/join`, {}, {headers: authHeader()});
//send request with id to backend to get user with that id
export const getUserById = id => api.get(`/${id}`)
//send request with type to backend to get event with that type
export const getEvents = type => api.get(`/?eventType=${type}`);


const apis = {
    insertEvent,
    getAllEvents,
    updateEventById,
    deleteEventById,
    getEventById,
    getTrending,
    joinEvent,
    getUserById,
    getEvents,
}

export default apis