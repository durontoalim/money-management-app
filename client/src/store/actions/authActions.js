import Axios from 'axios'
import jwtDecode from 'jwt-decode'
import * as Types from './types'
import setAuthToken from '../../utils/setAuthToken'


export const register = (user,history) => dispatch =>{
    Axios.post('/api/users/register', user)
        .then((res) => {
            dispatch({
                type: Types.USERS_ERROR,
                payload: {
                    error: {}
                }
            })
            console.log(res)
            
            history.push('/login');
        })
        .catch(error => {
            dispatch({
                type: Types.USERS_ERROR,
                payload: {
                    error: error.res.data
                }
            })
        })
}

export const login = (user,history) =>dispatch =>{
    Axios.post('/api/users/login', user)
        .then(res => {
            let token = res.data.token
            localStorage.setItem('auth_token',token)
            setAuthToken(token)
            
            let decode = jwtDecode(token)
            
            dispatch({
                type:Types.SET_USER,
                payload: {
                    user: decode
                }
            })

            //decode our taken
            //save our token to local strorage
            //set Auth Header
            //Dispatch SET User
        })
        .catch(error => {
            console.log(error.res.data);
            dispatch({
                type: Types.USERS_ERROR,
                payload: {
                    error: error.response.data
                }
            })
        })
}

export const logout = history =>{
    localStorage.removeItem('auth_token')
    history.push('/login')
    return{
        type: Types.SET_USER,
        payload:{
            user:{}
        }
    }
}