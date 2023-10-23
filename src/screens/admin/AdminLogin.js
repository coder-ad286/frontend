import React, { useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import useLogin from '../../hooks/useLogin'
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { getToken } from '../../utils/storage';
const AdminLogin = () => {
  const { input, error, loading, inputHandler, clearHandler, submitHandler } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      if (user){
        if ((user.uid === getToken())) {
          navigate('/admin/panel');
        }
      }
    })
  }, [navigate]);

  return (
    <main>
      <section className='bg-black py-5 px-5 h-screen'>
        <div className='container text-black mx-auto'>
          <div className='flex justify-center'>
            <form className=' bg-white flex flex-col p-5 rounded-lg'>
              <div>
                <h1 className='text-center text-[#f0008c] border-b-2 border-black border-opacity-10 pb-2 font-Poppins font-bold text-2xl'>Login</h1>
              </div>
              <div className='w-full mt-7 flex flex-col '>
                <div className='my-4 px-3  flex border-b-2'>
                  <input name="username" value={input.username} onChange={inputHandler} className='group focus:outline-none px-1 font-bold font-mono' type="text" placeholder='Username' />
                  <button className={`${input.username.length > 0 ? 'opacity-100' : 'opacity-0'}`} onClick={(e) => {
                    e.preventDefault();
                    clearHandler('username');
                  }}>
                    <AiOutlineClose size={18} className='opacity-50' />
                  </button>
                </div>
                {error.username && <p className='w-3/4 ml-4 text-ellipsis text-red-500  text-sm'>{error.username}</p>}
                <div className='my-4 px-3  flex  border-b-2 '>
                  <input name="password" value={input.password} onChange={inputHandler} className=' focus:outline-none px-1 font-bold font-mono' type="Password" placeholder='Password' />
                  <button className={`${input.password.length > 0 ? 'opacity-100' : 'opacity-0'}`} onClick={(e) => {
                    e.preventDefault();
                    clearHandler('password');
                  }}>
                    <AiOutlineClose size={18} className='opacity-50' />
                  </button>
                </div>
                {error.password && <p className='w-3/4 ml-4 text-ellipsis text-red-500 text-sm'>{error.password}</p>}
                <div className='my-4 px-3  flex     border-b-2'>
                  <input name="accesskey" value={input.accesskey} onChange={inputHandler} className='group focus:outline-none px-1 font-bold font-mono' type="text" placeholder='AccessKey' />
                  <button className={`${input.accesskey.length > 0 ? 'opacity-100' : 'opacity-0'}`} onClick={(e) => {
                    e.preventDefault();
                    clearHandler('accesskey');
                  }}>
                    <AiOutlineClose size={18} className='opacity-50' />
                  </button>
                </div>
                {error.accesskey && <p className='w-3/4 ml-4 text-ellipsis text-red-500 text-sm'>{error.accesskey}</p>}
              </div>
              {error.custom && <p className='ml-4 text-red-500 text-sm'>{error.custom}</p>}
              <div className='flex justify-end m-3'>
                <button onClick={submitHandler} className='bg-black text-white font-Poppins px-3 py-1 rounded-lg font-bold shadow-lg mr-5'>
                  {loading ? 'Loading...' : 'Enter'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AdminLogin