import http from "../http-common";

class UserDataService {
    getUser(data) {
        console.log("&&&&&&&&&&&&&&&&&&");
        let config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            auth: {
                username: "root",
                password: "123"
            }
        };
        let x = JSON.stringify(data);
        console.log("&&& " + x);
        return http.post("user/login", JSON.stringify(data), config);
    }


    saveUser(data) {
        // let config = {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     auth: {
        //         username: "root",
        //         password: "123"
        //     }
        // };
        console.log("email: " + data.email + " password: " + data.password
            + " userType: " + data.userType);
        return http.post("user/register", data);
    }
}

export default new UserDataService();
