import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '027bfafe-8474-4d75-8987-c79cec6ed1de'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, usersSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${usersSize}`)
            .then(response => {
                return response.data;
            });
    },
    delFollow(id = 1) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    setFollow(id = 1) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    setUserProfile(userId = 1) {
        console.warn('Obsolete method. Please use profileAPI object ');
        return profileAPI.setUserProfile(userId);
            // .then(response => {
            //     return response.data;
            // });
    }
}

export const profileAPI = {
    setUserProfile(userId = 1) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId = 1) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status});
    },
}

export const authAPI = {
    setAuthMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}
