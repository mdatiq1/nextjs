import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 function Toast(message) {
 toast.success(message)
}

export default Toast


export function errorToast (message){
    toast.error(message)
} 