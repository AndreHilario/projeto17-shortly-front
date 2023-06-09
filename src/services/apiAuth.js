import axios from "axios";

export const port = process.env.REACT_APP_API_URL;

function signup(form) {

    const promise = axios.post(`${port}/signup`, form);
    return promise;
};

function login(form) {

    const promise = axios.post(`${port}/signin`, form);
    return promise;
};

function getConfig(token) {
    return {
        headers: { Authorization: `Bearer ${token}` }
    };
};

function getUrlsUser(token) {

    const config = getConfig(token);
    const response = axios.get(`${port}/users/me`, config);

    return response;

};

function postShortenUrl(token, form) {

    const config = getConfig(token);
    const promise = axios.post(`${port}/urls/shorten`, form, config);

    return promise;
}

function getRankingUser(token) {

    const config = getConfig(token);
    const response = axios.get(`${port}/ranking`, config);

    return response;

}

function getRanking() {

    const response = axios.get(`${port}/ranking`);

    return response;
}

function deleteUrls(token, id) {

    const config = getConfig(token);
    const response = axios.delete(`${port}/urls/${id}`, config);

    return response;
}

function openUrl(shortUrl) {

    const response = axios.get(`${port}/urls/open/${shortUrl}`);

    return response;
}
const apiAuth = { signup, login, getUrlsUser, postShortenUrl, getRankingUser, getRanking, deleteUrls, openUrl };
export default apiAuth;