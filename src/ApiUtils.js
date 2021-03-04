import request from 'superagent'

//Declare variable for backend URL
const URL = 'http://localhost:3000'

//Function for signing up the user
export async function signUpUser(email, password) {
    const response = await request.post(`${URL}/auth/signup`)
        .send({ email, password })
    return response.body;
}

//Function for logging in the user
export async function loginUser(email, password) {
    const response = await request.post(`${URL}/auth/signin`)
        .send({ email, password })
    return response.body;
}

//Function for getting search
export async function getSearch(location) {
    const response = await request.get(`${URL}/api/search?location=${location}`)
    return response.body.businesses;

}

//Function for getting favorites
export async function getFavorites(token) {
    const response = await request.get(`${URL}/api/favorites`)
        .set('Authorization', token)
    return response;
}

//Function for adding favorites
export async function addFavorite(restaurant, token) {
    const response = await request.post(`${URL}/api/favorites`)
        .set('Authorization', token)
        .send(restaurant)
    return response.body;
}

//Function for deleting favorites
export async function deleteFavorite(token, restaurant) {
    const response = await request.delete(`${URL}/api/favorites/:id`)
        .set('Authorization', token)
    return response.body;
}
