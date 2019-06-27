// import axios from '../../axios.config';

export  const authService = {
    login: async (username, password) => {
        // axios.defaults.baseURL = 'https://192.168.30.250:9082';

        // const response1 = axios.get('itim/restlogin/login.jsp');
        // const response2 = axios.post('itim/j_security_check', {
        //     j_username: 'itim manager',
        //     j_password: 'Welcome123',
        // }, {
        //         headers: {
        //             'Content-type': 'application/x-www-form-urlencoded'
        //         },
        //         withCredentials: true,
        //     });

        // const response3 = axios.get('itim/rest/systemusers/me', {
        //     withCredentials: true
        // });

        // tslint:disable-next-line
        // console.log(response3);

        if (username === 'user@gmail.com' && password === 'user') {
            return {
                identity: {
                    first_name: 'User',
                    last_name: '',
                    user_id: 'user',
                    email: 'user@dummy.com'
                },
                token: 'dummyToken',
                privileges: 'user',
            };
        }
        throw Error('Invalid Login');
    }
};
