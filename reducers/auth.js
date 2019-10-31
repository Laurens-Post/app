export const SIGNUP = 'SIGNUP';

export const signup = (email, password) => {
    return async dispatch => {
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyCOXA4C068PSxz0r3IpJ4bzC3ekFq89ekY');
        {
            method: 'POST',
                headers: {
                'Content-Type': 'application/json'
        },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            })
        }
        dispatch({ type: SIGNUP})
    }
}