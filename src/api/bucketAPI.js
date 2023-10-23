import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../firebase/config';
import { v4 } from 'uuid';
import { addDoc, collection, deleteDoc, doc} from 'firebase/firestore';

export const uploadImage = async (image, setError) => {

    const imageRef = ref(storage, `gallary/${image.name.slice(0, 10) + '-id-' + v4().slice(0, 4)}`);
    try {
        const snapshot = await uploadBytes(imageRef, image);
        const downloadUrl = await getDownloadURL(snapshot.ref);
        const collectionRef = collection(db, 'images')
        const data = {
            downloadURl: downloadUrl,
            name: snapshot.metadata.name
        }
        await addDoc(collectionRef, data)
    }
    catch (error) {
        setError(error.message)
    }
}

export const getImages = async (setImages) => {
    // * USED TO REFER COLLECTION FROM FIRESTORE

}

export const deleteImage = async (image,id, toast) => {
    const imageRef = ref(storage, `gallary/${image}`);
    await deleteObject(imageRef)
        .then((res) => {
            toast.success('Image Deleted Succesfully.', {
                position: toast.POSITION.TOP_RIGHT
            })
        })
        .catch((error) => {
            toast.error(error.mesage, {
                position: toast.POSITION.TOP_RIGHT
            })
        })
    const docRef = doc(db, 'images', id);
    try {
        await deleteDoc(docRef);
    }
    catch (error) {
        toast.error(error.mesage, {
            position: toast.POSITION.TOP_RIGHT
        })
    }

}
