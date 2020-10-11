import axios from "axios";

class TodoDataService {
    retrieveAllTodos(name) {
        return axios.get(`http://localhost:8080/users/${name}/todos`)
        // console.log('executed service')
    }
    // executeHelloWorldPathVariableService(name) {
    //     return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
    //     // console.log('executed service')
    // }
}
export default new TodoDataService()