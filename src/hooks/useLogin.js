import { useState } from 'react'
import validate from '../utils/validate'
import { useNavigate } from 'react-router-dom'
import useAuth from './useAuth'

const useLogin = () => {
     const {signin} = useAuth();

     const initialInput = {
          username: '',
          password: '',
          accesskey:''
     }
     const initialError = {
          username: null,
          password: null,
          accesskey: null,
          custom: null
     }

     const [input, setInput] = useState(initialInput);
     const [error, setError] = useState(initialError);
     const [loading,setLoading]= useState(false);
     const navigate = useNavigate();

     const inputHandler = (e) => {
          const { name, value } = e.target;
          setInput({
               ...input,
               [name]: value
          })
     }

     const clearHandler =(fieldName)=>{
          setInput({
               ...input,
               [fieldName]: ''
          })
     }

     const submitHandler =async (e) => {
          e.preventDefault();
          const isError = validate(input);

          if (isError) {
               setError(isError);
               return;
          }
          setLoading(true);
          const hasError =await signin(input,setError);
          setLoading(false)
          if (hasError) {
               return;
          }
          setInput(initialInput);
          navigate('/admin/panel');
     }
     return { input, error,loading, inputHandler,clearHandler, submitHandler }
}

export default useLogin