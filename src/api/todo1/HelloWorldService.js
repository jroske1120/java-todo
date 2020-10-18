import axios from "axios";

class HelloWorldService {
    executeHelloWorldService() {
        return axios.get('http://localhost:8080/hello-world')
        // console.log('executed service')
    }
    executeHelloWorldPathVariableService(name) {
        let username = 'joel'
        let password = 'joel'
        
        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`,
        {headers : {
            authorization: basicAuthHeader
        }}
        )
        // console.log('executed service')
    }
    
}
export default new HelloWorldService()