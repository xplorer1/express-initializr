
let token = "token"//You'd have to determine how you want to handle this.

class HttpService {
    constructor() {}

    unAuthPost = async (url, payload, formdata, method) => {

        let header = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };

        try {
            let response = await fetch(url, {
                method: method || "POST", 
                body: formdata ? payload : JSON.stringify(payload),
                headers: formdata ? {} : header
            });

            let result = await response.json();
            return result;

        } catch (error) {
            console.log("error: ", error);
            return error;
        }
    }

    unAuthGet = async (url) => {

        try {
            let response = await fetch(url, {
                method: "GET",
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });

            let result = await response.json();
            return result;

        } catch (error) {
            return error;
        }
    }

    authGet = async (url, method) => {

        try {
            let response = await fetch(url, {
                method: method || "GET",
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
            });
            
            let result = await response.json();
            return result;

        } catch (error) {
            return error;
        }
    }

    authPost = async (url, payload, formdata, method) => {

        let headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        };

        try {
            const response = await fetch(url, {
                method: method || "POST",
                body: formdata ? payload : JSON.stringify(payload),
                credentials: 'include',
                headers: formdata ? {"Authorization": `Bearer ${token}`} : headers
            });
            if (response.status === 401) {
                return response;
            }
            else {
                return response.json();
            }
            //const result = undefined;
            return response;
        } catch (error) {
            return error;
        }
    }
}

export default HttpService;

//"proxy": "http://20.42.119.47:8282",