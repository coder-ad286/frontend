import { listAll, ref } from "firebase/storage";
import { storage } from "../firebase/config";

const validate = (input) => {
    let error = null;
    if (input.username === '') {
        error = {
            ...error,
            username: 'Username is Required..!'
        }
    }
    else if (!(input.username.includes('@wibetec.in'))) {
        error = {
            ...error,
            username: 'Invalid Email..!'
        }
    }
    if (input.password === '') {
        error = {
            ...error,
            password: 'Password is Required..!'
        }

    }
    else if (input.password.length < 6) {
        error = {
            ...error,
            password: 'Should Contains 6 charcter ..!'
        }

    }
    if (input.accesskey === '') {
        error = {
            ...error,
            accesskey: 'AccessKey is Required..!'
        }
    }
    else if (input.accesskey.length < 6) {
        error = {
            ...error,
            accesskey: 'Should Contains 6 Character ..!'
        }

    }
    else if (input.accesskey !== '3J1E2E') {
        error = {
            ...error,
            accesskey: 'Invalid Accesskey...!'
        }
    }
    return error;
}

export const validateImage = async (image) => {

    if (!image) {
        return "Please Select Image...!";
    }
    const imageType = image.type;
    if (!(imageType.includes('jpeg') || imageType.includes('jpg') || imageType.includes('png'))) {
        return "Only .jpg,.jpeg,.png. is Allowed"
    }
    if (!(image.size <= (5120 * 1024))) {
        return "Size limit exceed , Required within 5mb  ...!";
    }
    const imageListRef = ref(storage, '/gallary');
    let imgErr = null;
    await listAll(imageListRef)
        .then((res) => {
            if (res.items.length >= 25) {
                imgErr = 'Storage Limit Exceed ...!(25 allowed)';
            }
        })
    return imgErr;
}

export default validate