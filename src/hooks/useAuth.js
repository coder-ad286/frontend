import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth} from '../firebase/config'
import {setToken} from '../utils/storage'
import { getErrorMessage } from '../utils/error';


const useAuth = () => {
    const signin = async(authData,setError) => {
        const { username, password } = authData;
        let hasError = false;
        await signInWithEmailAndPassword(auth, username, password)
        .then((res) => {
            setError({
                username: null,
                password: null,
                custom: null
            })
            const user = res.user;
           
            //SET AUTHENICATION VIA SET TOKEN IN LOCAL STORAGE
            setToken(user.uid);
        })
        .catch((error) => {
            console.dir(error.code);
            hasError=true;
            const errorMessage = getErrorMessage(error.code);
            setError({
                custom: errorMessage
            });
        })
        return hasError;
    }


    return {
        signin
    }
}

export default useAuth