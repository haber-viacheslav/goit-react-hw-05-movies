import toast from 'react-hot-toast';
import { createPortal } from 'react-dom';

const Notify = document.querySelector('#notification');
export const notifySuccess = () => {
  return createPortal(<>{toast.loading('Success.')}</>, Notify);
};

// , {
//     duration: 4000,
//     position: 'top-center',
//     style: {
//       minWidth: '250px',
//     },
//     success: {
//       duration: 5000,
//       icon: '🔥',
//     },
//   }
