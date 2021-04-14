import axios from "axios";

const API_URL = "http://localhost:8082/api/users/";

class EventService {
    getEvent(type){
        return axios.get(API_URL + `/events?eventType=${type}`, {
          });
    }
}
export default new EventService();
