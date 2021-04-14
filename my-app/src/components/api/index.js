import axios from 'axios'
import authHeader from '../../services/auth-header';
import authService from '../../services/authService';
const api = axios.create({
    baseURL: 'http://localhost:8082/api/events',
})
const baseURL = 'http://localhost:8082/api/events';

export const insertEvent = payload => axios.post(baseURL + "/", payload, {headers: authHeader()});
export const getAllEvents = () => api.get(`/`);
export const getTrending = () => api.get(`/trending`);
export const updateEventById = (id, payload) => api.put(`/event/${id}`, payload)
export const deleteEventById = id => api.delete(`/event/${id}`)
export const getEventById = id => api.get(`/${id}`)
export const joinEvent = id => api.put(`/${id}/join`, {}, {headers: authHeader()});
export const getUserById = id => api.get(`/${id}`)
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