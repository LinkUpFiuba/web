//WIP
const baseUrl = 'http://localhost:5000'

export const loadComplaints = () => {
    return fetch(baseUrl + '/complaints')
        .then(handleErrors)
        .then(res => res.json());
};

function handleErrors(response) {
    if (!response.ok) {
        if (response.status === 404) {
            throw { status: response.status, message: response.message };
        }
        throw Error(response.status);
    }
    return response;
}