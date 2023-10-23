import { useEffect, useState } from 'react'
import { BiSolidTrashAlt } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { isAuthenicated } from '../../utils/authenicate'
import { getToken, removeToken } from '../../utils/storage';
import { db } from '../../firebase/config';
import { deleteImage } from '../../api/bucketAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth } from 'firebase/auth';
import { collection, onSnapshot } from 'firebase/firestore';


const AdminPanel = () => {
   const navigate = useNavigate();
   const [error, setError] = useState(null);
   const [images, setImages] = useState([]);
   const [loading, setLoading] = useState(null);
   const [deleted, setDeleted] = useState(false);



   useEffect(() => {
      if (!isAuthenicated()) {
         return navigate('/admin')
      }
      getAuth().onAuthStateChanged((user) => {
         if (!user) {
            return navigate('/admin');
         }
         if (!(user.uid === getToken())) {
            return navigate('/admin');
         }
      })
   }, [navigate])

   useEffect(() => {

      async function api() {
         setLoading(true);
         const collectionRef = collection(db, 'images');

         try {
            onSnapshot(collectionRef, (snapshot) => {
               setImages([])
               snapshot.docs.forEach((doc) => {
                  setImages((prev) => {

                     return [
                        ...prev,
                        {
                           ...doc.data(),
                           id: doc.id
                        }
                     ]
                  })
               })

            })
         }
         catch(error){
            setError(error.message)
         }
         setLoading(false)
      }
      api();
   }, [images, deleted])

   const logoutHandler = () => {
      removeToken()
      navigate('/admin');
   }
   const galleryHandler = () => {
      navigate('/gallery')
   }
   const uploadHandler = () => {
      navigate('/admin/panel/upload');
   }
   const deleteHandler = async (imageName, imageId) => {
      toast.info('Loading....', {
         position: toast.POSITION.TOP_RIGHT
      })
      await deleteImage(imageName, imageId, toast)
      toast.dismiss();
      setDeleted(!deleted);

   }

   return (
      <main>
         <section className='bg-black  p-1.5 px-5'>
            <div className='container my-5  mx-auto'>
               <div className='flex justify-between '>
                  <div >
                     <button onClick={uploadHandler} className='bg-white px-3 py-1 font-bold rounded'>
                        Upload
                     </button>
                  </div>
                  <div>
                     <button onClick={galleryHandler} className='bg-white px-3 py-1 font-bold rounded'>
                        View Gallary
                     </button>
                  </div>
                  <div>
                     <button onClick={logoutHandler} className='bg-white text-red-600 px-3 py-1 font-bold rounded'>
                        Logout
                     </button>
                  </div>
               </div>
            </div>
            <div className='container my-2 p-5 bg-white mx-auto rounded'>
               {
                  loading && <h1 className='font-Poppins text-center font-bold'>Loading...</h1>
               }

               {images.length > 0 && !loading && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {images.map(image => (
                     <div key={image.id}>
                        <div className='bg-[#f0008c]  rounded-lg '>
                           <div className='  w-full h-44  overflow-auto'>
                              <img src={image.downloadURl} alt={image.name} className='drop-shadow-2xl rounded-t-lg w-full h-full object-cover' />
                           </div>
                           <div className='flex  justify-between py-2 px-5'>
                              <label className=' text-center font-bold text-white'>{image.name}</label>
                              <button onClick={() => {
                                 deleteHandler(image.name, image.id);
                              }}>

                                 <BiSolidTrashAlt size={20} color='white' className='hover:text-black' />
                              </button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>}
               {
                  !loading && images.length === 0 && <h1 className='font-Poppins text-center font-bold'>No Images Found, You Can Upload.</h1>
               }
               {
                  !loading && error && <h1 className='text-red-700'>{error}</h1>
               }
            </div>
         </section>
         <ToastContainer />
      </main>
   )
}

export default AdminPanel