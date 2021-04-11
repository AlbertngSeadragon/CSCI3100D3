import axios from 'axios'
import authHeader from '../../services/auth-header';
import authService from '../../services/authService';
const api = axios.create({
    baseURL: 'http://localhost:8082/api/events',
})

export const insertEvent = payload => api.post(`/`, payload, {headers: authHeader()});
export const getAllEvents = () => api.get(`/events`)
export const updateEventById = (id, payload) => api.put(`/event/${id}`, payload)
export const deleteEventById = id => api.delete(`/event/${id}`)
export const getEventById = id => api.get(`/event/${id}`)

const apis = {
    insertEvent,
    getAllEvents,
    updateEventById,
    deleteEventById,
    getEventById,
}

export default apis