//Magic string
const USER = 'USER'

//Function for setting user to local storage
export function setUserToLocalStorage(user) {
    localStorage.setItem(USER, JSON.stringify(user))
}

//Function to get user from local storage
export function getUserFromLocalStorage() {
    const user = localStorage.getItem(USER)
    if (user && user.token) return JSON.parse(user);
    return {}
}