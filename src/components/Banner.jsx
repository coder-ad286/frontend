import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import logo from '../assets/images/logo.png'
import { useNavigate } from 'react-router-dom';
const Banner = () => {
   const navigate = useNavigate();

    return (
        <header className='sticky'>
            <section className='fixed w-full z-20 top-0 bg-black p-1.5 px-5'>
                <div className='container text-white mx-auto'>
                    <div className='flex justify-between items-center'>
                        <button onClick={()=>{
                            navigate('/');
                        }}>
                            <AiOutlineArrowLeft size={25} fontWeight={20} />
                        </button>
                        <div>
                            <img src={logo} className='w-40' alt="JeeTrendsLogo" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='z-10 bg-[#f0008c] sticky top-0 px-3 p-5 mt-11 border-b-2 border-green-500'>
                 <div className='text-white container mx-auto'>
                    <h1 className='font-MarcellusSC drop-shadow-2xl text-3xl  sm:text-4xl text-center'>Admin Panel</h1>
                    <p className='font-Poppins text-center text-gray-100 text-[12px]'>Manipulate Your Gallary Images.</p>
                 </div>
            </section>
        </header>
    )
}

export default Banner