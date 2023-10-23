import React, { useState } from 'react'
import { RiImageAddFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { uploadImage } from '../../api/bucketAPI';
import { validateImage } from '../../utils/validate';

const AdminUpload = () => {
  const [imageURL, setImageURL] = useState(null);
  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);
  const naviagte = useNavigate()

  const inputHandler = (e) => {
    setImage(e.target.files[0]);
    setImageURL(URL.createObjectURL(e.target.files[0]));
  }

  const publishHandler = async () => {
    setLoading(true);
    const isError = await validateImage(image);
    setLoading(false);
    if (isError) {
      return setError(isError)
    }
    setError(null);
    setLoading(true);
    await uploadImage(image, setError);
    setLoading(false);
    naviagte('/admin/panel')
  }
  return (
    <main>
      <section className='bg-black h-full p-1.5 px-5'>
        <div className='container my-1 p-2 rounded-xl
         bg-white mx-auto'>
          <div className='p-5'>
            <h1 className='font-Poppins font-bold text-center text-xl sm:text-2xl'>Upload Image</h1>
          </div>
          <div className='flex flex-col  justify-center'>

            <label htmlFor={imageURL ? 'img' : 'image'} className='hover:cursor-pointer border-4 w-32 h-32 sm:w-52 border-gray-600 sm:h-52 flex justify-center items-center mx-auto border-dotted '>
              <div className=' w-full h-full items-center  flex justify-center overflow-auto'>
                {
                  imageURL ? <img src={imageURL} alt="" className='' /> : <RiImageAddFill size={100} />
                }
              </div>
              <input onChange={inputHandler} type="file" name="image" id="image" className='hidden' />
            </label>
            {error && <p className='text-center mt-3 text-red-500 font-Poppins font-bold'>{error}</p>}
            <div className='mt-5 flex justify-center'>
              <button disabled={loading} onClick={publishHandler} className='bg-green-500 px-3 py-1 rounded font-Poppins font-bold'>{loading ? 'Uploading...' : 'Publish +'}</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AdminUpload