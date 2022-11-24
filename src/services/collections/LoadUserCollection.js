import axios from "axios";

let url;
if (process.env.Node_env !== 'production') {
    url = process.env.REACT_APP_DEVELOPMENT_URL;
}

class LoadUserCollection {
    authenticateUser = async (data) => {
        const header = {
            body: data
        }
        const result = await axios.get(`${url}/api/login`, header)
        console.log("RESULT=====", result)

        return result;
    }

}

export default new LoadUserCollection();